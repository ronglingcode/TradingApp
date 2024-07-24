/*
export const isFalseBreakout = (symbol: string) => {
    let symbolState = TradingState.getSymbolState(symbol);
    let breakoutInfo = symbolState.breakoutTradeState;
    // if it's not strictly a breakout trade, don't treat it as false breakout
    if (!breakoutInfo.hasValue || !breakoutInfo.breakoutCandle)
        return false;

    let isLong = breakoutInfo.isLong;
    return !isCandleClosedOutside(breakoutInfo.breakoutCandle, isLong, breakoutInfo.entryPrice);
};
const isCandleClosedOutside = (candle: Models.SimpleCandle, isLong: boolean, breakoutPrice: number) => {
    if (isLong) {
        return candle.close > breakoutPrice;
    } else {
        return candle.close < breakoutPrice;
    }
};

export const getTwoCandlesPattern = (first: Models.SimpleCandle, second: Models.SimpleCandle) => {
    let patterns: Models.TwoCandlesPattern[] = [];
    if (second.high > first.high && second.low > first.low) {
        patterns.push(Models.TwoCandlesPattern.UpTrend);
        if (second.close > first.high) {
            patterns.push(Models.TwoCandlesPattern.StrongUpTrend);
        }
    }
    if (second.low < first.low && second.high < first.high) {
        patterns.push(Models.TwoCandlesPattern.DownTrend);
        if (second.close < first.low) {
            patterns.push(Models.TwoCandlesPattern.StrongDownTrend);
        }
    }
    if (second.high < first.high && second.low > first.low)
        patterns.push(Models.TwoCandlesPattern.InsideBar);
    if (isGreenBar(first) && second.close < first.low)
        patterns.push(Models.TwoCandlesPattern.ShortEngulfing);
    if (isRedBar(first) && second.close > first.high)
        patterns.push(Models.TwoCandlesPattern.LongEngulfing);

    return patterns;
};
*/