import * as Firestore from '../firestore';
import * as Models from '../models/models';
import * as Helper from '../utils/helper';
export const isReversalBar = (bar: Models.SimpleCandle, isLong: boolean, strictMode: boolean) => {
    let passedStrictMode = isReversalBarStrict(bar, isLong);
    if (strictMode) {
        if (!passedStrictMode) {
            Firestore.logInfo(`not reversal yet using strict mode for checking reversal bar`);
        }
        return passedStrictMode;
    } else {
        if (passedStrictMode) {
            return true;
        }
        if (isLong) {
            return isRedBar(bar) || hasBottomWick(bar) || hasTopWick(bar);
        } else {
            return isGreenBar(bar) || hasTopWick(bar) || hasBottomWick(bar);
        }
    }
}

const isReversalBarStrict = (bar: Models.SimpleCandle, isLong: boolean) => {
    let barPrint = Helper.printBar(bar.open, bar.high, bar.low, bar.close);
    let range = bar.high - bar.low;
    let topWick = bar.high - Math.max(bar.close, bar.open);
    let bottomWick = Math.min(bar.close, bar.open) - bar.low;
    let redBody = isRedBar(bar) ? bar.open - bar.close : 0;
    let greenBodoy = isGreenBar(bar) ? bar.close - bar.open : 0;
    if (isLong) {
        if (((redBody + bottomWick) / range > 0.45) || (bottomWick / range > 0.32)) {
            return true;
        } else {
            Firestore.logError(`not isReversalBarStrict for long, ${barPrint}`);
            return false;
        }
    } else {
        if (((greenBodoy + topWick) / range > 0.45) || (topWick / range > 0.32)) {
            return true;
        } else {
            Firestore.logError(`not isReversalBarStrict for short, ${barPrint}`);
            return false;
        }
    }
}
export const isRedBar = (bar: Models.SimpleCandle) => {
    return bar.close < bar.open;
};
export const isGreenBar = (bar: Models.SimpleCandle) => {
    return bar.close > bar.open;
};
const hasBottomWick = (bar: Models.SimpleCandle) => {
    let wick = Math.min(bar.close, bar.open) - bar.low;
    let range = bar.high - bar.low;
    return wick / range > 0.33;
};
const hasTopWick = (bar: Models.SimpleCandle) => {
    let wick = bar.high - Math.max(bar.close, bar.open);
    let range = bar.high - bar.low;
    return wick / range > 0.33;
};

const getTotalRange = (bar: Models.Candle) => {
    return bar.high - bar.low;
};
export const getBodyRatio = (bar: Models.Candle) => {
    let total = getTotalRange(bar);
    let body = Math.abs(bar.open - bar.close);
    return body / total;
}
export const isRedOpenBar = (bar: Models.Candle) => {
    if (!isRedBar(bar))
        return false;
    // body is more than 1/3 of the total candle
    return getBodyRatio(bar) >= 0.34;
};
export const isGreenOpenBar = (bar: Models.Candle) => {
    if (!isGreenBar(bar))
        return false;
    // body is more than 1/3 of the total candle
    return getBodyRatio(bar) >= 0.34;
};

export const trendIsConfirmed = (symbol: string, isLong: boolean) => {
    return hasOpenRangeBreakoutOccurred(symbol, isLong);
}
export const hasOpenRangeBreakoutOccurred = (symbol: string, isLong: boolean) => {
    let symbolData = Models.getSymbolData(symbol);
    let openRange = symbolData.openRange;
    if (!openRange)
        return false;
    if (isLong) {
        return symbolData.highOfDay > openRange.high;
    } else {
        return symbolData.lowOfDay < openRange.low;
    }
};
export const hasBreakoutOccurredForNewCandle = (breakoutPrice: number, isLong: boolean, newCandle: Models.Candle) => {
    if (isLong) {
        return newCandle.high >= breakoutPrice;
    } else {
        return newCandle.low <= breakoutPrice;
    }
}
export const isFalseBreakoutForNewCandle = (isLong: boolean, newCandle: Models.Candle, breakoutPrice: number) => {
    if (isLong) {
        return newCandle.close < breakoutPrice;
    } else {
        return newCandle.close > breakoutPrice;
    }
};


export const hasGreenBarSinceOpen = (symbol: string) => {
    let time = Helper.getMarketOpenTime();
    let tvTime = Helper.jsDateToTradingViewUTC(time);
    let candles = Models.getCandleSinceTime(symbol, tvTime);
    for (let i = 0; i < candles.length; i++) {
        const c = candles[i];
        if (isGreenBar(c)) {
            return true;
        }
    }
    return false;
};

export const hasRedBarSinceOpen = (symbol: string) => {
    let candles = Models.getCandlesSinceOpen(symbol);
    for (let i = 0; i < candles.length; i++) {
        const c = candles[i];
        if (isRedBar(c)) {
            return true;
        }
    }
    return false;
};

/**
 * including current bar which may not be closed. 
 */
export const hasReversalBarSinceOpen = (symbol: string, isLong: boolean,
    strictMode: boolean, considerCurrentCandleAfterOneMinute: boolean) => {
    let candles = Models.getCandlesSinceOpen(symbol);
    if (candles.length == 0) {
        Firestore.logError(`no candles after open`);
        return false;
    } else if (candles.length == 1) {
        return isReversalBar(candles[0], isLong, strictMode);
    }
    let end = considerCurrentCandleAfterOneMinute ? candles.length : candles.length - 1;

    for (let i = 0; i < end; i++) {
        const c = candles[i];
        if (isLong) {
            if (isRedBar(c)) {
                return true;
            }
        } else {
            if (isGreenBar(c)) {
                return true;
            }
        }
    }
    return false;
}

export const isBarClosed = (candle: Models.SimpleCandle) => {
    let now = new Date();
    let candleTime = Helper.tvTimestampToLocalJsDate(candle.time); // candleTime is candle open time
    candleTime.setSeconds(candleTime.getSeconds() + 60); // candleTime is candle close time now
    return now >= candleTime;
};

export const isPriceInLowerRange = (symbol: string, price: number) => {
    let symbolData = Models.getSymbolData(symbol);
    let range = symbolData.highOfDay - symbolData.lowOfDay;
    let threshold = range * 0.25 + symbolData.lowOfDay;
    return price <= threshold;
};

export const isPriceInUpperRange = (symbol: string, price: number) => {
    let symbolData = Models.getSymbolData(symbol);
    let range = symbolData.highOfDay - symbolData.lowOfDay;
    let threshold = symbolData.highOfDay - range * 0.25;
    return price >= threshold;
};

export const hasLostVwapMomentum = (symbol: string, isLong: boolean, entryTime: Date) => {
    let symbolData = Models.getSymbolData(symbol);
    let candles = symbolData.candles;
    let vwap = symbolData.vwap;
    let consecutiveMinutesAgainstVwap = 0;
    let startMinute = Helper.getSecondsSinceMarketOpen(entryTime) / 60;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i].minutesSinceMarketOpen < startMinute) {
            continue;
        }
        if (!vwap[i]) {
            continue;
        }
        if ((isLong && candles[i].close < vwap[i].value) ||
            (!isLong && candles[i].close > vwap[i].value)) {
            consecutiveMinutesAgainstVwap++;
            if (consecutiveMinutesAgainstVwap >= 3) {
                return true;
            }
        }
    }
    return false;
}

export const isPriceAboveVwap = (symbol: string, isLong: boolean, price: number) => {
    let vwap = Models.getCurrentVwap(symbol);
    if (isLong) {
        return price >= vwap;
    } else {
        return price <= vwap;
    }
}

export const isFirstRetracement = (symbol: string, isLong: boolean) => {
    let candles = Models.getCandlesSinceOpen(symbol);
    if (!isBarSameDirection(candles[0], isLong)) {
        // first candle needs to be in the same direction
        return false;
    }
    if (candles.length == 2) {
        // if it's at 2nd minute, second candle must be retracement
        return !isBarSameDirection(candles[1], isLong);
    }
    if (candles.length == 3) {
        // if it's at 3rd minute, 2nd or 3rd candle must be retracement\
        return !isBarSameDirection(candles[1], isLong) ||
            !isBarSameDirection(candles[2], isLong);
    }
    if (!isBarSameDirection(candles[1], isLong)) {
        // if more than 3 candles, first 2 must be in the same direction
        return false;
    }
    if (candles.length == 4) {
        return !isBarSameDirection(candles[2], isLong) ||
            !isBarSameDirection(candles[3], isLong);
    }
    if (!isBarSameDirection(candles[2], isLong)) {
        // if more than 4 candles, first 3 must be in the same direction
        return false;
    }
    if (isLong) {
        return hasRedBarSinceOpen(symbol);
    } else {
        return hasGreenBarSinceOpen(symbol);
    }
}

export const isBarSameDirection = (candle: Models.SimpleCandle, isLong: boolean) => {
    if (isLong) {
        return isGreenBar(candle);
    } else {
        return isRedBar(candle);
    }
}

export const isConsecutiveBarsSameDirection = (symbol: string, isLong: boolean) => {
    let candles = Models.getCandlesSinceOpen(symbol);
    let l = candles.length;
    if (l < 5) {
        return false;
    } else if (l < 10) {
        return isBarSameDirection(candles[l - 1], isLong) &&
            isBarSameDirection(candles[l - 2], isLong) &&
            isBarSameDirection(candles[l - 3], isLong) &&
            isBarSameDirection(candles[l - 4], isLong) &&
            isBarSameDirection(candles[l - 5], isLong);
    } else {
        return isBarSameDirection(candles[l - 1], isLong) &&
            isBarSameDirection(candles[l - 2], isLong) &&
            isBarSameDirection(candles[l - 3], isLong);
    }
}

export const hasClosedBeyondPrice = (symbol: string, isLong: boolean, price: number) => {
    let candles = Models.getCandlesSinceOpen(symbol);
    let l = candles.length;
    for (let i = 0; i < l; i++) {
        let closePrice = candles[i].close;
        if ((isLong && closePrice >= price) ||
            (!isLong && closePrice <= price)) {
            return true;
        }
    }
    return false;
}
export const hasConfirmationForBreakoutEntry = (symbol: string, isLong: boolean, breakoutPrice: number) => {
    let candles = Models.getCandlesSinceOpen(symbol);
    if (candles.length < 1) {
        // no candles
        return false;
    }
    let threshold = isLong ? candles[0].high : candles[0].low;
    if (candles.length == 1) {
        // first 60 seconds, ok to use its high low
        if (isLong) {
            return breakoutPrice >= threshold
        } else {
            return breakoutPrice <= threshold;
        }
    }
    // after 1 minute, only use closed candles
    for (let i = 0; i < candles.length - 1; i++) {
        let c = candles[i];
        threshold = isLong ? c.high : c.low;
        if ((isLong && breakoutPrice >= threshold) ||
            (!isLong && breakoutPrice <= threshold)) {
            return true;
        }
    }
    return false;
}

export const hasFalseBreakout = (symbol: string, threshold: number, isLong: boolean, price: number) => {
    let symbolData = Models.getSymbolData(symbol);
    if (isLong) {
        return symbolData.lowOfDay < threshold && price > threshold;
    } else {
        return symbolData.highOfDay > threshold && price < threshold;
    }
}

export const hasConfirmationForMarketEntry = (symbol: string, isLong: boolean) => {
    let candles = Models.getCandlesSinceOpen(symbol);
    if (candles.length < 2) {
        // first candle not closed
        return false;
    }
    let threshold = isLong ? candles[0].high : candles[0].low;
    // go through each next candle
    for (let i = 1; i < candles.length; i++) {
        let nextCandle = candles[i];
        if (isLong) {
            if (nextCandle.high > threshold) {
                return true;
            } else {
                threshold = nextCandle.high;
            }
        } else {
            if (nextCandle.low < threshold) {
                return true;
            } else {
                threshold = nextCandle.low;
            }
        }
    }
    return false;
}

export const checkFirstNewHighPattern = (symbol: string, isLong: boolean, timeframe: number) => {
    let result = {
        status: '',
        entryPrice: 0,
    }
    let rawCandles = Models.getCandlesSinceOpen(symbol);
    let candles = timeframe > 1 ? Models.aggregateCandles(rawCandles, timeframe) : rawCandles;
    if (candles.length <= 2) {
        result.status = 'first 2 candles not closed';
        return result;
    }
    result.entryPrice = isLong ? candles[0].high : candles[0].low;

    // last candle is always not closed
    for (let i = 1; i < candles.length - 1; i++) {
        let c = candles[i];
        if (isLong) {
            if (c.high <= result.entryPrice) {
                result.entryPrice = c.high;
            } else {
                result.status = 'already triggered in previous candle';
                return result;
            }
        } else {
            if (c.low >= result.entryPrice) {
                result.entryPrice = c.low;
            } else {
                result.status = 'already triggered in previous candle';
                return result;
            }
        }
    }
    // at least one closed candle need to be reversal bar
    let hasReversalBar = false;
    for (let i = 0; i < candles.length - 1; i++) {
        if (isLong && isRedBar(candles[i]) ||
            (!isLong && isGreenBar(candles[i]))) {
            hasReversalBar = true;
            break;
        }
    }
    if (!hasReversalBar) {
        result.status = 'no closed reversal bar';
        return result;
    }
    // check last candle
    let lastCandle = candles[candles.length - 1];
    if ((isLong && lastCandle.high > result.entryPrice) ||
        (!isLong && lastCandle.low < result.entryPrice)) {
        result.status = 'already triggered in current candle';
        return result;
    }
    result.status = 'ok';
    return result;
}

export const hasPremarketBreakout = (symbol: string, isLong: boolean) => {
    let symbolData = Models.getSymbolData(symbol);
    if (isLong) {
        return symbolData.highOfDay > symbolData.premktHigh;
    } else {
        return symbolData.lowOfDay < symbolData.premktLow;
    }
}

export const hasRetracementFromPremarket = (symbol: string, isLong: boolean) => {
    let currentPrice = Models.getCurrentPrice(symbol);
    let symbolData = Models.getSymbolData(symbol);
    if (isLong) {
        return currentPrice < symbolData.premktHigh;
    } else {
        return currentPrice > symbolData.premktLow;
    }
}

export const checkWave = () => {
    let wl = Models.getWatchlist();
    wl.forEach(element => {
        let symbol = element.symbol;
        let wave = countWaveSinceEntry(symbol);
        if (wave != 0) {
            Firestore.logInfo(`${symbol} wave: ${wave}`);
        }
    });
}
export const countWaveSinceEntry = (symbol: string) => {
    let q = Models.getPositionNetQuantity(symbol);
    if (q == 0) {
        return 0;
    }
    let isLong = q > 0;
    let lastEntryTime = Models.getLastEntryTime(symbol);
    if (!lastEntryTime) {
        return 0;
    }

    let candleStartTime = Helper.jsDateToTradingViewUTC(lastEntryTime);
    let candles = Models.getCandleSinceTime(symbol, candleStartTime);
    let currentDirectionIsLong = isLong;
    // wave 1
    let i = 0;
    let wave = 1;
    while (i + 1 < candles.length) {
        i = i + 1;
        let current = candles[i];
        let previous = candles[i - 1];
        if ((currentDirectionIsLong && current.low < previous.low) ||
            (!currentDirectionIsLong && current.high > previous.high)) {
            wave = 2;
            break;
        }
    }
    while (i + 1 < candles.length) {
        i = i + 1;
        let current = candles[i];
        let previous = candles[i - 1];
        if ((currentDirectionIsLong && current.high > previous.high) ||
            (!currentDirectionIsLong && current.low < previous.low)) {
            wave = 3;
            break;
        }
    }
    while (i + 1 < candles.length) {
        i = i + 1;
        let current = candles[i];
        let previous = candles[i - 1];
        if ((currentDirectionIsLong && current.low < previous.low) ||
            (!currentDirectionIsLong && current.high > previous.high)) {
            wave = 4;
            break;
        }
    }
    while (i + 1 < candles.length) {
        i = i + 1;
        let current = candles[i];
        let previous = candles[i - 1];
        if ((currentDirectionIsLong && current.high > previous.high) ||
            (!currentDirectionIsLong && current.low < previous.low)) {
            wave = 5;
            break;
        }
    }
    return wave;
}