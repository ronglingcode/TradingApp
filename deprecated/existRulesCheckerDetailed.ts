export const a = 1;
/*
import * as Patterns from '../algorithms/patterns';
import * as Models from '../models/models';
import * as Rules from '../algorithms/rules';
import * as TakeProfit from '../algorithms/takeProfit';
import * as Firestore from '../firestore';
import * as TradingState from '../models/tradingState';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as Helper from '../utils/helper';
import * as Config from '../config/config';

export const isDisallowedByHardRules = (symbol: string, newPrice: number, isBatch: boolean, logTags: Models.LogTags) => {
    let { isLong, exitPairsCount, symbolState, dailyRange, minimumExitTargets } = getCommonInfo(symbol);
    let breakoutTradeState = symbolState.breakoutTradeState;
    let minimumProfitTarget = TakeProfit.getMinimumProfitTargetForSingle(symbol,
        isLong, breakoutTradeState.entryPrice, breakoutTradeState.stopLossPrice, isBatch, exitPairsCount,
        dailyRange, minimumExitTargets, logTags,
    );

    if ((isLong && newPrice < minimumProfitTarget) || (!isLong && newPrice > minimumProfitTarget)) {
        Firestore.logError(`new target ${newPrice} is closer than minimum target ${minimumProfitTarget}`, logTags)
        return true;
    } else {
        Firestore.logInfo(`hard rules passed, new price: ${newPrice}, min target: $${minimumProfitTarget}`, logTags);
    }
    return false;
}

export const isAllowedForAllTypesOfExits = (symbol: string, newPrice: number, logTags: Models.LogTags) => {
    let { isLong } = getCommonInfo(symbol);
    let symbolState = TradingState.getSymbolState(symbol);
    if (symbolState.activeBasePlan) {
        let currentRewardRatio = Rules.getProfitMultiple(symbol, newPrice);
        let exitRules = symbolState.activeBasePlan.planConfigs.exitRules;
        if (currentRewardRatio >= exitRules.decentCurrentRewardRatio) {
            Firestore.logInfo(`isAllowedForAllTypesOfExits is true, currentRewardRatio ${currentRewardRatio} >= ${exitRules.decentCurrentRewardRatio}.`, logTags);
            return true;
        }
        let symbolData = Models.getSymbolData(symbol);
        let maxPrice = isLong ? symbolData.highOfDay : symbolData.lowOfDay;
        let maxRewardRatio = Rules.getProfitMultiple(symbol, maxPrice);
        if (maxRewardRatio >= exitRules.decentMaxRewardRatio) {
            Firestore.logInfo(`isAllowedForAllTypesOfExits is true, maxRewardRatio ${maxRewardRatio} >= ${exitRules.decentMaxRewardRatio}.`, logTags);
            return true;
        }
    }

    if (Rules.isLateEntry(symbol)) {
        Firestore.logInfo('allow exit if late entry', logTags);
        return true;
    }
    let currentEntryTime = Models.getLastEntryTime(symbol);
    if (currentEntryTime && Patterns.hasLostVwapMomentum(symbol, isLong, currentEntryTime)) {
        Firestore.logInfo('allow exit because lost vwap momentum', logTags);
        return true;
    }
    if (Rules.isCloseToFullATR(symbol)) {
        Firestore.logInfo('allow exit because close to full ATR', logTags);
        return true;
    }
    return false;
};
export const isAllowedForBatchOrders = (symbol: string, newPrice: number, logTags: Models.LogTags) => {
    if (isAllowedForAllTypesOfExits(symbol, newPrice, logTags)) {
        return true;
    }
    return false;
};
export const isAllowedForSingleOrder = (symbol: string, newPrice: number, logTags: Models.LogTags) => {
    if (isAllowedForAllTypesOfExits(symbol, newPrice, logTags)) {
        return true;
    }
    if (Rules.isFirstExit(symbol, logTags)) {
        return true;
    }
    // TODO: allow if more than half position for scalp.
    return false;
}
export const isDisallowedForAllTypesOfExits = (symbol: string, action: string,
    logTags: Models.LogTags) => {
    let { secondsSinceMarketOpen, symbolState, planConfigs } = getCommonInfo(symbol);
    let isAfterWaitTime = Rules.isAfterWaitTimeSinceMarketOpen(
        symbol, action, secondsSinceMarketOpen, planConfigs, logTags,
    );
    if (!isAfterWaitTime) {
        return true;
    }
    let timeSinceEntryResult = Rules.checkTimeSinceEntry(symbol, planConfigs?.exitRules);
    if (!timeSinceEntryResult.passed) {
        let message = `cannot ${action} for ${symbol} within first few minutes since entry, `;
        message += `${timeSinceEntryResult.secondsSinceEntry} seconds so far, `;
        message += `${timeSinceEntryResult.remainingSeconds} to go`;
        Firestore.logError(message, logTags);
        return true;
    }
    if (!Rules.reachedMinimumPositionSize(symbol, action, planConfigs, symbolState.peakRiskMultiple, logTags)) {
        return true;
    }
    return false;
}
export const isDisallowedForBatchOrders = (symbol: string, isLong: boolean, exitPrice: number,
    logTags: Models.LogTags) => {
    if (Rules.isLossWhenHoldingVwap(symbol, isLong, exitPrice)) {
        Firestore.logError("cannot take a loss when still holding vwap", logTags);
        return true;
    }
    return false;
}

// return true if ok to flatten
// see some trade examples in https://sunrisetrading.atlassian.net/browse/TPS-80
export const checkFlattenRules = (symbol: string, logTags: Models.LogTags) => {
    let { isLong, secondsSinceMarketOpen, planConfigs, exitRules } = getCommonInfo(symbol);
    let currentPrice = Models.getCurrentPrice(symbol);
    let action = 'flatten';
    if (isDisallowedByHardRules(symbol, currentPrice, true, logTags)) {
        return false;
    }
    if (isAllowedForBatchOrders(symbol, currentPrice, logTags)) {
        return true;
    }

    if (isDisallowedForAllTypesOfExits(symbol, action, logTags)) {
        return false;
    }
    if (isDisallowedForBatchOrders(symbol, isLong, currentPrice, logTags)) {
        return false;
    }

    return true;
};
export const checkHalfOutRules = (symbol: string, newPrice: number,
    exitPairs: Models.ExitPair[], action: string, logTags: Models.LogTags) => {
    let { isLong, planConfigs, symbolState } = getCommonInfo(symbol);
    if (isDisallowedByHardRules(symbol, newPrice, true, logTags)) {
        return [];
    }
    if (isAllowedForBatchOrders(symbol, newPrice, logTags)) {
        return exitPairs;
    }

    if (isDisallowedForAllTypesOfExits(symbol, action, logTags)) {
        return [];
    }
    if (isDisallowedForBatchOrders(symbol, isLong, newPrice, logTags)) {
        return [];
    }
    if (!Rules.reachedMinimumPositionSize(symbol, action, planConfigs, symbolState.peakRiskMultiple, logTags)) {
        return [];
    }

    // if there's only one partial left, try to keep it, disable half out
    if (exitPairs.length <= 1) {
        Firestore.logError(`${symbol} only 1 partial left`, logTags);
        return [];
    }

    let allowedPairs = exitPairs;
    return allowedPairs;
};

export const checkAdjustSingleStopOrderRules = (symbol: string, order: Models.OrderModel, pair: Models.ExitPair,
    newPrice: number, logTags: Models.LogTags) => {
    let action = "adjust single stop exit";
    let { isLong, planConfigs, symbolState } = getCommonInfo(symbol);

    if (isDisallowedByHardRules(symbol, newPrice, false, logTags)) {
        return false;
    }
    if (isAllowedForSingleOrder(symbol, newPrice, logTags)) {
        return true;
    }
    if (isDisallowedForAllTypesOfExits(symbol, action, logTags)) {
        return false;
    }
    if (!Rules.reachedMinimumPositionSize(symbol, action, planConfigs, symbolState.peakRiskMultiple, logTags)) {
        return false;
    }
    if (!Rules.checkTightenStop(symbol, isLong, order.orderType, newPrice)) {
        Firestore.logError(`${symbol}: cannot tighten stop, still a losing trade.`, logTags);
        return false;
    }
    return true;
}
export const checkAdjustSingleLimitOrderRules = (symbol: string, order: Models.OrderModel, pair: Models.ExitPair,
    newPrice: number, logTags: Models.LogTags) => {
    let action = "adjust single limit exit";
    let isBuyOrder = order.isBuy;
    let { isLong, planConfigs, symbolState } = getCommonInfo(symbol);
    let useState = Config.getProfileSettings().exitRules.useState;
    let breakoutTradeState = symbolState.breakoutTradeState;

    if (isDisallowedByHardRules(symbol, newPrice, false, logTags)) {
        return false;
    }
    if (isAllowedForSingleOrder(symbol, newPrice, logTags)) {
        return true;
    }
    let isIncreasingTarget = Rules.isIncreasingTarget(isLong, newPrice, order.price);
    if (isIncreasingTarget) {
        return true;
    }

    if (useState) {
        if (Rules.isNearDoubleTop(symbol, isLong, breakoutTradeState, newPrice)) {
            if (isLong) {
                Firestore.logInfo('ok to exit near double top', logTags);
            } else {
                Firestore.logInfo('ok to exit near double bottom', logTags);
            }
            return true;
        }
    }

    if (isDisallowedForAllTypesOfExits(symbol, action, logTags)) {
        return false;
    }

    // I still can take half out. this is for adjusting just one order
    let minimumProfitCheckResult = Rules.checkMinimumProfit(symbol, newPrice, isLong, logTags)
    if (!minimumProfitCheckResult.allowed) {
        return false;
    }

    // if it's a breakout trade, check the timing based on breakout candle
    if (useState && breakoutTradeState.hasValue) {
        if (!Rules.checkStateSinceEntry(symbol, breakoutTradeState)) {
            Firestore.logError(`${symbol}: trade state is exit locked`, logTags);
            return false;
        }
    }

    if (!Rules.reachedMinimumPositionSize(symbol, action, planConfigs, symbolState.peakRiskMultiple, logTags)) {
        return false;
    }

    return true;
};

export const checkMarketOutExitOrdersRules = (symbol: string, logTags: Models.LogTags) => {
    let { isLong, secondsSinceMarketOpen, planConfigs, symbolState } = getCommonInfo(symbol);
    let action = "market out exit orders";
    let currentPrice = Models.getCurrentPrice(symbol);

    if (isDisallowedByHardRules(symbol, currentPrice, false, logTags)) {
        return false;
    }
    if (isAllowedForSingleOrder(symbol, currentPrice, logTags)) {
        return true;
    }

    let useState = Config.getProfileSettings().exitRules.useState;
    let breakoutTradeState = symbolState.breakoutTradeState;
    // if it's a breakout trade, check the timing based on breakout candle
    if (useState && breakoutTradeState.hasValue) {
        if (!Rules.checkStateSinceEntry(symbol, breakoutTradeState)) {
            Firestore.logError(`${symbol}: trade state is exit locked`, logTags);
            return false;
        }
    }

    if (isDisallowedForAllTypesOfExits(symbol, action, logTags)) {
        return false;
    }
    if (!Rules.reachedMinimumPositionSize(symbol, action, planConfigs, symbolState.peakRiskMultiple, logTags)) {
        return false;
    }

    // I still can take half out. this is for adjusting just one order
    let minimumProfitCheckResult = Rules.checkMinimumProfit(symbol, currentPrice, isLong, logTags)
    if (!minimumProfitCheckResult.allowed) {
        return false;
    }
    return true;
};
export const checkMoveAllStopsRules = (symbol: string, newPrice: number, logTags: Models.LogTags) => {
    let { isLong, secondsSinceMarketOpen, planConfigs, symbolState } = getCommonInfo(symbol);
    let action = "move all stops";

    if (isDisallowedByHardRules(symbol, newPrice, true, logTags)) {
        return false;
    }
    if (isAllowedForBatchOrders(symbol, newPrice, logTags)) {
        return true;
    }

    let isDisallowed = isDisallowedForAllTypesOfExits(
        symbol, action, logTags
    );
    if (isDisallowed) {
        return false;
    }
    isDisallowed = isDisallowedForBatchOrders(
        symbol, isLong, newPrice, logTags,
    );
    if (isDisallowed) {
        return false;
    }
    if (!Rules.reachedMinimumPositionSize(symbol, action, planConfigs, symbolState.peakRiskMultiple, logTags)) {
        return false;
    }

    if (!Rules.checkTightenStop(symbol, isLong, Models.OrderType.STOP, newPrice)) {
        Firestore.logError(`${symbol}: cannot tighten stop, still a losing trade.`, logTags);
        return false;
    }
    return true;
};

export const checkMoveAllTargetsRules = (symbol: string, newPrice: number, orders: Models.OrderModel[], logTags: Models.LogTags) => {
    let { isLong, planConfigs, symbolState } = getCommonInfo(symbol);
    let action = "move all targets";

    if (isDisallowedByHardRules(symbol, newPrice, true, logTags)) {
        return [];
    }
    if (isAllowedForBatchOrders(symbol, newPrice, logTags)) {
        return orders;
    }
    if (isDisallowedForAllTypesOfExits(symbol, action, logTags)) {
        return [];
    }
    if (isDisallowedForBatchOrders(symbol, isLong, newPrice, logTags)) {
        return [];
    }
    if (!Rules.reachedMinimumPositionSize(symbol, action, planConfigs, symbolState.peakRiskMultiple, logTags)) {
        return [];
    }

    let allowedOrders = orders;
    return allowedOrders;
};

const getCommonInfo = (symbol: string) => {
    let symbolState = TradingState.getSymbolState(symbol);
    let planConfigs = symbolState.activeBasePlan?.planConfigs;
    let exitTargets = symbolState.activeBasePlan?.targets;
    let minimumExitTargets = exitTargets?.minimumTargets;
    let exitPairs = Models.getExitPairs(symbol);
    let plan = TradingPlans.getTradingPlans(symbol);
    return {
        isLong: Models.getPositionNetQuantity(symbol) > 0,
        secondsSinceMarketOpen: Helper.getSecondsSinceMarketOpen(new Date()),
        planConfigs: planConfigs,
        exitRules: planConfigs?.exitRules,
        symbolState: symbolState,
        exitPairsCount: exitPairs.length,
        dailyRange: plan.dailyRange,
        minimumExitTargets: minimumExitTargets,
    }
}
*/