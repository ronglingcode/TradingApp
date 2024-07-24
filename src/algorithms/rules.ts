import * as Models from '../models/models';
import * as Helper from '../utils/helper';
import * as Patterns from './patterns';
import * as AutoTrader from './autoTrader';
import * as Config from '../config/config';
import * as RiskManager from '../algorithms/riskManager';
import * as TakeProfit from '../algorithms/takeProfit';
import * as Watchlist from '../algorithms/watchlist';
import * as Chart from '../ui/chart';
import * as Firestore from '../firestore';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as TradingState from '../models/tradingState';
import type * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
declare let window: Models.MyWindow;

export const checkVwap = (symbol: string,
    isLong: boolean, entryPrice: number, stopOutPrice: number,
    currentVwap: number, secondsSinceMarketOpen: number,
    logTags: Models.LogTags) => {
    if (!Config.getProfileSettingsForSymbol(symbol).entryRules.requireVwapSameDirection) {
        return true;
    }
    if (secondsSinceMarketOpen < 0) {
        return true;
    }

    let isAgainstVwap = Helper.isAgainstVwap(currentVwap, entryPrice, isLong);
    if (!isAgainstVwap) {
        return true
    }
    // allow 2R setup to vwap
    // https://sunrisetrading.atlassian.net/browse/TPS-192
    let distanceToVwap = Math.abs(entryPrice - currentVwap);
    let risk = Math.abs(entryPrice - stopOutPrice);
    let ratio = distanceToVwap / risk;
    if (ratio >= 2 || ratio <= 0.25) {
        return true;
    }
    Firestore.logError(`against vwap or less than 2R from vwap`, logTags);
    return false;
};

export const hasReversalBar = (symbol: string, secondsSinceMarketOpen: number) => {
    if (secondsSinceMarketOpen < 60) {

    } else {

    }
}

// avoid chase the first candle during second candle
export const checkOpenCandle = (symbol: string,
    isLong: boolean, openingCandle: Models.Candle | undefined) => {
    /*
        if (!Config.getProfileSettingsForSymbol(symbol).entryRules.openCandleMustBeReversal) {
        return true;
    }*/
    if (!openingCandle)
        return true;

    let seconds = Helper.getSecondsSinceMarketOpen(new Date());
    if (seconds >= 120)
        return true;

    if (Watchlist.isTopPick(symbol)) {
        return true;
    }

    let currentCandle = Models.getCurrentCandle(symbol);
    // During 2nd minute, allow if the 2nd candle is retracing.
    if (60 < seconds && seconds < 120) {
        if (isLong && Patterns.isRedBar(currentCandle) ||
            (!isLong && Patterns.isGreenOpenBar(currentCandle))) {
            return true;
        }
    }

    if (isLong) {
        // try to go long
        if (Patterns.isGreenOpenBar(openingCandle)) {
            return false;
        }
    } else {
        // try to go short
        if (Patterns.isRedOpenBar(openingCandle)) {
            return false;
        }
    }
    return true;
};




export const entryJustHappened = (symbol: string) => {
    let secondsSinceEntry = Models.getLastEntryTimeFromNowInSeconds(symbol);
    return secondsSinceEntry <= 10;
};

export const isInTheSameMinuteAsEntry = (symbol: string) => {
    let tradeTime = Models.getLastEntryTime(symbol);
    if (!tradeTime)
        return false;

    return Helper.isCurrentMinute(tradeTime);
};

/**
 * If it's an early entry that before the price exceeds the level of opening range breakout. 
 * // https://sunrisetrading.atlassian.net/browse/TPS-207
 *  */
export const isEarlyEntry = (maxSizeOnEarlyEntry: number, openRange: Models.OpenRange | undefined, isLong: boolean, entryPrice: number) => {
    if (maxSizeOnEarlyEntry == 1) {
        return 1;
    }
    if (!openRange) {
        return 1;
    }
    if ((isLong && entryPrice < openRange.high) ||
        (!isLong && entryPrice > openRange.low)) {
        return maxSizeOnEarlyEntry;
    }
    return 1;
};

/**
 * After 10 minutes, breakout entry that’s not high/low of the day, cannot exceed 50%.
 */
// https://sunrisetrading.atlassian.net/browse/TPS-219
export const checkForMidRangeBreakout = (secondsSinceMarketOpen: number, isLong: boolean, entryPrice: number, highOfDay: number, lowOfDay: number) => {
    if (secondsSinceMarketOpen < 600) {
        return 1;
    }
    if ((isLong && entryPrice >= highOfDay) || (!isLong && entryPrice <= lowOfDay)) {
        return 1;
    }
    return 0.5;
};

// return 1 for full position
// return 0.5 for half position
// cannot exceed half position by checking current position
// https://sunrisetrading.atlassian.net/browse/TPS-209
// do not check existing position any more due to 
// https://sunrisetrading.atlassian.net/browse/TPS-267
export const atMostHalfPositionForMarketOrder = (symbol: string, secondsSinceMarketOpen: number, stopOutPrice: number) => {
    return 0.5;
    /*if (secondsSinceMarketOpen < 6 * 60) {
        return 0.5;
    }
    return checkExistingPositionForAllowedSize(symbol, 0.5);*/
};

/**
 * @param threshold a number between 0 - 100
 * @returns True if position size is at least greater than threshold
 */
export const checkForMinimumPositionSize = (symbol: string, threshold: number) => {
    let risk = RiskManager.getRiskMultiplesFromExistingPosition(symbol);
    let result = {
        threshold: threshold,
        riskMultiple: risk,
        isAboveThreshold: risk >= threshold,
    };
    return result;
};


export const isOverDailyMaxLoss = () => {
    let pnl = Models.getRealizedProfitLoss();
    if (pnl >= 0) {
        return false;
    }

    let currentLoss = pnl * (-1);
    return currentLoss >= RiskManager.getMaxDailyLossLimit();
};


/**
 * @returns true if short is blocked
 */
export const isShortAboveLastResistance = (symbol: string, isLong: boolean, entryPrice: number, lastDefenseForShort: number, logTags: Models.LogTags) => {
    if (isLong) {
        return false;
    }
    if (lastDefenseForShort == 0) {
        return false;
    }
    if (entryPrice > lastDefenseForShort) {
        let msg = `cannot short ${symbol}, entry ${entryPrice} is above last resistance for bears ${lastDefenseForShort}`;
        Firestore.logError(msg, logTags);
        return true;
    }
    return false;
};
/**
 * @returns true if long is blocked
 */
export const isLongBelowLastSupport = (symbol: string, isLong: boolean, entryPrice: number, lastDefenseForLong: number, logTags: Models.LogTags) => {
    if (!isLong) {
        return false;
    }
    if (lastDefenseForLong == 0) {
        return false;
    }
    if (entryPrice < lastDefenseForLong) {
        let msg = `cannot long ${symbol} because entry price ${entryPrice} is below last support for bulls ${lastDefenseForLong}`;
        Firestore.logError(msg, logTags);
        return true;
    }
    return false;
};

/**
 * If the trade direction is against premarket vwap direction, it must wait for the first pullback to happen first. 
 * https://sunrisetrading.atlassian.net/browse/TPS-244
 * @returns true if the condition is satisfied to enter a trade that is against the premarket vwap direction
 */
export const hasFirstPullbackIfAgainstPremarktVwapDirection = (symbol: string, isLong: boolean) => {
    if (!Config.getProfileSettingsForSymbol(symbol).entryRules.requireVwapSameDirection) {
        return true;
    }
    let premarketVwapDirection = getPremarketVwapDirection(symbol);
    if (isLong && premarketVwapDirection.isBelowVwap) {
        // need to have a pullback already
        if (Patterns.hasRedBarSinceOpen(symbol)) {
            return true;
        } else {
            return false;
        }
    } else if (!isLong && premarketVwapDirection.isAboveVwap) {
        if (Patterns.hasGreenBarSinceOpen(symbol)) {
            return true;
        } else {
            return false;
        }
    }
    return true;
};

/**
 * If the entry is within first 2 minutes and last 2 minutes was above vwap, 
 * cannot short on the breakdown. 
 * https://sunrisetrading.atlassian.net/browse/TPS-176
 * @returns the risk size between 0 and 1
 */
export const checkPremarketVwap = (symbol: string, isLong: boolean, secondsSinceMarketOpen: number) => {
    return true;
    if (!Config.getProfileSettingsForSymbol(symbol).entryRules.requireVwapSameDirection) {
        return true;
    }
    // only check this rule for first 2 minutes
    if (secondsSinceMarketOpen > (60 + 55)) {
        return true;
    }

    let premarketVwapDirection = getPremarketVwapDirection(symbol);
    if (isLong) {
        // if entire candle below vwap, cannot long at the open
        if (premarketVwapDirection.isBelowVwap)
            return false;
        else
            return true;
    } else {
        if (premarketVwapDirection.isAboveVwap)
            return false;
        else
            return true;
    }
};
const getPremarketVwapDirection = (symbol: string) => {
    let symbolData = Models.getSymbolData(symbol);
    let candles = symbolData.candles;
    let twoMinutesBeforeOpenCandles = [];
    let vwap = [];
    let timeWindow = [-2, -1];
    for (let i = 0; i < candles.length; i++) {
        if (timeWindow.includes(candles[i].minutesSinceMarketOpen)) {
            twoMinutesBeforeOpenCandles.push(candles[i]);
            vwap.push(symbolData.vwap[i].value);
            twoMinutesBeforeOpenCandles.push(candles[i + 1]);
            vwap.push(symbolData.vwap[i + 1].value);
            break;
        }
    }
    let isBelowVwap = twoMinutesBeforeOpenCandles[0].high < vwap[0] && twoMinutesBeforeOpenCandles[1].high < vwap[1];
    let isAboveVwap = twoMinutesBeforeOpenCandles[0].low > vwap[0] && twoMinutesBeforeOpenCandles[1].low > vwap[1];
    return {
        isBelowVwap,
        isAboveVwap,
    };
};





/**
 * Cannot move stop to less loss
 * https://sunrisetrading.atlassian.net/browse/TPS-184
 * @returns True if allowed
 */
export const checkTightenStop = (
    symbol: string, isLong: boolean,
    orderType: Models.OrderType, newPrice: number | undefined) => {
    if (orderType != 'STOP') {
        return true;
    }
    if (!newPrice)
        return true;

    if (Config.getProfileSettingsForSymbol(symbol).exitRules.allowTightenStop) {
        return true;
    }
    let riskMultiples = RiskManager.getRiskMultiplesFromExistingPosition(symbol);
    let entryPrice = Models.getAveragePrice(symbol);
    let stillLosingTrade = (isLong && newPrice < entryPrice) || (!isLong && newPrice > entryPrice);
    if (stillLosingTrade) {
        return false;
    }
    return true;
};

/**
 * https://sunrisetrading.atlassian.net/browse/TPS-293
 */
export const isSecondMinuteAndWithinOpenRange = (symbol: string, entryPrice: number, secondsSinceMarketOpen: number) => {
    if (secondsSinceMarketOpen <= 60 || secondsSinceMarketOpen >= 120) {
        return false;
    }
    let symbolData = Models.getSymbolData(symbol);
    let open = symbolData.openRange;
    if (!open) {
        return false;
    }
    let openHigh = open.high;
    let openLow = open.low;
    return openLow < entryPrice && entryPrice < openHigh;
}

export const filterNotIncreasingTargetsForOrders = (isLong: boolean, newPrice: number, exitPairs: Models.ExitPair[]) => {
    let finalPairs: Models.ExitPair[] = [];
    exitPairs.forEach(pair => {
        let order = pair.LIMIT;
        if (order && order.price) {
            let oldPrice = order.price;
            let isIncreasingTarget = (isLong && newPrice > oldPrice) || (!isLong && newPrice < oldPrice);
            if (isIncreasingTarget) {
                finalPairs.push(pair);
            }
        }
    });
    return finalPairs;
}
export const filterNotIncreasingTargetsForExitPairs = (isLong: boolean, newPrice: number, pairs: Models.ExitPair[]) => {
    let finalPairs: Models.ExitPair[] = [];
    pairs.forEach(pair => {
        if (pair.LIMIT && pair.LIMIT.price) {
            let oldPrice = pair.LIMIT.price;
            let isIncreasingTarget = (isLong && newPrice > oldPrice) || (!isLong && newPrice < oldPrice);
            if (isIncreasingTarget) {
                finalPairs.push(pair);
            }
        }
    });
    return finalPairs;
}
export const isBlockedByTiming = (secondsSinceMarketOpen: number, deferInSeconds: number, stopAfterSeconds: number) => {
    return isBlockedByDeferTrading(deferInSeconds, secondsSinceMarketOpen) ||
        isBlockedByAfterTrading(stopAfterSeconds, secondsSinceMarketOpen);
}
const isBlockedByDeferTrading = (deferInSeconds: number, secondsSinceMarketOpen: number) => {
    if (deferInSeconds <= 0) {
        return false;
    }
    return secondsSinceMarketOpen < deferInSeconds;
}
const isBlockedByAfterTrading = (stopAfterSeconds: number, secondsSinceMarketOpen: number) => {
    if (stopAfterSeconds <= 0) {
        return false;
    }
    return secondsSinceMarketOpen > stopAfterSeconds;
}

export const isAfterOpeningMomentum = (symbol: string) => {
    if (Helper.isFutures(symbol))
        return false;

    let m = Helper.getMinutesSinceMarketOpen(new Date());
    if (m > 20) {
        Firestore.logError(`is after 20 minutes since market open`);
        return true;
    }
    return false;

}


/**
 * Is taking a loss when it's still holding vwap
 */
export const isLossWhenHoldingVwap = (symbol: string, isLong: boolean, price: number) => {
    let cost = Models.getAveragePrice(symbol);
    let isLoss = isLong ? price < cost : price > cost;
    let isHoldingVwap = Patterns.isPriceAboveVwap(symbol, isLong, price);
    return isLoss && isHoldingVwap;
}

export const isIncreasingTarget = (isLong: boolean, newPrice: number, oldPrice: number | undefined) => {
    if (!oldPrice)
        return undefined;
    if (isLong) {
        return newPrice > oldPrice;
    } else {
        return newPrice < oldPrice;
    }
}


export const isAllowedForAddedPosition = (symbol: string, isLong: boolean, isMarketOrder: boolean, newPrice: number, keyIndex: number) => {
    let addedStack = TradingState.getAddedPartialStack(symbol, isLong);
    let addCount = addedStack.length;
    Firestore.logInfo(`added count ${addCount}`);

    if (addCount <= 0)
        return false;

    Firestore.logInfo(addedStack);
    if ((isMarketOrder && keyIndex == 0) || keyIndex < addCount) {
        let originalPrice = addedStack[keyIndex];
        let isBetterPrice = (isLong && newPrice > originalPrice) || (!isLong && newPrice < originalPrice);
        if (isBetterPrice) {
            Firestore.logInfo(`allow for added position`)
            return true;
        }
    }
    return false;
}

export const isEntryAfterTopPick = (symbol: string) => {
    let wl = window.HybridApp.Watchlist;
    if (!wl || wl.length < 1) {
        return true;
    }
    let topPick = wl[0].symbol;
    if (topPick == symbol || symbol == 'SPY' || symbol == 'QQQ' || Helper.isFutures(symbol))
        return true;
    let trades = Models.getTradeExecutions(topPick);
    if (trades.length > 0)
        return true;

    let position = Models.getPositionNetQuantity(topPick);
    if (position != 0)
        return true;

    let entries = Models.getEntryOrders(topPick);
    if (entries.length > 0)
        return true;

    return false;
}

export const isEntryPriceInMomentum = (isLong: boolean, entryPrice: number, momemtumStartPrice: number) => {
    if (momemtumStartPrice == 0)
        return true;
    if (isLong)
        return entryPrice >= momemtumStartPrice;
    else
        return entryPrice <= momemtumStartPrice;
}

export const isEntryMoreThanHalfDailyRange = (symbol: string,
    isLong: boolean, entryPrice: number, dailyRange: number,
    logTags: Models.LogTags) => {
    if (Helper.isFutures(symbol)) {
        return false;
    }
    if (dailyRange == 0)
        return false;

    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(new Date());
    if (secondsSinceMarketOpen < 0) {
        return false;
    }
    let symbolData = Models.getSymbolData(symbol);
    let stopPrice = isLong ? symbolData.lowOfDay : symbolData.highOfDay;
    let range = Math.abs(entryPrice - stopPrice);
    let ratio = range / dailyRange;
    if (ratio >= 0.5) {
        Firestore.logError(`cannot reload when more than half ATR`, logTags);
        return true;
    }
    return false;
}

export const isDailyRangeTooSmall = (symbol: string,
    atr: TradingPlansModels.AverageTrueRange,
    showLogs: boolean, logTags: Models.LogTags) => {
    if (Helper.isFutures(symbol)) {
        return false;
    }
    let symbolData = Models.getSymbolData(symbol);
    let dailyRange = symbolData.highOfDay - symbolData.lowOfDay;
    let lowerBound = atr.average * 0.1;
    if (dailyRange < lowerBound) {
        dailyRange = Math.round(dailyRange * 100) / 100;
        if (showLogs) {
            Firestore.logError(`risk is too small: ${dailyRange} < ${lowerBound} (0.1 * ${atr.average})`, logTags);
        }
        return true;
    } else {
        return false;
    }
}
export const isAllowedAsPaperCut = (symbol: string, entryPrice: number,
    stopLossPrice: number, exitPrice: number) => {
    let secondsSinceEntry = Models.getFirstEntryTimeFromNowInSeconds(symbol);
    if (secondsSinceEntry > 120) {
        return false;
    }
    return RiskManager.isPaperCut(entryPrice, stopLossPrice, exitPrice);
}
