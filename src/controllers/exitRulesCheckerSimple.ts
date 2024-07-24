import * as Models from '../models/models';
import * as Rules from '../algorithms/rules';
import * as Patterns from '../algorithms/patterns';
import * as RiskManager from '../algorithms/riskManager';
import * as TakeProfit from '../algorithms/takeProfit';
import * as MinimumTarget from '../algorithms/minimumTarget';
import * as Firestore from '../firestore';
import * as TradingState from '../models/tradingState';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as Helper from '../utils/helper';

export const isAllowedForAll = (symbol: string, logTags: Models.LogTags) => {
    let seconds = Helper.getSecondsSinceMarketOpen(new Date());

    let minutes = seconds / 60;
    if (minutes > 30) {
        Firestore.logInfo(`allow after 30 minutes`, logTags);
        return true;
    }
    let hours = minutes / 60;

    if (hours >= 6) {
        Firestore.logInfo(`allow in the last 30 minutes before market close (12:30 PM)`, logTags);
        return true;
    }

    if (seconds <= 60) {
        Firestore.logInfo(`allow in the first 60 seconds`, logTags);
        return true;
    }

    let { planConfigs, breakoutTradeState } = getCommonInfo(symbol);
    if (planConfigs?.allowEarlyExits) {
        Firestore.logInfo(`allow early exits for scalp`, logTags);
        return true;
    }
    if (breakoutTradeState.hasValue) {
        if (breakoutTradeState.maxPullbackReached > 0.75) {
            Firestore.logInfo(`allow early exits due to pullback ${breakoutTradeState.maxPullbackReached} > 0.75`, logTags);
            return true;
        }
    }

    return false;
}
export const isAllowedForSingle = (symbol: string, isLong: boolean, isMarketOrder: boolean, newPrice: number, keyIndex: number, logTags: Models.LogTags) => {
    if (isAllowedForAll(symbol, logTags)) {
        return true;
    }

    if (Rules.isAllowedForAddedPosition(symbol, isLong, isMarketOrder, newPrice, keyIndex)) {
        return true;
    }

    if (RiskManager.isOverSized(symbol)) {
        Firestore.logInfo(`allow single exit when over sized`, logTags);
        return true;
    }

    let { exitPairsCount, planConfigs } = getCommonInfo(symbol);
    if (planConfigs) {
        let allowCount = planConfigs.allowFirstFewExitsCount;
        if (exitPairsCount > (TakeProfit.BatchCount - allowCount) &&
            (isMarketOrder || keyIndex < allowCount)) {
            Firestore.logInfo(`allow exit for the first ${allowCount} exits`, logTags);
            return true;
        }
    }

    return false;
}

export const failedMinimumTargetForBatch = (symbol: string, newPrice: number, isHalf: boolean, logTags: Models.LogTags) => {
    let { isLong, exitPairsCount, breakoutTradeState, todayRange, minimumExitTargets } = getCommonInfo(symbol);
    let minimumProfitTarget = TakeProfit.getMinimumProfitTargetForBatch(symbol,
        isLong, isHalf, breakoutTradeState.entryPrice, breakoutTradeState.stopLossPrice, exitPairsCount,
        todayRange, minimumExitTargets, logTags,
    );

    if ((isLong && newPrice < minimumProfitTarget) || (!isLong && newPrice > minimumProfitTarget)) {
        Firestore.logError(`new target ${newPrice} is closer than minimum target ${minimumProfitTarget}`, logTags)
        return true;
    } else {
        Firestore.logInfo(`hard rules passed, new price: ${newPrice}, min target: $${minimumProfitTarget}`, logTags);
    }
    return false;
}
export const failedMinimumTargetForSingle = (symbol: string, newPrice: number, keyIndex: number,
    allowedSpread: number, logTags: Models.LogTags) => {
    let { isLong, exitPairsCount, breakoutTradeState, minimumExitTargets, atr, wave3BatchIndexStart, wave5BatchIndexStart } = getCommonInfo(symbol);
    let minimumProfitTarget = TakeProfit.getMinimumProfitTargetForSingle(symbol,
        isLong, breakoutTradeState.entryPrice, breakoutTradeState.stopLossPrice, keyIndex, exitPairsCount,
        atr, minimumExitTargets, logTags,
    );

    if (allowedSpread! = 0) {
        if (isLong) {
            minimumProfitTarget = minimumProfitTarget - allowedSpread;
        } else {
            minimumProfitTarget = minimumProfitTarget + allowedSpread;
        }
    }
    if ((isLong && newPrice < minimumProfitTarget) || (!isLong && newPrice > minimumProfitTarget)) {
        Firestore.logError(`new target ${newPrice} is closer than minimum target ${minimumProfitTarget}`, logTags)
        return true;
    } else {
        Firestore.logInfo(`hard rules passed, new price: ${newPrice}, min target: $${minimumProfitTarget}`, logTags);
    }

    let wave = Patterns.countWaveSinceEntry(symbol);
    let batchIndex = MinimumTarget.getIndex(TakeProfit.BatchCount, exitPairsCount, keyIndex);
    if (wave3BatchIndexStart && batchIndex >= wave3BatchIndexStart) {
        if (wave < 3) {
            Firestore.logError(`need to wait for wave 3, current wave ${wave}`, logTags);
            return true;
        }
    }
    if (wave5BatchIndexStart && batchIndex >= wave5BatchIndexStart) {
        if (wave < 5) {
            Firestore.logError(`need to wait for wave 5, current wave ${wave}`, logTags);
            return true;
        }
    }
    return false;
}

// return true if ok to flatten
// see some trade examples in https://sunrisetrading.atlassian.net/browse/TPS-80
export const checkFlattenRules = (symbol: string, logTags: Models.LogTags) => {
    if (isAllowedForAll(symbol, logTags)) {
        return true;
    }
    let { exitPairsCount, isLong, breakoutTradeState, planConfigs } = getCommonInfo(symbol);
    if (planConfigs?.alwaysAllowStopOutOrFlatten) {
        return true;
    }
    let currentPrice = Models.getCurrentPrice(symbol);

    if (Rules.isAllowedAsPaperCut(symbol, breakoutTradeState.entryPrice, breakoutTradeState.stopLossPrice, currentPrice)) {
        Firestore.logInfo(`allow for paper cut`, logTags);
        return true;
    }
    if (exitPairsCount == 1) {
        if (failedMinimumTargetForSingle(symbol, currentPrice, TakeProfit.BatchCount - 1, 0, logTags)) {
            return false;
        }
    } else {
        if (failedMinimumTargetForBatch(symbol, currentPrice, false, logTags)) {
            return false;
        }
    }

    return true;
};
export const checkHalfOutRules = (symbol: string, newPrice: number,
    exitPairs: Models.ExitPair[], action: string, logTags: Models.LogTags) => {
    if (isAllowedForAll(symbol, logTags)) {
        return exitPairs;
    }
    if (RiskManager.isOverSized(symbol)) {
        Firestore.logInfo("allow half out due to over size", logTags);
        return exitPairs;
    }
    if (Rules.entryJustHappened(symbol)) {
        Firestore.logInfo("allow half out due to entry just happened", logTags);
        return exitPairs;
    }
    let { exitPairsCount } = getCommonInfo(symbol);
    if (exitPairsCount <= 1) {
        Firestore.logError(`only 1 partial left`, logTags);
        return [];
    }
    if (failedMinimumTargetForBatch(symbol, newPrice, true, logTags)) {
        return [];
    }

    let allowedPairs = exitPairs;
    return allowedPairs;
};

export const checkLimitHalfOutRules = (symbol: string, isLong: boolean, newPrice: number,
    exitPairs: Models.ExitPair[], action: string, logTags: Models.LogTags) => {
    if (isAllowedForAll(symbol, logTags)) {
        return exitPairs;
    }
    let { symbolState } = getCommonInfo(symbol);
    let allowedPairs = exitPairs;

    if (failedMinimumTargetForBatch(symbol, newPrice, true, logTags)) {
        return Rules.filterNotIncreasingTargetsForExitPairs(isLong, newPrice, allowedPairs);
    } else {
        return allowedPairs;
    }
};
export const checkTrailStopRules = (symbol: string, timeFrame: number, logTags: Models.LogTags) => {
    let seconds = Helper.getSecondsSinceMarketOpen(new Date());
    let minutes = seconds / 60;
    if (minutes < timeFrame) {
        Firestore.logError(`wait for ${timeFrame} minutes after market open`, logTags);
        return false;
    }
    let { exitPairsCount, trail5Count, trail15Count } = getCommonInfo(symbol);
    if ((timeFrame == 15 && exitPairsCount > trail15Count) ||
        (timeFrame == 5) && (exitPairsCount > (trail5Count + trail15Count))) {
        Firestore.logError(`trail stop only allowed for last ${trail5Count + trail15Count} partials`, logTags);
        return false;
    }
    return true;
}
export const checkAdjustSingleStopOrderRules = (symbol: string, keyIndex: number,
    order: Models.OrderModel, pair: Models.ExitPair,
    newPrice: number, logTags: Models.LogTags) => {
    let { isLong, breakoutTradeState, planConfigs } = getCommonInfo(symbol);
    if (isAllowedForSingle(symbol, isLong, false, newPrice, keyIndex, logTags)) {
        return true;
    }
    if (planConfigs?.alwaysAllowStopOutOrFlatten) {
        return true;
    }

    if (Rules.isAllowedAsPaperCut(symbol, breakoutTradeState.entryPrice, breakoutTradeState.stopLossPrice, newPrice)) {
        Firestore.logInfo(`allow for paper cut`, logTags);
        return true;
    }
    if (failedMinimumTargetForSingle(symbol, newPrice, keyIndex, 0, logTags)) {
        return false;
    }

    return true;
}
export const checkAdjustSingleLimitOrderRules = (symbol: string, keyIndex: number,
    order: Models.OrderModel, pair: Models.ExitPair,
    newPrice: number, logTags: Models.LogTags) => {
    let { isLong } = getCommonInfo(symbol);
    if (isAllowedForSingle(symbol, isLong, false, newPrice, keyIndex, logTags)) {
        return true;
    }
    let isIncreasingTarget = Rules.isIncreasingTarget(isLong, newPrice, order.price);
    if (isIncreasingTarget) {
        return true;
    }
    if (failedMinimumTargetForSingle(symbol, newPrice, keyIndex, 0, logTags)) {
        return false;
    }

    return true;
};

export const checkMarketOutExitOrdersRules = (symbol: string, keyIndex: number, logTags: Models.LogTags) => {
    let { isLong } = getCommonInfo(symbol);
    let currentPrice = Models.getCurrentPrice(symbol);
    if (isAllowedForSingle(symbol, isLong, true, currentPrice, keyIndex, logTags)) {
        return true;
    }

    let symbolData = Models.getSymbolData(symbol);
    let spread = symbolData.ask - symbolData.bid;
    if (failedMinimumTargetForSingle(symbol, currentPrice, keyIndex, spread, logTags)) {
        return false;
    }

    return true;
};
export const checkMoveAllStopsRules = (symbol: string, newPrice: number, logTags: Models.LogTags) => {
    if (isAllowedForAll(symbol, logTags)) {
        return true;
    }
    if (RiskManager.isOverSized(symbol)) {
        Firestore.logInfo(`allow move all stops due to over sized`, logTags);
        return true;
    }
    let { breakoutTradeState, planConfigs } = getCommonInfo(symbol);
    if (planConfigs?.alwaysAllowStopOutOrFlatten) {
        return true;
    }

    if (Rules.isAllowedAsPaperCut(symbol, breakoutTradeState.entryPrice, breakoutTradeState.stopLossPrice, newPrice)) {
        Firestore.logInfo(`allow for paper cut`, logTags);
        return true;
    }
    if (failedMinimumTargetForBatch(symbol, newPrice, false, logTags)) {
        return false;
    }

    return true;
};

export const checkMoveAllTargetsRules = (symbol: string, isLong: boolean, newPrice: number,
    exitPairs: Models.ExitPair[], logTags: Models.LogTags) => {
    if (isAllowedForAll(symbol, logTags)) {
        return exitPairs;
    }

    let allowedPairs = exitPairs;
    if (failedMinimumTargetForBatch(symbol, newPrice, false, logTags)) {
        return Rules.filterNotIncreasingTargetsForOrders(
            isLong, newPrice, exitPairs,
        );
    } else {
        return allowedPairs;
    }
};

const getCommonInfo = (symbol: string) => {
    let isLong = Models.getPositionNetQuantity(symbol) > 0;
    let symbolState = TradingState.getSymbolState(symbol);
    let breakoutTradeState = TradingState.getBreakoutTradeState(symbol, isLong);
    let planConfigs = symbolState.activeBasePlan?.planConfigs;
    let exitTargets = symbolState.activeBasePlan?.targets;
    let minimumExitTargets = exitTargets?.minimumTargets;
    let wave3BatchIndexStart = exitTargets?.wave3BatchIndexStart;
    let wave5BatchIndexStart = exitTargets?.wave5BatchIndexStart;
    let trail5Count = exitTargets ? exitTargets.trail5Count : 0;
    let trail15Count = exitTargets ? exitTargets.trail15Count : 0;
    let exitPairs = Models.getExitPairs(symbol);
    let atr = TradingState.getAtrInTrade(symbol);
    return {
        isLong: isLong,
        secondsSinceMarketOpen: Helper.getSecondsSinceMarketOpen(new Date()),
        planConfigs: planConfigs,
        symbolState: symbolState,
        breakoutTradeState: breakoutTradeState,
        exitPairsCount: exitPairs.length,
        todayRange: Models.getTodayRange(atr),
        averageRange: atr.average,
        simpleExitRules: true,
        minimumExitTargets: minimumExitTargets,
        atr: atr,
        wave3BatchIndexStart: wave3BatchIndexStart,
        wave5BatchIndexStart: wave5BatchIndexStart,
        trail5Count: trail5Count,
        trail15Count: trail15Count,
    }
}