import * as Chart from "../ui/chart";
import * as Firestore from '../firestore';
import * as OrderFlow from './orderFlow';
import * as Helper from '../utils/helper';
import * as Config from '../config/config';
import * as RiskManager from '../algorithms/riskManager';
import * as TakeProfit from '../algorithms/takeProfit';
import * as AutoRedToGreen from '../algorithms/autoRedToGreen';
import * as AutoFirstNewHigh from '../algorithms/autoFirstNewHigh'
import * as AutoTrader from '../algorithms/autoTrader';
import * as EntryRulesChecker from './entryRulesChecker';
import * as EntryHandler from './entryHandler';
import * as ExitRulesChecker from './exitRulesChecker';
import * as Models from '../models/models';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as TradingState from '../models/tradingState';
import * as Broker from '../api/broker';

export const cancelKeyPressed = async (symbol: string) => {
    let exitPairs = Models.getExitPairs(symbol);
    if (exitPairs.length < TakeProfit.BatchCount * 0.4) {
        Broker.cancelAllEntryOrders(symbol);
    } else {
        Broker.cancelBreakoutEntryOrders(symbol);
    }
    TradingState.clearPendingOrder(symbol);
    AutoTrader.clearExistingAlgos(symbol);
}

export const hasSplitPartials = (symbol: string, isLong: boolean, orderToAdjust: Models.OrderModel) => {
    let breakoutTradeState = TradingState.getBreakoutTradeState(symbol, isLong);
    if (!breakoutTradeState.submitEntryResult.isSingleOrder) {
        return true;
    }
    return orderToAdjust.quantity < breakoutTradeState.submitEntryResult.totalQuantity;
}

export const trailStop = async (symbol: string, timeFrame: number) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget || !widget.exitOrderPairs || widget.exitOrderPairs.length <= 0) {
        return;
    }
    let logTags = Models.generateLogTags(symbol, `${symbol}-trail_stop_${timeFrame}`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let allowed = ExitRulesChecker.checkTrailStopRules(symbol, timeFrame, logTags);
    if (!allowed) {
        Firestore.logError(`Rules blocked trail stop for ${symbol}`, logTags);
        return;
    }

    let candles = Models.getCandlesSinceOpen(symbol);
    let bars = Models.aggregateCandles(candles, timeFrame);
    if (bars.length < 2) {
        Firestore.logError(`not enough bars ${bars.length}`, logTags);
        return;
    }
    let lastClosedBar = bars[bars.length - 2];
    let netQ = Models.getPositionNetQuantity(symbol);
    let positionIsLong = netQ > 0;
    let newPrice = positionIsLong ? lastClosedBar.low : lastClosedBar.high;
    Firestore.logInfo(`last closed bar, open: ${lastClosedBar.open}, close: ${lastClosedBar.close}, high: ${lastClosedBar.high}, low: ${lastClosedBar.low}`);
    let pairs = Models.getExitPairs(symbol);
    let i = 0;
    while (i < pairs.length) {
        let p = pairs[i];
        if (p.STOP && p.STOP.price == newPrice) {
            i++;
        }
        else {
            break;
        }
    }
    let pair = pairs[i];
    OrderFlow.adjustExitPairsWithNewPrice([pair], newPrice, true, positionIsLong, logTags);
    Helper.speak("trail stop");
}


export const numberKeyPressed = async (symbol: string, keyCode: string) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget || !widget.exitOrderPairs || widget.exitOrderPairs.length <= 0) {
        let p = TradingPlans.getTradingPlans(symbol);
        if (p.long.redtoGreenPlan && !p.short.redtoGreenPlan)
            AutoRedToGreen.startAlgo(symbol, true, p.long.redtoGreenPlan);
        else if (p.short.redtoGreenPlan && !p.long.redtoGreenPlan)
            AutoRedToGreen.startAlgo(symbol, false, p.short.redtoGreenPlan);
        else
            Firestore.logError(`having both long and short for red to green, not sure which one to trigger`);
        return;
    }
    let logTags = Models.generateLogTags(symbol, `${symbol}-adjust_exit`);
    // "Digit1" -> 1, "Digit2" -> 2
    Firestore.logInfo(logTags.logSessionName, logTags);
    let { pair, keyIndex } = getExitPairFromKeyCode(symbol, keyCode, "Digit", logTags);
    if (!pair)
        return;

    let newPrice = Chart.getCrossHairPrice(symbol);
    if (!newPrice) {
        Firestore.logError(`no cross hair price for ${symbol}`, logTags);
        return;
    }
    let orders = OrderFlow.chooseOrderLeg(symbol, [pair], newPrice);
    let netQ = Models.getPositionNetQuantity(symbol);
    let positionIsLong = netQ > 0;
    let partialsSplitted = hasSplitPartials(symbol, positionIsLong, orders[0]);
    if (!partialsSplitted) {
        Firestore.logError(`split to partials before adjusting exit pairs`, logTags);
        return;
    }

    let isStopLeg = OrderFlow.isStopLeg(symbol, newPrice);
    let isLimitOrder = true;
    if (orders.length > 0) {
        if (orders[0].orderType == Models.OrderType.STOP) {
            isLimitOrder = false;
        }
    }
    let allowed = isLimitOrder ?
        ExitRulesChecker.checkAdjustSingleLimitOrderRules(symbol, keyIndex, orders[0], pair, newPrice, logTags) :
        ExitRulesChecker.checkAdjustSingleStopOrderRules(symbol, keyIndex, orders[0], pair, newPrice, logTags);
    if (!allowed) {
        Firestore.logError(`Rules blocked adjusting order for ${symbol}`, logTags);
        return;
    }
    Helper.speak("done");

    OrderFlow.adjustExitPairsWithNewPrice([pair], newPrice, isStopLeg, positionIsLong, logTags);
};

export const numberPadPressed = async (symbol: string, keyCode: string) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-market_out_exit`);
    // "Numpad1" -> 1, "Numpad2" -> 2
    Firestore.logInfo(logTags.logSessionName, logTags);
    let { pair, keyIndex } = getExitPairFromKeyCode(symbol, keyCode, "Numpad", logTags);
    if (!pair)
        return;
    let allowed = ExitRulesChecker.checkMarketOutExitOrdersRules(symbol, keyIndex, logTags);
    if (!allowed) {
        Firestore.logError(`Rules blocked adjusting order for ${symbol}`, logTags);
        return;
    }
    if (!pair.LIMIT) {
        return;
    }
    let netQ = Models.getPositionNetQuantity(symbol);
    let positionIsLong = netQ > 0;
    let partialsSplitted = hasSplitPartials(symbol, positionIsLong, pair.LIMIT);
    if (!partialsSplitted) {
        Firestore.logError(`split to partials before adjusting exit pairs`, logTags);
        return;
    }
    Helper.speak("done");
    Broker.instantOutOneExitPair(symbol, positionIsLong, pair, logTags);
};

const getExitPairFromKeyCode = (symbol: string, keyCode: string, prefix: string, logTags: Models.LogTags) => {
    let number = parseInt(keyCode[prefix.length]);
    if (number == 0) {
        number = 10;
    }
    let index = number - 1;
    let noneResult = {
        pair: undefined,
        keyIndex: -1,
    };
    let widget = Models.getChartWidget(symbol);
    if (!widget) {
        Firestore.logError(`no exit pair for ${symbol} due to no chart widget`, logTags);
        return noneResult;
    }
    if (widget.exitOrderPairs.length <= index) {
        Firestore.logError(`no exit pair for ${symbol} due to out of range`, logTags);
        return noneResult;
    }
    return {
        pair: widget.exitOrderPairs[index],
        keyIndex: index,
    }
};

export const keyGPressed = async (symbol: string) => {
    let action = 'adjust_half_exits';
    let logTags = Models.generateLogTags(symbol, `${symbol}-${action}`);
    let newPrice = Chart.getCrossHairPrice(symbol);
    if (!newPrice) {
        Firestore.logError(`no cross hair price for ${symbol}`, logTags);
        return;
    }
    let currentPrice = Models.getCurrentPrice(symbol);
    let isLong = Models.getPositionNetQuantity(symbol) > 0;
    let halfOrders = OrderFlow.getHalfExitOrdersPairs(symbol);
    let allowedPairs = ExitRulesChecker.checkHalfOutRules(symbol, newPrice, halfOrders, action, logTags);
    let isMoreProfitable = Helper.isNewPriceMoreProfitableThanCurrentPrice(currentPrice, newPrice, isLong);
    let usageKey = isMoreProfitable ? "limitOutHalf" : "stopOutHalf";
    Firestore.logInfo(logTags.logSessionName, logTags);
    // always allow stop out half if not feeling good
    if (allowedPairs.length == 0) {
        Firestore.logError(`${symbol}: Rules blocked for ${usageKey}`, logTags);
        return;
    }
    Firestore.logInfo(`${symbol}: Rules passed for ${action}`, logTags);
    OrderFlow.adjustHalfExitOrdersWithNewPrice(symbol, newPrice, allowedPairs, logTags);
};

export const keyGPressedWithShift = async (symbol: string) => {
    let action = 'market_out_half_exits';
    let logTags = Models.generateLogTags(symbol, `${symbol}-${action}`)
    let usageKey = "marketOutHalf";
    Firestore.logInfo(logTags.logSessionName, logTags);
    let currentPrice = Models.getCurrentPrice(symbol);
    let netQuantity = Models.getPositionNetQuantity(symbol);
    let positionIsLong = netQuantity > 0;
    let halfOrders = OrderFlow.getHalfExitOrdersPairs(symbol);
    let allowedPairs = ExitRulesChecker.checkMarketHalfOutRules(symbol, currentPrice, halfOrders, action, logTags);
    if (allowedPairs.length == 0) {
        Firestore.logError(`${symbol}: Rules blocked for ${action}`, logTags);
        return;
    }
    Firestore.logInfo(`${symbol}: Rules passed for ${action}`, logTags);
    allowedPairs.forEach(pte => {
        Broker.instantOutOneExitPair(symbol, positionIsLong, pte, logTags);
    });
};

export const adjustAllExits = async (symbol: string) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-adjust_all_exits`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let newPrice = Chart.getCrossHairPrice(symbol);
    if (!newPrice) {
        Firestore.logError(`no cross hair price for ${symbol}`, logTags);
        return;
    }
    let currentPrice = Models.getCurrentPrice(symbol);
    let netQuantity = Models.getPositionNetQuantity(symbol);
    let chooseStopLeg = (netQuantity > 0 && newPrice < currentPrice) ||
        (netQuantity < 0 && newPrice > currentPrice);
    if (chooseStopLeg) {
        adjustAllStopExits(symbol, newPrice, true);
    } else {
        adjustAllLimitExits(symbol, newPrice);
    }
}
export const adjustAllStopExits = async (symbol: string, newPrice: number, checkRules: boolean) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-adjust_all_stops`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let allowed = checkRules ? ExitRulesChecker.checkMoveAllStopsRules(symbol, newPrice, logTags) : true;
    if (allowed)
        OrderFlow.moveAllStopExitsToNewPrice(symbol, newPrice, logTags);
};

export const adjustAllLimitExits = async (symbol: string, newPrice: number) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-adjust_all_targets`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let limitExitOrders = Models.getAllLimitExits(symbol);
    let exitPairs = Models.getExitPairs(symbol);
    let allowedPairs = ExitRulesChecker.checkMoveAllTargetsRules(symbol, newPrice, exitPairs, logTags);
    if (allowedPairs.length > 0) {
        let netQuantity = Models.getPositionNetQuantity(symbol);
        let positionIsLong = netQuantity > 0;
        OrderFlow.adjustExitPairsWithNewPrice(allowedPairs, newPrice, false, positionIsLong, logTags);
    }
}

export const raiseTargetsIfWasLess = (symbol: string) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-raise_all_exits_below`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let newPrice = Chart.getCrossHairPrice(symbol);
    if (!newPrice) {
        Firestore.logError(`no cross hair price for ${symbol}`, logTags);
        return;
    }
    let netQuantity = Models.getPositionNetQuantity(symbol);
    let isLong = netQuantity > 0;
    OrderFlow.raiseAllTargetsBelow(symbol, isLong, newPrice, logTags);
}

export const swapPositionKeyPressed = async (symbol: string) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-swap_position`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let netQuantity = Models.getPositionNetQuantity(symbol);
    if (netQuantity == 0) {
        Firestore.logError(`no position for ${symbol}`, logTags);
        return;
    }
    let isLong = netQuantity > 0;
    let symbolData = Models.getSymbolData(symbol);
    let currentPrice = Models.getCurrentPrice(symbol);
    let range = symbolData.highOfDay - symbolData.lowOfDay;
    let newEntryPrice = isLong ? symbolData.highOfDay : symbolData.lowOfDay;
    let stopOutPrice = isLong ? symbolData.lowOfDay : symbolData.highOfDay;
    let distance = Math.abs(currentPrice - newEntryPrice);
    let distanceRatio = distance / range;
    if (distanceRatio > 0.2) {
        Firestore.logError(`loss greater than 20% as ${distanceRatio}, too wide for swap`, logTags);
        return;
    }

    let symbolState = TradingState.getSymbolState(symbol);
    let breakoutTradeState = TradingState.getBreakoutTradeState(symbol, isLong);
    let initialQuantity = breakoutTradeState.initialQuantity;
    let initialMultiplier = RiskManager.quantityToRiskMultiples(range, initialQuantity);
    if (!symbolState.activeBasePlan) {
        Firestore.logError(`cannot swap due to missing active base plan`, logTags);
        return;
    }
    let oldPlan = symbolState.activeBasePlan;

    flattenPositionWithoutCheckingRules(symbol, netQuantity, logTags);
    setTimeout(() => {
        EntryHandler.breakoutEntryWithoutRules(symbol, isLong, newEntryPrice, stopOutPrice, logTags, initialMultiplier, oldPlan)
    }, 500);
};

const flattenPositionWithoutCheckingRules = async (symbol: string, netQuantity: number, logTags: Models.LogTags) => {
    TradingState.clearPendingOrder(symbol);
    let finished = Broker.flattenPosition(symbol, netQuantity, logTags);
    return finished;
};

export const flattenPostionKeyPressed = async (symbol: string) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-flatten`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let quantityWithoutStopLoss = RiskManager.getQuanityWithoutStopLoss(symbol);
    if (quantityWithoutStopLoss > 0) {
        Firestore.logInfo(`exit for quantityWithoutStopLoss ${quantityWithoutStopLoss}`, logTags);
        return OrderFlow.marketOut(symbol, quantityWithoutStopLoss, logTags);
    }

    if (!ExitRulesChecker.checkFlattenRules(symbol, logTags)) {
        return;
    }
    TradingState.clearPendingOrder(symbol);
    let netQuantity = Models.getPositionNetQuantity(symbol);
    let finished = Broker.flattenPosition(symbol, netQuantity, logTags);
    return finished;
};

export const twoWayBreakout = async (symbol: string) => {
    /*
    let isLong = true;
    let stopOutPrice = Chart.getStopLossPrice(symbol, isLong, null);
    let entryPrice = Chart.getBreakoutEntryPrice(symbol, isLong);
    let higherPrice = Math.max(stopOutPrice, entryPrice);
    let lowerPrice = Math.min(stopOutPrice, entryPrice);
    let multiplier = 0.5;
    let logTags = Models.generateLogTags(symbol, `${symbol}-2-way-breakout`);
    Firestore.logInfo(logTags.logSessionName, logTags);

    let emptyExitTargets = TradingPlans.buildEmptyExitTargets();
    OrderFlow.submitBreakoutOrders(symbol, higherPrice, lowerPrice, isLong, multiplier, emptyExitTargets, logTags);
    setTimeout(() => {
        OrderFlow.submitBreakoutOrders(symbol, lowerPrice, higherPrice, !isLong, multiplier, emptyExitTargets, logTags);
    }, 500);
    */
};

export const reloadPartialAtPrice = async (symbol: string) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-reload_at_price`);
    Firestore.logInfo(logTags.logSessionName, logTags);

    let entryPrice = Chart.getCrossHairPrice(symbol);
    if (!entryPrice) {
        Firestore.logError(`no cross hair price for ${symbol}`, logTags);
        return;
    }
    let isLong = Models.isLongForReload(symbol);
    let currentPrice = Models.getCurrentPrice(symbol);
    let orderType = Models.OrderType.LIMIT;
    if (isLong) {
        if (entryPrice > currentPrice) { // add on breakout
            orderType = Models.OrderType.STOP;
        }
    } else {
        if (entryPrice < currentPrice) {
            orderType = Models.OrderType.STOP;
        }
    }

    reloadPartial(symbol, isLong, entryPrice, orderType, logTags);
};
export const reloadPartialPressed = async (symbol: string, shiftKey: boolean) => {
    let isLong = Models.isLongForReload(symbol);
    let exitCount = Models.getExitOrdersPairs(symbol).length;
    TradingState.setLowestExitBatchCount(symbol, isLong, exitCount);
    if (shiftKey) {
        reloadPartialAtMarket(symbol);
    } else {
        reloadPartialAtPrice(symbol);
    }
};
export const reloadPartialAtMarket = async (symbol: string) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-reload_at_market`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let isLong = Models.isLongForReload(symbol);
    let entryPrice = Models.getCurrentPrice(symbol);
    reloadPartial(symbol, isLong, entryPrice, Models.OrderType.MARKET, logTags)
};

const reloadPartial = async (
    symbol: string, isLong: boolean, entryPrice: number, orderType: Models.OrderType, logTags: Models.LogTags) => {
    let stopOutPrice = Chart.getStopLossPrice(symbol, isLong, null);
    let quantity = getPartialQuantity(symbol, isLong);
    if (quantity == 0) {
        Firestore.logError(`getPartialQuantity() returns 0`, logTags)
        return;
    }
    if (!EntryRulesChecker.checkPartialEntry(symbol, isLong, quantity, entryPrice, stopOutPrice, logTags)) {
        return;
    }

    // cancel an existing reload before adding a new one
    let entries = Models.getEntryOrders(symbol);
    if (entries.length > 3) {
        Broker.cancelOrders([entries[0].orderID]);
    }
    Firestore.logInfo(`add back partial for ${symbol}`, logTags);
    OrderFlow.submitAddPartial(
        symbol, entryPrice, stopOutPrice, isLong, quantity, orderType, logTags
    );
};
export const moveToInitialEntry = async (symbol: string, isLong: boolean) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-move-to-initial-entry`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let pairs = OrderFlow.getHalfExitOrdersPairs(symbol);
    let bts = TradingState.getBreakoutTradeState(symbol, isLong);
    let newPrice = bts.entryPrice;
    let currentPrice = Models.getCurrentPrice(symbol);
    if ((isLong && currentPrice < newPrice) ||
        (!isLong && currentPrice > newPrice)) {
        Firestore.logError(`only move stop to initial entry, not target`, logTags);
        return;
    }
    let allExits = Models.getExitOrdersPairs(symbol)
    if (allExits.length > 4) {
        Firestore.logError(`only move stop to initial entry when there's <= 4 partials, having ${allExits.length} now`, logTags);
        return;
    }
    Firestore.logInfo(`move half stop to breakeven for ${symbol}`);
    OrderFlow.adjustHalfExitOrdersWithNewPrice(symbol, newPrice, pairs, logTags);
};

const getPartialQuantity = (symbol: string, isLong: boolean) => {
    let breakoutTradeState = TradingState.getBreakoutTradeState(symbol, isLong);
    let initialQuantity = breakoutTradeState.initialQuantity;
    if (initialQuantity > 0) {
        let partialQuantity = initialQuantity / TakeProfit.BatchCount;
        return Math.round(partialQuantity);
    }
    let lastExitSize = Models.getLastExitSize(symbol);
    if (lastExitSize > 0) {
        return lastExitSize;
    }
    let fullSize = Math.abs(Models.getPositionNetQuantity(symbol));
    let partialSize = fullSize / TakeProfit.BatchCount;
    return Math.round(partialSize);
};

export const setCustomStopLoss = (symbol: string) => {
    if (Config.getProfileSettingsForSymbol(symbol).allowTighterStop) {
        let crosshairPrice = Chart.getCrossHairPrice(symbol);
        if (crosshairPrice)
            Chart.drawStopLoss(symbol, crosshairPrice);
    }
};

export const replaceWithProfitTakingExitOrders = (symbol: string) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}-set_exit_pairs`);
    let netQuantity = Models.getPositionNetQuantity(symbol);
    let isLong = netQuantity > 0;
    let breakoutTradeState = TradingState.getBreakoutTradeState(symbol, isLong);
    let profitTargets = breakoutTradeState.submitEntryResult.profitTargets;
    if (profitTargets.length <= 1) {
        Firestore.logError(`profitTargets length is only ${profitTargets.length}`);
        return;
    }
    Firestore.logInfo(`replace profit targets, length is ${profitTargets.length}`);
    let stopLoss = breakoutTradeState.stopLossPrice;
    // cancel current exit orders
    Broker.cancelExitOrders(symbol);
    setTimeout(() => {
        // submit new exit orders
        OrderFlow.submitExitPairs(symbol, profitTargets, stopLoss, logTags);
    }, 1000);

    setTimeout(() => {
        addPullbackPartials(symbol, isLong, breakoutTradeState.entryPrice, stopLoss, logTags);
    }, 2000);
}

export const addPullbackPrice = (entries: number[], entryPrice: number, exits: number[], exitPrice: number) => {
    entries.push(entryPrice);
    exits.push(exitPrice);
}
export const addPullbackPartials = (symbol: string, isLong: boolean,
    entryPrice: number, stopLoss: number,
    logTags: Models.LogTags) => {
    let quantity = getPartialQuantity(symbol, isLong);
    let entries: number[] = [];
    let exits: number[] = [];
    let p10 = Helper.getPullbackPrice(symbol, entryPrice, stopLoss, isLong, 0.1);
    let p25 = Helper.getPullbackPrice(symbol, entryPrice, stopLoss, isLong, 0.25);
    let p50 = Helper.getPullbackPrice(symbol, entryPrice, stopLoss, isLong, 0.50);
    let p75 = Helper.getPullbackPrice(symbol, entryPrice, stopLoss, isLong, 0.75);
    let p80 = Helper.getPullbackPrice(symbol, entryPrice, stopLoss, isLong, 0.8);
    let p85 = Helper.getPullbackPrice(symbol, entryPrice, stopLoss, isLong, 0.85);
    addPullbackPrice(entries, p50, exits, p10);
    addPullbackPrice(entries, p75, exits, p10);
    addPullbackPrice(entries, p75, exits, p25);
    addPullbackPrice(entries, p80, exits, p25);
    addPullbackPrice(entries, p85, exits, p25);

    for (let i = 0; i < entries.length; i++) {
        let pullbackEntry = entries[i];
        let pullbackExit = exits[i];
        Broker.submitEntryOrderWithBracket(
            symbol, quantity, isLong, Models.OrderType.LIMIT, pullbackEntry, pullbackExit, stopLoss, logTags
        )
    }
}