import * as Chart from '../ui/chart';
import * as Models from '../models/models';
import * as Helper from '../utils/helper';
import * as Firestore from '../firestore';
import * as OrderFlow from './orderFlow';
import * as TradingState from '../models/tradingState';
import * as EntryRulesChecker from './entryRulesChecker';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as Strategies from '../algorithms/strategies';
import * as AutoRedToGreen60 from '../algorithms/autoRedToGreen60';
import * as AutoFirstBreakout from '../algorithms/autoFirstBreakout';
import * as AutoRedToGreen from '../algorithms/autoRedToGreen';
import * as AutoFirstNewHigh from '../algorithms/autoFirstNewHigh';
import * as Patterns from '../algorithms/patterns';
import * as Handler from './handler';
import * as Broker from '../api/broker';

export const getLogTagsForEntryAction = (symbol: string, isLong: boolean, entryType: string) => {
    let action = isLong ? "buy" : "sell";
    let logTags = Models.generateLogTags(symbol, `${symbol}-${entryType}_${action}`);
    return logTags;
};


const getOrderType = (symbol: string, isLong: boolean, shiftKey: boolean, entryPrice: number) => {
    if (shiftKey) {
        return Models.OrderType.MARKET;
    }
    let currentPrice = Models.getCurrentPrice(symbol);
    if ((isLong && entryPrice > currentPrice) ||
        (!isLong && entryPrice < currentPrice)) {
        return Models.OrderType.STOP;
    } else {
        return Models.OrderType.LIMIT;
    }
}

export const entryAfterOpen = (symbol: string, isLong: boolean, shiftKey: boolean,
    secondsSinceMarketOpen: number,
    plan: TradingPlansModels.SingleDirectionPlans) => {
    if (secondsSinceMarketOpen < 0) {
        Firestore.logError(`market not opened`);
    } else if (secondsSinceMarketOpen < 60) {
        Firestore.logError(`use buttons instead for first 60 seconds`);
    } else if (secondsSinceMarketOpen < 120) {
        if (plan.firstNewHighPlan) {
            AutoFirstNewHigh.startAlgo(symbol, isLong, true, plan.firstNewHighPlan);
        }
    }
};
export const entryForNewsBreakout = (symbol: string, isLong: boolean,
    newsBreakoutPlan: TradingPlansModels.NewsBreakoutPlan) => {
    let logTags = getLogTagsForEntryAction(symbol, isLong, "news_breakout");
    let entryPrice = getEntryPrice(symbol, isLong, false);
    let stopOutPrice = Chart.getStopLossPrice(symbol, isLong, null);
    let planType = TradingPlansModels.PlanType.NewsBreakout;
    commonEntry(symbol, isLong, false, stopOutPrice, newsBreakoutPlan, planType, 0.5, logTags);
};
export const entryForRetracement = (symbol: string, isLong: boolean, shiftKey: boolean, entryPrice: number,
    retracementArea: TradingPlansModels.RetracementArea) => {
    let planType = TradingPlansModels.PlanType.Retracement;
    let logTags = getLogTagsForEntryAction(symbol, isLong, "pullback");
    let stopPrice = Chart.getStopLossPrice(symbol, isLong, retracementArea.stopPrice);
    let allowedSizeMutiplier = EntryRulesChecker.checkRetracementEntryRules(symbol, isLong, retracementArea, logTags, entryPrice, stopPrice);
    commonEntry(symbol, isLong, shiftKey, stopPrice, retracementArea, planType, allowedSizeMutiplier, logTags);
};

export const entryForAlgo = (symbol: string, isLong: boolean,
    algo: TradingPlansModels.BreakoutAlgo) => {
    let logTags = getLogTagsForEntryAction(symbol, isLong, "breakoutAlgo");
    let stopOutPrice = Chart.getStopLossPrice(symbol, isLong, null);
    let shiftKey = false;
    let orderType = Models.OrderType.STOP;
    let entryPrice = TradingPlans.getBreakoutEntryPrice(symbol, isLong, algo);
    let currentPrice = Models.getCurrentPrice(symbol);
    if ((isLong && currentPrice > entryPrice) || (isLong && currentPrice < entryPrice)) {
        orderType = Models.OrderType.MARKET;
        entryPrice = currentPrice;
        shiftKey = true;
    }
    let allowedSizeMutiplier = EntryRulesChecker.checkAlgoEntryRules(symbol, entryPrice, stopOutPrice, algo, isLong, logTags);
    if (allowedSizeMutiplier <= 0) {
        return 0;
    }
    commonEntry(symbol, isLong, shiftKey, stopOutPrice, algo,
        TradingPlansModels.PlanType.BreakoutAlgo, allowedSizeMutiplier, logTags);
    return allowedSizeMutiplier;
}

export const commonEntry = (symbol: string, isLong: boolean, shiftKey: boolean,
    stopOutPrice: number, plan: TradingPlansModels.BasePlan, planType: TradingPlansModels.PlanType,
    allowedSizeMutiplier: number, logTags: Models.LogTags) => {
    if (allowedSizeMutiplier == 0) {
        Firestore.logError(`allowed size is 0 for ${symbol}`, logTags);
        return;
    }
    Strategies.overrideTradingPlans(plan, planType);
    if (shiftKey) {
        marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, allowedSizeMutiplier, plan);
    } else {
        let entryPrice = Chart.getBreakoutEntryPrice(symbol, isLong);
        breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, allowedSizeMutiplier, plan);
    }
};
export const commonBreakoutEntry = (symbol: string, isLong: boolean, entryPrice: number,
    stopOutPrice: number, plan: TradingPlansModels.BasePlan, planType: TradingPlansModels.PlanType,
    allowedSizeMutiplier: number, logTags: Models.LogTags) => {
    if (allowedSizeMutiplier == 0) {
        Firestore.logError(`allowed size is 0 for ${symbol}`, logTags);
        return;
    }
    Strategies.overrideTradingPlans(plan, planType);
    breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, allowedSizeMutiplier, plan);
};
export const breakoutEntryWithoutRules = (symbol: string, isLong: boolean,
    entryPrice: number, stopOutPrice: number, logTags: Models.LogTags,
    allowedSizeMutiplier: number, plan: TradingPlansModels.BasePlan) => {
    let action = isLong ? "buy" : "sell";

    let logMessage = `${action} stop ${entryPrice},`;
    logMessage += `stop loss: ${stopOutPrice},`;
    logMessage += `multiplier: ${allowedSizeMutiplier}`;
    Firestore.logInfo(logMessage, logTags);
    let symbolData = Models.getSymbolData(symbol);
    if (isLong && symbolData.ask > entryPrice) {
        Firestore.logInfo(`replace entry price ${entryPrice} with current ask ${symbolData.ask}`)
        entryPrice = symbolData.ask;
    }
    if (!isLong && symbolData.bid < entryPrice) {
        Firestore.logInfo(`replace entry price ${entryPrice} with current bid ${symbolData.bid}`)
        entryPrice = symbolData.bid;
    }

    let submitEntryResult = OrderFlow.submitBreakoutOrders(symbol, entryPrice, stopOutPrice, isLong, allowedSizeMutiplier, plan, logTags);
    TradingState.onPlaceBreakoutTrade(symbol, isLong, entryPrice, stopOutPrice, submitEntryResult, allowedSizeMutiplier, plan);
};

const marketEntryWithoutRules = (symbol: string, isLong: boolean,
    stopOutPrice: number, logTags: Models.LogTags,
    allowedSizeMutiplier: number,
    plan: TradingPlansModels.BasePlan) => {
    let estimatedEntryPrice = Models.getCurrentPrice(symbol);
    let action = isLong ? 'buy' : 'sell';
    let logMessage = `market ${action} near ${estimatedEntryPrice},`;
    logMessage += ` stop loss: ${stopOutPrice},`;
    logMessage += ` multiplier: ${allowedSizeMutiplier}`;
    Firestore.logInfo(logMessage, logTags);

    let submitEntryResult = OrderFlow.submitMarketEntryOrders(
        symbol, estimatedEntryPrice, stopOutPrice, isLong, allowedSizeMutiplier, plan, logTags
    );
    TradingState.onPlaceMarketTrade(symbol, isLong, estimatedEntryPrice, stopOutPrice, submitEntryResult, allowedSizeMutiplier, plan);
};
const getEntryPrice = (symbol: string, isLong: boolean, shiftKey: boolean) => {
    if (shiftKey) {
        return Models.getCurrentPrice(symbol);
    } else {
        return Chart.getBreakoutEntryPrice(symbol, isLong);
    }
}
export const runRedToGreen60Plan = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.BasePlan, planType: TradingPlansModels.PlanType,
    logTags: Models.LogTags) => {
    let { entryPrice, stopOutPrice } = Models.getHighLowBreakoutEntryStopPrice(symbol, isLong);
    let widget = Models.getChartWidget(symbol);
    if (widget) {
        if (widget.entryPriceLine) {
            let newEntryPrice = widget.entryPriceLine.options().price;
            if ((isLong && newEntryPrice > entryPrice) ||
                (!isLong && newEntryPrice < entryPrice)) {
                entryPrice = newEntryPrice;
            } else {
                Firestore.logError(`do not allow custom price before opponent stops out`, logTags);
            }
        }
        if (widget.stopLossPriceLine) {
            Firestore.logError(`do not allow custom stop loss for red to green`, logTags);
        }
    }

    Strategies.overrideTradingPlans(plan, planType);
    let multipler = EntryRulesChecker.checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (multipler <= 0) {
        return 0;
    }
    breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
    return multipler;
};
export const runRedToGreenPlan = (symbol: string, isLong: boolean, plan: TradingPlansModels.RedToGreenPlan) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}_red2green-plan`);
    let { entryPrice, stopOutPrice } = Models.getHighLowBreakoutEntryStopPrice(symbol, isLong);
    let widget = Models.getChartWidget(symbol);
    if (widget) {
        if (widget.entryPriceLine) {
            let newEntryPrice = widget.entryPriceLine.options().price;
            if ((isLong && newEntryPrice > entryPrice) ||
                (!isLong && newEntryPrice < entryPrice)) {
                entryPrice = newEntryPrice;
            } else {
                Firestore.logError(`do not allow custom price before opponent stops out`, logTags);
            }
        }
        if (widget.stopLossPriceLine) {
            Firestore.logError(`do not allow custom stop loss for red to green`, logTags);
        }
    }

    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.RedToGreen);
    let multipler = EntryRulesChecker.checkRedToGreenPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        return 0;
    }
    breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
    return multipler;
};
export const runFirstNewHighPlan5 = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.FirstNewHighPlan) => {
    let result = Patterns.checkFirstNewHighPattern(symbol, isLong, 5);
    let logTags = Models.generateLogTags(symbol, "1st_new_high_5");
    if (result.status != 'ok') {
        Firestore.logError(result.status);
        return;
    }
    let entryPrice = result.entryPrice;
    let symbolData = Models.getSymbolData(symbol);
    let stopOutPrice = isLong ? symbolData.lowOfDay : symbolData.highOfDay;
    let multipler = EntryRulesChecker.checkFirstNewHighPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        Firestore.logError(`multipler is zero during rules checking`, logTags);
        return;
    }
    breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
}
export const runFirstNewHighPlan = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.FirstNewHighPlan,
    hasPreviousEntry: boolean, logTags: Models.LogTags) => {
    let result = Patterns.checkFirstNewHighPattern(symbol, isLong, 1);
    if (result.status == 'first 2 candles not closed') {
        Firestore.logError(result.status + ", continue in next cycle", logTags);
        return {
            orderSubmitted: false,
            needContinueNextCycle: true,
        };
    } else if (result.status == 'no closed reversal bar') {
        Firestore.logError(result.status, logTags);
        return {
            orderSubmitted: false,
            needContinueNextCycle: true,
        }
    } else if (result.status == 'already triggered in previous candle') {
        Firestore.logError(result.status, logTags);
        return {
            orderSubmitted: false,
            needContinueNextCycle: false,
        };
    }
    let useMarketOrder = result.status == 'already triggered in current candle';
    let symbolData = Models.getSymbolData(symbol);
    let stopOutPrice = symbolData.lowOfDay;
    if (!isLong) {
        stopOutPrice = symbolData.highOfDay;
    }
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.FirstNewHigh);

    if (useMarketOrder) {
        Firestore.logError(result.status, logTags);
        Firestore.logInfo('submit market order');
        return enterMarketOrderForFirstNewHigh(symbol, isLong, hasPreviousEntry, stopOutPrice, plan, logTags);
    }

    let entryPrice = result.entryPrice;
    // check opposite position
    let currentQuantity = Models.getPositionNetQuantity(symbol);
    let hasOppositionPosition = (isLong && currentQuantity < 0) || (!isLong && currentQuantity > 0);
    if (hasOppositionPosition) {
        // adjust exit stops
        Handler.adjustAllStopExits(symbol, entryPrice, false);
    }
    let entryOrders = Models.getBreakoutEntryOrders(symbol, isLong);
    let cancelPreviousEntry = false;
    if (entryOrders.length > 0 && entryOrders[0].price) {
        // has existing entry
        let oldEntryPrice = entryOrders[0].price;
        if ((isLong && oldEntryPrice > (entryPrice + 0.02)) ||
            (!isLong && oldEntryPrice < (entryPrice - 0.02))) {
            // cancel it if new entry price
            Broker.cancelBreakoutEntryOrders(symbol);
            cancelPreviousEntry = true;
        }
    }
    if (hasPreviousEntry) {
        if (cancelPreviousEntry) {
            let multipler = plan.planConfigs.size;
            breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
            return {
                orderSubmitted: true,
                needContinueNextCycle: true,
            };
        } else {
            return {
                orderSubmitted: true,
                needContinueNextCycle: true,
            };
        }
    } else {
        let multipler = EntryRulesChecker.checkFirstNewHighPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
        if (multipler <= 0) {
            Firestore.logError(`multipler is zero during rules checking`, logTags);
            return {
                orderSubmitted: false,
                needContinueNextCycle: false,
            };
        }
        breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
        return {
            orderSubmitted: true,
            needContinueNextCycle: true,
        };
    }
};

export const enterMarketOrderForFirstNewHigh = (
    symbol: string, isLong: boolean, hasPreviousEntries: boolean,
    stopOutPrice: number, plan: TradingPlansModels.FirstNewHighPlan,
    logTags: Models.LogTags
) => {
    if (hasPreviousEntries) {
        let entryOrders = Models.getBreakoutEntryOrders(symbol, isLong);
        let ids: string[] = [];
        entryOrders.forEach((eo: Models.EntryOrderModel) => {
            ids.push(eo.orderID);
        });
        Broker.cancelOrders(ids);
    }
    let entryPrice = Models.getCurrentPrice(symbol);
    let multipler = plan.planConfigs.size;
    if (!hasPreviousEntries) {
        multipler = EntryRulesChecker.checkFirstNewHighPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
        if (multipler <= 0) {
            Firestore.logError(`multipler is zero during rules checking`, logTags);
            return {
                orderSubmitted: false,
                needContinueNextCycle: false,
            };
        }
    }
    marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
    return {
        orderSubmitted: true,
        needContinueNextCycle: true,
    };
}

export const enterFirstNewHighAfterTriggered = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.FirstNewHighPlan) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}_market-in-first-new-high`);
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.FirstNewHigh);
    let result = Patterns.checkFirstNewHighPattern(symbol, isLong, 1);
    if (result.status == 'first candle not closed') {
        Firestore.logError(result.status, logTags);
        return;
    } else if (result.status == 'ok') {
        Firestore.logError(`not triggered yet, use breakout entry`, logTags);
        return;
    }

    let entryOrders = Models.getEntryOrders(symbol);
    if (entryOrders.length > 0 && entryOrders[0].price) {
        // has existing entry
        Firestore.logError(`already has entries`, logTags);
        return;
    }
    let symbolData = Models.getSymbolData(symbol);
    let stopOutPrice = symbolData.lowOfDay;
    if (!isLong) {
        stopOutPrice = symbolData.highOfDay;
    }
    let entryPrice = Models.getCurrentPrice(symbol);
    let marketOrder = true;
    let chart = Models.getChartWidget(symbol);
    if (chart && chart.entryPriceLine) {
        let markedPrice = chart.entryPriceLine.options().price;
        if ((isLong && entryPrice < markedPrice) ||
            (!isLong && entryPrice > markedPrice)) {
            marketOrder = false;
            entryPrice = markedPrice;
        }
    }
    let multipler = EntryRulesChecker.checkFirstNewHighPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        return;
    }
    multipler = multipler / 2; // size down due to chasing
    if (marketOrder) {
        marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
    } else {
        breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
    }
};

export const runSecondNewHighPlan = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.SecondNewHighPlan) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-2nd-new-high-plan`);
    let candles = Models.getCandlesSinceOpen(symbol);
    if (candles.length < 4) {
        Firestore.logError(`new at 4 candles for 2nd new high`, logTags);
        return;
    }
    let i = 1; // start from 2nd candle
    let end = candles.length - 2; // don't use the last candle because it's not closed
    // look for first new high
    let firstNewHigh = isLong ? candles[0].high : candles[0].low;
    while (i <= end) {
        let currentCandle = candles[i];
        let previousCandle = candles[i - 1];
        if ((isLong && currentCandle.high >= previousCandle.high) ||
            (!isLong && currentCandle.low <= previousCandle.low)) {
            i++;
        } else {
            break;
        }
    }
    /* there are incorrect data from alpaca, so allow this case
    if (i <= 1) {
        Firestore.logError(`not start with new high, not valid for 2nd new high`, logTags);
        return;
    }*/
    if (i > end) {
        Firestore.logError(`no pullback yet, not valid for 2nd new high`, logTags);
        return;
    }
    // look for first pullback
    while (i <= end) {
        let currentCandle = candles[i];
        let previousCandle = candles[i - 1];
        if ((isLong && currentCandle.high <= previousCandle.high) ||
            (!isLong && currentCandle.low >= previousCandle.low)) {
            i++;
        } else {
            Firestore.logError(`2nd new high already triggered`, logTags);
            return;
        }
    }

    let entryCandle = candles[i - 1];
    let entryPrice = isLong ? entryCandle.high : entryCandle.low;
    Firestore.logInfo(`entry candle price ${entryPrice}`, logTags);


    // check last candle
    let useMarketOrder = false;
    let lastCandle = candles[candles.length - 1];
    if ((isLong && lastCandle.high > entryPrice) ||
        (!isLong && lastCandle.low < entryPrice)) {
        Firestore.logInfo(`current candle already triggered, market order in`, logTags);
        entryPrice = Models.getCurrentPrice(symbol);
        useMarketOrder = true;
    }

    let symbolData = Models.getSymbolData(symbol);
    let stopOutPrice = symbolData.lowOfDay;
    if (!isLong) {
        stopOutPrice = symbolData.highOfDay;
    }

    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.SecondNewHigh);
    let multipler = EntryRulesChecker.checkSecondNewHighPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        return false;
    }
    if (useMarketOrder) {
        marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
    } else {
        breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
    }
    return true;

};
export const runOpenRangeBreakoutPlan = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.OpenRangeBreakoutPlan, shiftKey: boolean) => {
    let { entryPrice, stopOutPrice } = Models.getHighLowBreakoutEntryStopPrice(symbol, isLong);
    if (shiftKey) {
        entryPrice = Models.getCurrentPrice(symbol);
    }
    let logTags = Models.generateLogTags(symbol, `${symbol}false-breakout-plan`);
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.OpenRangeBreakout);
    let multipler = EntryRulesChecker.checkOpenRangeBreakoutPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        return;
    }
    if (shiftKey) {
        marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
    } else {
        breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
    }
}

export const runImbalancePlan = (symbol: string, isLong: boolean, plan: TradingPlansModels.ImbalancePlan) => {
    let { entryPrice, stopOutPrice } = Models.getHighLowBreakoutEntryStopPrice(symbol, isLong);
    let logTags = Models.generateLogTags(symbol, `${symbol}_open-scalp-plan`);
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.Imbalance);
    let multipler = EntryRulesChecker.checkImbalancePlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        return;
    }
    breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
}
export const runOpenScalplan = (symbol: string, isLong: boolean, isMarketOrder: boolean,
    plan: TradingPlansModels.OpenScalpPlan) => {
    let { entryPrice, stopOutPrice } = Models.getHighLowBreakoutEntryStopPrice(symbol, isLong);
    if (isMarketOrder) {
        entryPrice = Models.getCurrentPrice(symbol);
    } else {
        let cw = Models.getChartWidget(symbol);
        if (cw && cw.entryPriceLine) {
            entryPrice = cw.entryPriceLine.options().price;
        }
    }

    let logTags = Models.generateLogTags(symbol, `${symbol}_open-scalp-plan`);
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.OpenScalp);
    let multipler = EntryRulesChecker.checkOpenScalpPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        return;
    }
    if (isMarketOrder) {
        marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
    } else {
        breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
    }
}
export const runFalseBreakoutPlan = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.FalseBreakoutPlan, shiftKey: boolean) => {
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.FalseBreakout);
    let { entryPrice, stopOutPrice } = Models.getHighLowBreakoutEntryStopPrice(symbol, isLong);
    if (shiftKey) {
        entryPrice = Models.getCurrentPrice(symbol);
    } else {
        let widget = Models.getChartWidget(symbol);
        if (widget && widget.entryPriceLine) {
            entryPrice = widget.entryPriceLine.options().price;
            plan.planConfigs.size = Math.max(plan.planConfigs.size, 0.2);
        }
    }
    let logTags = Models.generateLogTags(symbol, `${symbol}false-breakout-plan`);
    let isMarketEntry = shiftKey;
    let multipler = EntryRulesChecker.checkFalseBreakoutPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, isMarketEntry, logTags);
    if (multipler <= 0) {
        return;
    }
    if (isMarketEntry) {
        marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
    } else {
        breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
    }
}
export const runBothSidesFalseBreakoutPlan = (symbol: string, isLong: boolean, plan: TradingPlansModels.BothSidesFalseBreakoutPlan) => {
    let symbolData = Models.getSymbolData(symbol);
    let entryPrice = Models.getCurrentPrice(symbol);
    let stopOutPrice = symbolData.lowOfDay;
    if (!isLong) {
        stopOutPrice = symbolData.highOfDay;
    }
    let logTags = Models.generateLogTags(symbol, `${symbol}_both-fake-plan`);
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.BothSidesFalseBreakout);
    let multipler = EntryRulesChecker.checkBothSidesFalseBreakoutPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        return;
    }
    marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
}
export const runFirstRetracementPlan = (symbol: string, isLong: boolean, plan: TradingPlansModels.FirstRetracementPlan) => {
    let symbolData = Models.getSymbolData(symbol);
    let stopOutPrice = symbolData.lowOfDay;
    if (!isLong) {
        stopOutPrice = symbolData.highOfDay;
    }
    let entryPrice = Models.getCurrentPrice(symbol);
    let logTags = Models.generateLogTags(symbol, `${symbol}_1st-retracement-plan`);
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.FirstRetracement);
    let multipler = EntryRulesChecker.checkFirstRetracementPlanEntryRules(
        symbol, isLong, entryPrice, stopOutPrice, plan, logTags,
    );
    if (multipler <= 0) {
        return;
    }
    marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
}
export const runBreakoutPlan = (symbol: string, isLong: boolean, plan: TradingPlansModels.LevelBreakoutPlan) => {
    let currentPrice = Models.getCurrentPrice(symbol);
    let breakoutPrice = plan.entryPrice;
    let widget = Models.getChartWidget(symbol);
    if (widget && widget.entryPriceLine) {
        let newBreakoutPrice = widget.entryPriceLine.options().price;
        if ((isLong && newBreakoutPrice > breakoutPrice) ||
            (!isLong && newBreakoutPrice < breakoutPrice)) {
            breakoutPrice = newBreakoutPrice;
        }
    }
    let isBeyondEntryPrice = (isLong && currentPrice > breakoutPrice) || (!isLong && currentPrice < plan.entryPrice);
    let entryPrice = isBeyondEntryPrice ? currentPrice : breakoutPrice;

    let symbolData = Models.getSymbolData(symbol);
    let stopOutPrice = isLong ? symbolData.lowOfDay : symbolData.highOfDay;
    let logTags = Models.generateLogTags(symbol, `${symbol}_breakout-plan`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.LevelBreakout);
    let multipler = EntryRulesChecker.checkLevelBreakoutPlanEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        return;
    }
    if (isBeyondEntryPrice) {
        marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
    } else {
        breakoutEntryWithoutRules(symbol, isLong, entryPrice, stopOutPrice, logTags, multipler, plan);
    }
}
export const runRangePlan = (symbol: string, isLong: boolean, plan: TradingPlansModels.RangePlan) => {
    let planType = TradingPlansModels.PlanType.Range;
    let logTags = getLogTagsForEntryAction(symbol, isLong, "range");
    let orderType = Models.OrderType.MARKET
    let stopOutPrice = Chart.getStopLossPrice(symbol, isLong, null);
    let entryPrice = Models.getCurrentPrice(symbol);
    let allowedSizeMutiplier = EntryRulesChecker.checkRangeEntryRules(symbol, entryPrice, stopOutPrice, plan, logTags);
    commonEntry(symbol, isLong, true, stopOutPrice, plan, planType, allowedSizeMutiplier, logTags);
}
export const runVwapCrossFailPlan = (symbol: string, isLong: boolean, plan: TradingPlansModels.VwapCrossFailPlan) => {
    let symbolData = Models.getSymbolData(symbol);
    let entryPrice = Models.getCurrentPrice(symbol);
    let stopOutPrice = symbolData.lowOfDay;
    if (!isLong) {
        stopOutPrice = symbolData.highOfDay;
    }
    let logTags = Models.generateLogTags(symbol, `${symbol}_both-fake-plan`);
    Strategies.overrideTradingPlans(plan, TradingPlansModels.PlanType.VwapCrossFail);
    let multipler = EntryRulesChecker.checkVwapCrossFailEntryRules(symbol, isLong, entryPrice, stopOutPrice, plan, logTags);
    if (multipler <= 0) {
        return;
    }
    marketEntryWithoutRules(symbol, isLong, stopOutPrice, logTags, multipler, plan);
}
export const runVwapCrossSuccessPlan = (symbol: string, isLong: boolean, plan: TradingPlansModels.VwapCrossSuccessPlan) => { }