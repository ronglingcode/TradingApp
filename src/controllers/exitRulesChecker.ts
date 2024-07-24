import * as Models from '../models/models';
import * as TradingState from '../models/tradingState';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as Helper from '../utils/helper';
import * as exitRulesCheckerSimple from './exitRulesCheckerSimple';

// return true if ok to flatten
// see some trade examples in https://sunrisetrading.atlassian.net/browse/TPS-80
export const checkFlattenRules = (symbol: string, logTags: Models.LogTags) => {
    let { simpleExitRules } = getCommonInfo(symbol);
    if (simpleExitRules) {
        return exitRulesCheckerSimple.checkFlattenRules(symbol, logTags);
    } else {
        return true;
    }
};
export const checkHalfOutRules = (symbol: string, newPrice: number,
    exitPairs: Models.ExitPair[], action: string, logTags: Models.LogTags) => {
    let { isLong, simpleExitRules, currentPrice } = getCommonInfo(symbol);
    let isLimitExit = (isLong && newPrice > currentPrice) || (!isLong && newPrice < currentPrice);
    if (simpleExitRules) {
        if (isLimitExit) {
            return exitRulesCheckerSimple.checkLimitHalfOutRules(
                symbol, isLong, newPrice, exitPairs, action, logTags,
            )
        } else {
            return exitRulesCheckerSimple.checkHalfOutRules(
                symbol, newPrice, exitPairs, action, logTags,
            )
        }
    } else {
        return exitPairs;
    }
};

export const checkMarketHalfOutRules = (symbol: string, newPrice: number,
    exitPairs: Models.ExitPair[], action: string, logTags: Models.LogTags) => {
    let { simpleExitRules } = getCommonInfo(symbol);
    if (simpleExitRules) {
        return exitRulesCheckerSimple.checkHalfOutRules(
            symbol, newPrice, exitPairs, action, logTags,
        )
    } else {
        return exitPairs;
    }
};
export const checkTrailStopRules = (symbol: string, timeFrame: number, logTags: Models.LogTags) => {
    return exitRulesCheckerSimple.checkTrailStopRules(symbol, timeFrame, logTags);
}
export const checkAdjustSingleStopOrderRules = (symbol: string, keyIndex: number,
    order: Models.OrderModel, pair: Models.ExitPair,
    newPrice: number, logTags: Models.LogTags) => {
    let { simpleExitRules } = getCommonInfo(symbol);
    if (simpleExitRules) {
        return exitRulesCheckerSimple.checkAdjustSingleStopOrderRules(symbol, keyIndex, order, pair, newPrice, logTags);
    } else {
        return true;
    }
}
export const checkAdjustSingleLimitOrderRules = (symbol: string, keyIndex: number,
    order: Models.OrderModel, pair: Models.ExitPair,
    newPrice: number, logTags: Models.LogTags) => {
    let { simpleExitRules } = getCommonInfo(symbol);
    if (simpleExitRules) {
        return exitRulesCheckerSimple.checkAdjustSingleLimitOrderRules(symbol, keyIndex, order, pair, newPrice, logTags);
    } else {
        return true;
    }
};

export const checkMarketOutExitOrdersRules = (symbol: string, keyIndex: number, logTags: Models.LogTags) => {
    let { simpleExitRules } = getCommonInfo(symbol);
    if (simpleExitRules) {
        return exitRulesCheckerSimple.checkMarketOutExitOrdersRules(symbol, keyIndex, logTags);
    } else {
        return true;
    }
};
export const checkMoveAllStopsRules = (symbol: string, newPrice: number, logTags: Models.LogTags) => {
    let { simpleExitRules } = getCommonInfo(symbol);
    if (simpleExitRules) {
        return exitRulesCheckerSimple.checkMoveAllStopsRules(symbol, newPrice, logTags);
    } else {
        return true;
    }
};

export const checkMoveAllTargetsRules = (symbol: string, newPrice: number, exitPairs: Models.ExitPair[], logTags: Models.LogTags) => {
    let { isLong, simpleExitRules } = getCommonInfo(symbol);
    if (simpleExitRules) {
        return exitRulesCheckerSimple.checkMoveAllTargetsRules(symbol, isLong, newPrice, exitPairs, logTags);
    } else {
        return exitPairs;
    }
};

const getCommonInfo = (symbol: string) => {
    let symbolState = TradingState.getSymbolState(symbol);
    let planConfigs = symbolState.activeBasePlan?.planConfigs;
    let exitPairs = Models.getExitPairs(symbol);
    return {
        isLong: Models.getPositionNetQuantity(symbol) > 0,
        secondsSinceMarketOpen: Helper.getSecondsSinceMarketOpen(new Date()),
        planConfigs: planConfigs,
        symbolState: symbolState,
        exitPairsCount: exitPairs.length,
        simpleExitRules: true,
        currentPrice: Models.getCurrentPrice(symbol),
    }
}