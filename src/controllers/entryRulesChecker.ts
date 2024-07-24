import * as Config from '../config/config';
import * as Rules from '../algorithms/rules';
import * as RiskManager from '../algorithms/riskManager';
import * as Patterns from '../algorithms/patterns';
import * as Vwap from '../algorithms/vwap';
import * as Firestore from '../firestore';
import * as Helper from '../utils/helper';
import * as Models from '../models/models';
import * as TradingState from '../models/tradingState';
import type * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as TradingPlans from '../models/tradingPlans/tradingPlans'
declare let window: Models.MyWindow;

/**
 * Return a number between 0 to 1 for share size multiplier. 
 * 0 means cannot make the trade, 1 means trade with full size
 * Used by entries and algo entries.
 * Not used by adding partials/reloads.
 */
export const checkGlobalEntryRules = (symbol: string, isLong: boolean,
    basePlan: TradingPlansModels.BasePlan, logTags: Models.LogTags,
    entryPrice: number, stopOutPrice: number) => {
    if (Rules.isOverDailyMaxLoss()) {
        Firestore.logError(`checkRule: Daily max loss exceeded`, logTags);
        return 0;
    }

    let symbolData = Models.getSymbolData(symbol);
    if (symbolData.premarketDollarTraded < symbolData.previousDayPremarketDollarTraded) {
        let today = Helper.roundToMillion(symbolData.premarketDollarTraded);
        let previous = Helper.roundToMillion(symbolData.previousDayPremarketDollarTraded);
        Firestore.logError(`checkRule: premarket volume lower than previous day ${today} vs ${previous}`, logTags);
        //return 0;
    }
    /*
    if (RiskManager.isRealizedProfitLossOverThreshold(symbol)) {
        Firestore.logError(`realized loss exceeded 20%, do not trade this stock any more.`, logTags);
        return 0;
    }*/

    let { tradingPlans, atr, secondsSinceMarketOpen, premarketVwapTrend } = getCommonInfo(symbol, isLong);
    if (Rules.isDailyRangeTooSmall(symbol, atr, true, logTags)) {
        return 0;
    }

    let risk = Math.abs(entryPrice - stopOutPrice);
    if (atr.maxRisk && atr.maxRisk > 0 && risk > atr.maxRisk) {
        Firestore.logError(`risk too big, ${risk} > ${atr.maxRisk}`, logTags);
        return 0;
    }

    if (Models.hasEntryOrdersInSameDirection(symbol, isLong)) {
        Firestore.logError(`already had entries in the same direction, cannot double down`, logTags);
        return 0;
    }

    let deferTradingInSeconds = basePlan.planConfigs.deferTradingInSeconds;
    let stopTradingAfterSeconds = basePlan.planConfigs.stopTradingAfterSeconds;
    if (Rules.isBlockedByTiming(secondsSinceMarketOpen, deferTradingInSeconds, stopTradingAfterSeconds)) {
        Firestore.logError(
            `defer ${deferTradingInSeconds} seconds, stop after ${stopTradingAfterSeconds},  currently ${secondsSinceMarketOpen}`,
            logTags,
        );
        return 0;
    }

    let liquidityScale = Models.getLiquidityScale(symbol);

    if (liquidityScale == 0) {
        Firestore.logError(`blocked because less than $20M traded after open, be carefull`, logTags);
        return 0;
    }
    if (liquidityScale < 0.9) {
        Firestore.logInfo(`liquidity scale is ${liquidityScale}`, logTags);
    }

    if (premarketVwapTrend == 0 && secondsSinceMarketOpen < 115) {
        //Firestore.logError(`must wait 2 minutes when premkt trend is mixed`, logTags);
        //return 0;
    }
    /* TPS-27
    if (Patterns.isConsecutiveBarsSameDirection(symbol, isLong)) {
        Firestore.logError(`consecutive bars, wait for pullback`, logTags);
        return 0;
    }*/

    let openPrice = Models.getOpenPrice(symbol);
    if (((!isLong && tradingPlans.disableShortIfOpenAbove != 0) ||
        (isLong && tradingPlans.disableLongIfOpenBelow != 0)) && openPrice) {
        if (isLong && tradingPlans.disableLongIfOpenBelow != 0) {
            if (openPrice < tradingPlans.disableLongIfOpenBelow) {
                Firestore.logError(`short only because open below`, logTags);
                return 0;
            }
        }
        if (!isLong && tradingPlans.disableShortIfOpenAbove != 0) {
            if (openPrice > tradingPlans.disableShortIfOpenAbove) {
                Firestore.logError(`long only because open above`, logTags);
                return 0;
            }
        }
    }

    return liquidityScale * RiskManager.getRiskMultiplerForNextEntry(symbol, isLong, basePlan, logTags);
};

export const premarekt2ndBreakout = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.BasePlan, logTags: Models.LogTags,
    entryPrice: number, stopOutPrice: number) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }
    let symbolData = Models.getSymbolData(symbol);
    let currentPrice = Models.getCurrentPrice(symbol);
    if (isLong) {
        if (symbolData.highOfDay < symbolData.premktHigh) {
            Firestore.logError(`no 1st break premarket high yet`);
            return 0;
        }
        if (currentPrice > symbolData.premktHigh) {
            Firestore.logError(`sellers not step in yet`);
            return 0;
        }
    } else {
        if (symbolData.lowOfDay > symbolData.premktLow) {
            Firestore.logError(`no 1st break premarket low yet`);
            return 0;
        }
        if (currentPrice < symbolData.premktLow) {
            Firestore.logError(`buyers not step in yet`);
            return 0;
        }
    }
    return allowedSizeMutiplier;
}
/**
 * Return a number between 0 to 1 for share size multiplier. 
 * 0 means cannot make the trade, 1 means trade with full size
 */
export const checkRetracementEntryRules = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.BasePlan, logTags: Models.LogTags,
    entryPrice: number, stopOutPrice: number) => {
    let allowedSizeMutiplier = plan.planConfigs.size;
    if (Helper.isFutures(symbol)) {
        return allowedSizeMutiplier;
    }
    allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0)
        return 0;
    let { premarketVwapTrend, secondsSinceMarketOpen } = getCommonInfo(symbol, isLong);
    if (premarketVwapTrend == 0) {
        if (secondsSinceMarketOpen < 110) {
            Firestore.logError(`premkt trend is not clean, wait for 2 minutes. Open can be choppy.`, logTags);
            return 0;
        }
    } else {
        if (Vwap.isAgainstPremarketVwapStrongTrend(symbol, isLong) && secondsSinceMarketOpen < 230) {
            Firestore.logError(`against strong premkt vwap trend, wait for 4 minutes`, logTags)
            return 0;
        }
    }
    if (!TradingPlans.getMatchingRetracementArea(symbol, isLong, entryPrice) && !Helper.isFutures(symbol)) {
        Firestore.logError(`entry price ${entryPrice} not in retracement area`, logTags);
        return 0;
    }

    let lastDefenseForLong = TradingPlans.getLastDefenseForLongInRetracement(symbol);
    if (Rules.isLongBelowLastSupport(symbol, isLong, entryPrice, lastDefenseForLong, logTags)) {
        return 0;
    }

    let lastDefenseForShort = TradingPlans.getLastDefenseForShortInRetracement(symbol);
    if (Rules.isShortAboveLastResistance(symbol, isLong, entryPrice, lastDefenseForShort, logTags)) {
        return 0;
    }
    return allowedSizeMutiplier;
};
export const checkFirstRetracementPlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.FirstRetracementPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }

    let { secondsSinceMarketOpen } = getCommonInfo(symbol, isLong);
    if (secondsSinceMarketOpen < 60) {
        Firestore.logError(`wait for first minute close`, logTags);
        return 0;
    }

    if (!Patterns.isFirstRetracement(symbol, isLong)) {
        Firestore.logError(`not first retracement`, logTags);
        return 0;
    }
    return allowedSizeMutiplier;
}
export const checkImbalancePlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.ImbalancePlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }
    let { secondsSinceMarketOpen } = getCommonInfo(symbol, isLong);
    if (secondsSinceMarketOpen > 60) {
        Firestore.logError(`only valid in first 60 seconds`, logTags);
        return 0;
    }
    // make sure it breaks below premarket low
    // my premarket low price is not accurate, so this needs overriden. 
    // make an override premarket low, use that instead.
    return allowedSizeMutiplier;
}
export const checkOpenScalpPlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.OpenScalpPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }
    let { secondsSinceMarketOpen } = getCommonInfo(symbol, isLong);
    if (secondsSinceMarketOpen > 120) {
        Firestore.logError(`only valid in first 2 minutes`, logTags);
        return 0;
    }
    return allowedSizeMutiplier;
}

export const checkOpenRangeBreakoutPlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.OpenRangeBreakoutPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }
    let candles = Models.getCandlesSinceOpen(symbol);
    if (candles.length <= plan.count) {
        Firestore.logError(`not enough candles: ${candles.length}`, logTags);
        return 0;
    }

    return allowedSizeMutiplier;
}
export const checkFalseBreakoutPlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.FalseBreakoutPlan, isMarketEntry: boolean, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }
    let symbolData = Models.getSymbolData(symbol);

    let openRangeBreakout = false;
    let or = symbolData.openRange;
    if (or) {
        let openRangeThreshold = isLong ? or.low : or.high;
        if (Patterns.hasFalseBreakout(symbol, openRangeThreshold, isLong, entryPrice)) {
            return allowedSizeMutiplier;
        }
    }

    let premarketThreshold = isLong ? symbolData.premktLow : symbolData.premktHigh;
    if (Patterns.hasFalseBreakout(symbol, premarketThreshold, isLong, entryPrice)) {
        return allowedSizeMutiplier;
    }
    if (plan.price != 0) {
        if (Patterns.hasFalseBreakout(symbol, plan.price, isLong, entryPrice)) {
            return allowedSizeMutiplier;
        }
    }
    Firestore.logError(`no false breakout yet`, logTags);
    return 0;
}
export const checkBothSidesFalseBreakoutPlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.BothSidesFalseBreakoutPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }
    let symbolData = Models.getSymbolData(symbol);
    let or = symbolData.openRange;
    if (!or) {
        return 0;
    }
    if (symbolData.highOfDay <= or.high || symbolData.lowOfDay >= or.low) {
        Firestore.logError(`not breakout yet`, logTags);
        return 0;
    }
    return allowedSizeMutiplier;
}
export const checkVwapCrossFailEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.VwapCrossFailPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }

    let candles = Models.getCandlesSinceOpen(symbol);
    let vwaps = Models.getVwapsSinceOpen(symbol);
    let hasVwapCrossed = false;
    let vwapCrossFailed = false;
    // must cross vwap in one wave. and no other short setups occurred before.
    for (let i = 0; i < candles.length; i++) {
        if (vwapCrossFailed) {
            break;
        }
        if (!hasVwapCrossed) {
            if (Vwap.isCrossed(candles[i], vwaps[i].value, isLong)) {
                hasVwapCrossed = true;
            }
        } else {
            if (Vwap.isCrossed(candles[i], vwaps[i].value, !isLong)) {
                vwapCrossFailed = true;
            }
        }
    }
    if (!vwapCrossFailed) {
        Firestore.logError(`vwap not crossed yet, hasVwapCrossed: ${hasVwapCrossed}, vwapCrossFailed: ${vwapCrossFailed}`, logTags);
        return 0;
    }
    return allowedSizeMutiplier;
}
export const checkVwapCrossSuccessEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.VwapCrossFailPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }
    let symbolData = Models.getSymbolData(symbol);
    let or = symbolData.openRange;
    if (!or) {
        return 0;
    }
    if (symbolData.highOfDay <= or.high || symbolData.lowOfDay >= or.low) {
        Firestore.logError(`not breakout yet`, logTags);
        return 0;
    }
    return allowedSizeMutiplier;
}
export const checkRedToGreenPlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.RedToGreenPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }

    if (!Patterns.hasReversalBarSinceOpen(symbol, isLong, plan.strictMode, plan.considerCurrentCandleAfterOneMinute)) {
        Firestore.logError(`checkRule: no reversal bar yet`, logTags);
        return 0;
    }

    return allowedSizeMutiplier;
};
export const checkFirstNewHighPlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.FirstNewHighPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }

    /*
    let candles = Models.getCandlesSinceOpen(symbol);
    if (candles.length <= 1) {
        Firestore.logError(`not enough candles since open`, logTags);
        return 0;
    }
    let openCandle = candles[0];
    if ((isLong && Patterns.isGreenBar(openCandle)) ||
        (!isLong && Patterns.isRedBar(openCandle))) {
        Firestore.logError(`first candle not reverse color, first new high is not the first signal`, logTags);
        return 0;
    }
    */

    return allowedSizeMutiplier;
};

export const checkSecondNewHighPlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.SecondNewHighPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }

    return allowedSizeMutiplier;
};
export const checkLevelBreakoutPlanEntryRules = (symbol: string, isLong: boolean, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.LevelBreakoutPlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0) {
        return 0;
    }

    let { atr, secondsSinceMarketOpen } = getCommonInfo(symbol, isLong);
    if (secondsSinceMarketOpen < 60) {
        Firestore.logError(`must wait for 60 seconds`, logTags);
        return 0;
    }

    let hasClosedBeyond = Patterns.hasClosedBeyondPrice(symbol, isLong, plan.entryPrice);
    if (!hasClosedBeyond) {
        if (plan.planConfigs.requireReversal && !Patterns.hasReversalBarSinceOpen(symbol, isLong, false, true)) {
            Firestore.logError(`checkRule: no reversal bar yet`, logTags);
            return 0;
        }
    }

    return RiskManager.getRiskMultiplerForNextEntry(symbol, isLong, plan, logTags);
}
/**
 * Return a number between 0 to 1 for share size multiplier. 
 * 0 means cannot make the trade, 1 means trade with full size
 */
export const checkMarketEntryRules = (symbol: string, entryPrice: number, stopOutPrice: number,
    isLong: boolean, secondsSinceMarketOpen: number, logTags: Models.LogTags) => {
    let maxSize = Rules.atMostHalfPositionForMarketOrder(symbol, secondsSinceMarketOpen, stopOutPrice);
    if (maxSize < 1) {
        Firestore.logInfo(`max size is ${maxSize}`, logTags);
    }
    if (Rules.isSecondMinuteAndWithinOpenRange(symbol, entryPrice, secondsSinceMarketOpen)) {
        maxSize = 0;
        Firestore.logInfo(`disable market order for the second minute if it's inside open range`, logTags);
    }
    return maxSize;
};

export const checkPartialEntry = (symbol: string, isLong: boolean, quantity: number,
    entryPrice: number, stopLossPrice: number, logTags: Models.LogTags) => {
    let { todayRange } = getCommonInfo(symbol, isLong);


    if (RiskManager.isOverDailyMaxLossFromRealizedProfitLossAndExistingPosition(symbol, logTags)) {
        return false;
    }

    if (Rules.isOverDailyMaxLoss()) {
        Firestore.logError(`checkRule: Daily max loss exceeded`, logTags);
        return false;
    }

    /*
    if (RiskManager.isRealizedProfitLossOverThreshold(symbol)) {
        Firestore.logError(`realized loss exceeded 20%, do not trade this stock any more.`, logTags);
        return false;
    }*/

    let pnl = Models.getRealizedProfitLoss();
    if (pnl < 0) {
        let loss = pnl * (-1);
        let newRiskInDollar = quantity * RiskManager.getRiskPerShare(symbol, entryPrice, stopLossPrice);
        let existingRiskInDollar = RiskManager.getRiskInDollarFromExistingPositionsAndEntries(symbol, logTags);
        let potentialLoss = loss + newRiskInDollar + existingRiskInDollar;
        if ((potentialLoss) > RiskManager.getMaxDailyLossLimit()) {
            Firestore.logError(`adding will exceed daily max loss limit to ${potentialLoss}`, logTags);
            return false;
        }
    }

    let addCount = TradingState.getAddCount(symbol, isLong);
    if (addCount > 2 && Rules.isEntryMoreThanHalfDailyRange(symbol, isLong, entryPrice, todayRange, logTags)) {
        return false;
    }

    let q = Models.getPositionNetQuantity(symbol);
    if (q == 0) {
        return checkParitalEntryForNewPosition(symbol, isLong, entryPrice, logTags);
    } else {
        return checkParitalEntryForExistingPosition(symbol, isLong, quantity, entryPrice, stopLossPrice, logTags);
    }
};

const checkParitalEntryForNewPosition = (
    symbol: string, isLong: boolean, entryPrice: number,
    logTags: Models.LogTags) => {
    if (Models.getRealizedProfitLossPerDirection(symbol, isLong) < 0) {
        Firestore.logError(`cannot add partials on a new position if not profitable before`, logTags);
        return false;
    }
    return true;
}
const checkParitalEntryForExistingPosition = (symbol: string, isLong: boolean,
    quantity: number, entryPrice: number, stopLossPrice: number,
    logTags: Models.LogTags) => {
    let existingRiskInDollar = RiskManager.getRiskInDollarFromExistingPositionsAndEntries(symbol, logTags);
    let newRiskInDollar = quantity * RiskManager.getRiskPerShare(symbol, entryPrice, stopLossPrice);
    let maxRisk = RiskManager.getMaxDailyLossLimit();
    let ratio = (existingRiskInDollar + newRiskInDollar) / maxRisk;
    if (ratio > 0.52) {
        Firestore.logError(`already full position, new ratio will be ${ratio}`, logTags);
        return false;
    }

    return true;
}

export const checkAlgoEntryRules = (symbol: string, entryPrice: number, stopOutPrice: number,
    plan: TradingPlansModels.BasePlan,
    isLong: boolean, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    return allowedSizeMutiplier;
}

export const checkRangeEntryRules = (symbol: string, entryPrice: number,
    stopOutPrice: number, plan: TradingPlansModels.BasePlan, logTags: Models.LogTags) => {
    let allowedSizeMutiplier = 0.5;
    let isLong = entryPrice > stopOutPrice;
    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(new Date());
    let symbolData = Models.getSymbolData(symbol);
    let { momentumStartPrice, currentVwap } = getCommonInfo(symbol, isLong);

    allowedSizeMutiplier = checkGlobalEntryRules(symbol, isLong, plan, logTags, entryPrice, stopOutPrice);
    if (allowedSizeMutiplier == 0)
        return 0;

    if (!Rules.isEntryPriceInMomentum(isLong, entryPrice, momentumStartPrice)) {
        Firestore.logError(`checkRule: entry price ${entryPrice} is not in momentum range ${momentumStartPrice}`, logTags);
        return 0;
    }

    if (!Rules.checkVwap(symbol, isLong, entryPrice, stopOutPrice, currentVwap, secondsSinceMarketOpen, logTags)) {
        Firestore.logError(`checkRule: Vwap rule failed for ${symbol}`, logTags);
        return 0;
    }

    if ((isLong && entryPrice > currentVwap) ||
        (!isLong && entryPrice < currentVwap)) {
        Firestore.logError(`range trading, wait for vwap false break`, logTags);
        return 0;
    }

    return allowedSizeMutiplier;
}

const getCommonInfo = (symbol: string, isLong: boolean) => {
    let plan = TradingPlans.getTradingPlans(symbol);
    let keyLevels = plan.keyLevels;
    let momentumStartPrice = isLong ? keyLevels.momentumStartForLong : keyLevels.momentumStartForShort;
    return {
        tradingPlans: plan,
        momentumStartPrice: momentumStartPrice,
        atr: plan.atr,
        todayRange: Models.getTodayRange(plan.atr),
        averageRange: plan.atr.average,
        currentVwap: Models.getCurrentVwap(symbol),
        premarketVwapTrend: Vwap.getStrongPremarketVwapTrend(symbol),
        secondsSinceMarketOpen: Helper.getSecondsSinceMarketOpen(new Date()),
    }
}