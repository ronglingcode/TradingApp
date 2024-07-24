import * as RiskManager from '../algorithms/riskManager';
import * as TakeProfit from '../algorithms/takeProfit';
import * as Models from '../models/models';
import type * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as Broker from '../api/broker';
import * as Config from '../config/config';
import * as Firestore from '../firestore';
import * as Helper from '../utils/helper';
import * as EntryHandler from './entryHandler';
declare let window: Models.MyWindow;

export const submitAddPartial = async (
    symbol: string, entryPrice: number, stopOutPrice: number, isLong: boolean, quantity: number,
    orderType: Models.OrderType, logTags: Models.LogTags,
) => {
    // use 5R for target because sometimes reload at very close to stop price
    let targetPrice = getTargetPriceForReload(symbol, isLong, entryPrice, stopOutPrice);
    Broker.submitEntryOrderWithBracket(
        symbol, quantity, isLong, orderType,
        entryPrice, targetPrice, stopOutPrice, logTags,
    )
};

export const submitBreakoutOrders = (
    symbol: string, entryPrice: number, stopOut: number, isLong: boolean, multiplier: number,
    plan: TradingPlansModels.BasePlan,
    logTags: Models.LogTags) => {
    Firestore.logInfo("Submitting orders!!! submitBreakoutOrders()", logTags);
    let exitTargets = plan.targets;
    let orderType = Models.OrderType.STOP;
    let currentPrice = Models.getCurrentPrice(symbol);
    if ((isLong && currentPrice > entryPrice) || (!isLong && currentPrice < entryPrice)) {
        orderType = Models.OrderType.LIMIT;
    }
    let fixedQuantity = Models.getFixedQuantityFromInput(symbol);
    if (fixedQuantity > 0) {
        Firestore.logInfo(`fix quantity ${fixedQuantity}`, logTags);
        let submitEntryResult = submitEntryOrdersWithFixedQuantity(
            symbol, orderType, isLong,
            entryPrice, stopOut,
            fixedQuantity, exitTargets, logTags
        );
        return submitEntryResult;
    } else {
        Firestore.logInfo(`fixed risk ${multiplier}`, logTags);
        let submitEntryResult = submitEntryOrdersWithFixedRisk(
            symbol, orderType, isLong, entryPrice, stopOut, "default quality",
            multiplier, exitTargets, logTags
        );
        Firestore.logDebug(`entry with quantity ${submitEntryResult.totalQuantity}`, logTags);
        return submitEntryResult;
    }
};

export const submitMarketEntryOrders = (
    symbol: string, estimatedEntryPrice: number, stopOutPrice: number, isLong: boolean, multiplier: number,
    plan: TradingPlansModels.BasePlan,
    logTags: Models.LogTags) => {
    let exitTargets = plan.targets;
    let fixedQuantity = Models.getFixedQuantityFromInput(symbol);
    if (fixedQuantity > 0) {
        let submitEntryResult = submitEntryOrdersWithFixedQuantity(
            symbol, Models.OrderType.MARKET, isLong, estimatedEntryPrice, stopOutPrice,
            fixedQuantity, exitTargets, logTags
        );
        return submitEntryResult;
    } else {
        let submitEntryResult = submitEntryOrdersWithFixedRisk(
            symbol, Models.OrderType.MARKET, isLong, estimatedEntryPrice,
            stopOutPrice, "A", multiplier, exitTargets, logTags
        );
        return submitEntryResult;
    }
}

export const submitEntryOrdersWithFixedRisk = (
    symbol: string, orderType: Models.OrderType, isLong: boolean,
    entryPrice: number, stopOutPrice: number, setupQuality: string, multiplier: number,
    exitTargets: TradingPlansModels.ExitTargets, logTags: Models.LogTags) => {
    let isEquity = Config.getProfileSettingsForSymbol(symbol).isEquity;
    let afterSplippage = addSlippage(symbol, isLong, entryPrice, stopOutPrice, isEquity);
    entryPrice = afterSplippage.entryPrice;
    stopOutPrice = afterSplippage.stopOutPrice;

    let totalShares = RiskManager.calculateTotalShares(symbol, entryPrice, stopOutPrice, setupQuality, multiplier);
    let profitTargets = TakeProfit.getInitialProfitTargets(symbol, totalShares, entryPrice, stopOutPrice, exitTargets.initialTargets, logTags);

    let submitResult = submitEntryOrders(symbol, isLong, orderType, entryPrice, stopOutPrice, profitTargets, logTags);
    return submitResult;
};

export const submitEntryOrdersWithFixedQuantity = (
    symbol: string, orderType: Models.OrderType, isLong: boolean,
    entryPrice: number, stopOutPrice: number, quantity: number,
    exitTargets: TradingPlansModels.ExitTargets, logTags: Models.LogTags) => {
    let isEquity = Config.getProfileSettingsForSymbol(symbol).isEquity;
    let afterSplippage = addSlippage(symbol, isLong, entryPrice, stopOutPrice, isEquity);
    entryPrice = afterSplippage.entryPrice;
    stopOutPrice = afterSplippage.stopOutPrice;

    let totalShares = quantity;

    let profitTargets = TakeProfit.getProfitTargetsForFixedQuantity(symbol, totalShares, entryPrice, stopOutPrice, exitTargets);
    let submitResult = submitEntryOrders(symbol, isLong, orderType, entryPrice, stopOutPrice, profitTargets, logTags);
    return submitResult;
};

const addSlippage = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number, isEquity: boolean) => {
    if (isEquity) {
        // add 1 cent for slippage
        if (isLong) {
            entryPrice = RiskManager.addCents(entryPrice, 1);
            stopOutPrice = RiskManager.minusCents(stopOutPrice, 1);
        } else {
            entryPrice = RiskManager.minusCents(entryPrice, 1);
            stopOutPrice = RiskManager.addCents(stopOutPrice, 1);
        }
    }
    return {
        "entryPrice": entryPrice,
        "stopOutPrice": stopOutPrice,
    }
}

export const submitEntryOrders = (symbol: string, isLong: boolean,
    orderType: Models.OrderType, entryPrice: number, stopOutPrice: number, profitTargets: Models.ProfitTarget[],
    logTags: Models.LogTags) => {
    let enabledSingleOrder = window && window.HybridApp && window.HybridApp.TradingData &&
        window.HybridApp.TradingData.tradingSettings && window.HybridApp.TradingData.tradingSettings.useSingleOrderForEntry;

    let totalQuantity = 0;
    profitTargets.forEach((profitTarget: any) => {
        let quantity = profitTarget.quantity;
        totalQuantity += quantity;
    });

    if (!enabledSingleOrder) {
        submitEntryOrdersAsMultiple(symbol, isLong, orderType, entryPrice, stopOutPrice, profitTargets, logTags);
        let result: Models.SubmitEntryResult = {
            totalQuantity: totalQuantity,
            profitTargets: profitTargets,
            isSingleOrder: false,
        };
        return result;
    }
    let hasEnoughBuyingPower = RiskManager.hasEnoughBuyingPower(entryPrice, totalQuantity);
    if (!hasEnoughBuyingPower) {
        Firestore.logInfo(`not enough buying power, use multiple orders`, logTags);
        submitEntryOrdersAsMultiple(symbol, isLong, orderType, entryPrice, stopOutPrice, profitTargets, logTags);
        let result: Models.SubmitEntryResult = {
            totalQuantity: totalQuantity,
            profitTargets: profitTargets,
            isSingleOrder: false,
        };
        return result;
    }

    submitEntryOrdersAsSingle(
        symbol, isLong, totalQuantity, orderType, entryPrice, stopOutPrice,
        profitTargets, logTags);
    let result: Models.SubmitEntryResult = {
        totalQuantity: totalQuantity,
        profitTargets: profitTargets,
        isSingleOrder: true,
    };
    return result;
};

export const submitEntryOrdersAsMultiple = (symbol: string, isLong: boolean,
    orderType: Models.OrderType, entryPrice: number, stopOutPrice: number, profitTargets: Models.ProfitTarget[],
    logTags: Models.LogTags) => {
    profitTargets.forEach((profitTarget: any) => {
        let quantity = profitTarget.quantity;
        let limitPrice = profitTarget.target;
        Broker.submitEntryOrderWithBracket(
            symbol, quantity, isLong, orderType,
            entryPrice, limitPrice, stopOutPrice, logTags,
        )
    });
}

export const submitEntryOrdersAsSingle = (symbol: string, isLong: boolean, totalQuantity: number,
    orderType: Models.OrderType, entryPrice: number, stopOutPrice: number, profitTargets: Models.ProfitTarget[],
    logTags: Models.LogTags) => {
    // 20% at 0.9 R, rest at 1.9 R
    let target1 = TakeProfit.getTargetPriceByRiskReward(symbol, isLong, entryPrice, stopOutPrice, 0.9);
    let target2 = TakeProfit.getTargetPriceByRiskReward(symbol, isLong, entryPrice, stopOutPrice, 1.9);
    let quantity1 = profitTargets[0].quantity + profitTargets[1].quantity;
    let quantity2 = totalQuantity - quantity1;

    Broker.submitEntryOrderWithBracket(
        symbol, quantity1, isLong, orderType,
        entryPrice, target1, stopOutPrice, logTags,
    );

    Broker.submitEntryOrderWithBracket(
        symbol, quantity2, isLong, orderType,
        entryPrice, target2, stopOutPrice, logTags,
    );
};

export const marketOut = async (symbol: string, quantity: number, logTags: Models.LogTags) => {
    let netQuantity = Models.getPositionNetQuantity(symbol);
    let isLong = netQuantity > 0;
    return Broker.submitSingleOrder(symbol, Models.OrderType.MARKET, quantity, 0, !isLong, false, logTags);
}

export const adjustSimpleOrdersWithNewPrice = async (orders: Models.OrderModel[], newPrice: number, logTags: Models.LogTags) => {
    orders.forEach(order => {
        Broker.replaceSimpleOrderWithNewPrice(order, newPrice, logTags);
    });
};
export const adjustExitPairsWithNewPrice = async (
    pairs: Models.ExitPair[], newPrice: number,
    isStopLeg: boolean, positionIsLong: boolean, logTags: Models.LogTags
) => {
    pairs.forEach(pair => {
        Broker.replaceExitPairWithNewPrice(pair, newPrice, isStopLeg, positionIsLong, logTags);
    })
}

export const adjustHalfExitOrdersWithNewPrice = async (symbol: string, newPrice: number,
    pairs: Models.ExitPair[], logTags: Models.LogTags) => {
    let useStopLeg = isStopLeg(symbol, newPrice);
    let positionIsLong = Models.getPositionNetQuantity(symbol) > 0;
    adjustExitPairsWithNewPrice(pairs, newPrice, useStopLeg, positionIsLong, logTags);

};
export const moveAllStopExitsToNewPrice = async (symbol: string, newPrice: number, logTags: Models.LogTags) => {
    let exitPairs = Models.getExitPairs(symbol);
    let netQuantity = Models.getPositionNetQuantity(symbol);
    let positionIsLong = netQuantity > 0;
    adjustExitPairsWithNewPrice(exitPairs, newPrice, true, positionIsLong, logTags);
};

export const raiseAllTargetsBelow = async (symbol: string, isLong: boolean, newPrice: number, logTags: Models.LogTags) => {
    let exitPairs = Models.getExitPairs(symbol);
    let allowedPairs: Models.ExitPair[] = [];
    exitPairs.forEach(pair => {
        if (pair.LIMIT && pair.LIMIT.price) {
            let oldPrice = pair.LIMIT.price;
            if ((isLong && newPrice > oldPrice) ||
                (!isLong && newPrice < oldPrice)) {
                allowedPairs.push(pair);
            }
        }
    });

    let netQuantity = Models.getPositionNetQuantity(symbol);
    let positionIsLong = netQuantity > 0;

    adjustExitPairsWithNewPrice(exitPairs, newPrice, false, positionIsLong, logTags);
};

export const getHalfExitOrdersPairs = (symbol: string) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return [];
    let pairs = widget.exitOrderPairs;
    let halfOfPairs = [];
    for (let i = 0; i < pairs.length; i++) {
        if (i % 2 == 0) {
            halfOfPairs.push(pairs[i]);
        }
    }
    return halfOfPairs;
};
export const isStopLeg = (symbol: string, newPrice: number) => {
    let currentPrice = Models.getCurrentPrice(symbol);
    let netQuantity = Models.getPositionNetQuantity(symbol);
    return (netQuantity > 0 && newPrice < currentPrice) ||
        (netQuantity < 0 && newPrice > currentPrice);
}
export const chooseOrderLeg = (symbol: string, pairs: Models.ExitPair[], newPrice: number) => {
    let chooseStopLeg = isStopLeg(symbol, newPrice);
    let orders: Models.OrderModel[] = [];
    pairs.forEach(pair => {
        if (chooseStopLeg) {
            if (pair.STOP)
                orders.push(pair['STOP']);
        }
        else {
            if (pair.LIMIT)
                orders.push(pair['LIMIT']);
        }
    });
    return orders;
};

export const getTargetPriceForReload = (symbol: string, isLong: boolean,
    entryPrice: number, stopOutPrice: number) => {
    let exitPairs = Models.getExitOrdersPairs(symbol);
    if (exitPairs.length > 0) {
        let targetPrices: number[] = [];
        exitPairs.forEach(pair => {
            if (pair.LIMIT && pair.LIMIT.price) {
                targetPrices.push(pair.LIMIT.price);
            }
        });
        if (isLong) {
            return Math.min(...targetPrices);
        } else {
            return Math.max(...targetPrices);
        }
    } else {
        let risk = Math.abs(entryPrice - stopOutPrice);
        let exitPrice = isLong ? entryPrice + risk : entryPrice - risk;
        return Helper.roundPrice(symbol, exitPrice);
    }
}

export const replaceEntryWithNewStop = (symbol: string, isLong: boolean,
    entryPrice: number, newStopLoss: number,
    initialSizeMultiplier: number, plan: TradingPlansModels.BasePlan,
    logTags: Models.LogTags) => {
    Firestore.logDebug('update entry orders', logTags);
    Broker.cancelBreakoutEntryOrders(symbol);
    EntryHandler.breakoutEntryWithoutRules(
        symbol, isLong, entryPrice, newStopLoss, logTags, initialSizeMultiplier, plan);
}

export const submitExitPairs = (symbol: string, profitTargets: Models.ProfitTarget[], stopLoss: number,
    logTags: Models.LogTags) => {
    let netQuantity = Models.getPositionNetQuantity(symbol);
    let positionIsLong = true;
    if (netQuantity > 0) {
        positionIsLong = true;
    } else if (netQuantity < 0) {
        positionIsLong = false;
    } else {
        return;
    }
    let remainingQuantity = Math.abs(netQuantity);
    let i = profitTargets.length - 1;

    while (i >= 0 && remainingQuantity > 0) {
        let pt = profitTargets[i];
        Broker.submitExitOrderWithBroker(
            symbol, pt.quantity, positionIsLong, pt.target, stopLoss, logTags
        )
        remainingQuantity -= pt.quantity;
        i--;
    }
}
export const mytest = () => {
    let symbol = 'VKTX';
    let profitToTargets: Models.ProfitTarget[] = [
        {
            quantity: 1,
            target: 90,
        }
    ];
    let logTags: Models.LogTags = {
        symbol: symbol,
        logSessionName: 'mytest',
    };
    submitExitPairs(symbol, profitToTargets, 400, logTags);
}

export const mytest2 = () => {
    Broker.submitExitOrderWithBroker(
        'TSLA', 1, true, 182, 178, {}
    )
}