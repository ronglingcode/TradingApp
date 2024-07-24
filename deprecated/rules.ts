/**
 * @returns a number between 0 and 1. Negative means loss
 */
/*
export const getProfitMultiple = (symbol: string, targetPrice: number) => {
    let filledPrice = Models.getInitialFilledPrice(symbol);
    let tradeState = TradingState.getSymbolState(symbol).breakoutTradeState;
    let isLong = tradeState.isLong;
    let stopLossPrice = tradeState.stopLossPrice;
    let risk = Math.abs(filledPrice - stopLossPrice);
    let reward = isLong ? targetPrice - filledPrice : filledPrice - targetPrice;
    let ratio = reward / risk;
    ratio = Math.round(ratio * 100) / 100;
    return ratio;
}

export const isLateEntry = (symbol: string) => {
    let tradeState = TradingState.getSymbolState(symbol).breakoutTradeState;
    let submitTime = tradeState.submitTime;
    let d = submitTime.toDate();
    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(d);
    let minutes = secondsSinceMarketOpen / 60;
    return minutes >= 15;
}
*/

/**
 * Returns true if limit exit price reached the double top/bottom level
 */
/*
export const isNearDoubleTop = (symbol: string, isLong: boolean, state: Models.BreakoutTradeState, newPrice: number) => {
    if (!state.hasValue || !state.firstLegEndPrice) {
        return false;
    }
    if ([Models.BreakoutTradeStatus.FirstLeg, Models.BreakoutTradeStatus.Pending, Models.BreakoutTradeStatus.Triggered].includes(state.status))
        return false;
    let price = state.firstLegEndPrice;
    if (state.firstRetracementEndPrice) {
        price = (price + state.firstRetracementEndPrice) / 2;
    }
    if (isLong) {
        return newPrice > price;
    } else {
        return newPrice < price;
    }
}*/
/**
 * Returns true if ok to exit because on the state of the breakout pattern. 
 * For the breakout candle and 3 follow up candles, if any closed inside, it's ok to exit
 * Otherwise, keep holding.
 */
/*
export const checkStateSinceEntry = (symbol: string, state: Models.BreakoutTradeState) => {
    return !state.exitLocked;
};
export const isAfterWaitTimeSinceMarketOpen = (symbol: string, action: string,
    secondsSinceMarketOpen: number, planConfigs: TradingPlansModels.PlanConfigs | undefined, logTags: Models.LogTags) => {
    if (!planConfigs || secondsSinceMarketOpen <= 0) {
        return true;
    }

    let requiredWaitTime = planConfigs.exitRules.waitTimeInSecondsAfterMarketOpen;
    if (requiredWaitTime == 0) {
        return true;
    }
    if (secondsSinceMarketOpen < requiredWaitTime) {
        let message = `cannot ${action}, require ${requiredWaitTime} seconds after market open`;
        Firestore.logError(message, logTags);
        return false;
    }
    return true;
}

export const checkTimeSinceEntry = (symbol: string, exitRules: TradingPlansModels.ExitRules | undefined) => {
    let secondsSinceEntry = Models.getFirstEntryTimeFromNowInSeconds(symbol);
    let remainingSeconds = 0;
    if (exitRules) {
        remainingSeconds = exitRules.waitTimeInSecondsSinceEntry - secondsSinceEntry;
    }
    let result = {
        passed: true,
        remainingSeconds: remainingSeconds,
        secondsSinceEntry: secondsSinceEntry,
    };
    if (remainingSeconds > 0) {
        result.passed = false;
    }
    return result;
};
export const reachedMinimumPositionSize = (symbol: string, action: string,
    planConfigs: TradingPlansModels.PlanConfigs | undefined, peakRiskMultiple: number, logTags: Models.LogTags) => {
    if (!planConfigs) {
        return true;
    }
    let required = planConfigs.exitRules.minimumRiskMultipleRequiredForAdjustingExits;
    if (required == 0) {
        return true;
    }
    if (peakRiskMultiple < required) {
        let message = `cannot ${action}, require position increase to ${required}, highest was ${peakRiskMultiple}`;
        Firestore.logError(message, logTags);
        return false;
    }
    return true;
}

// Has reached 75% of ATR
export const isCloseToFullATR = (symbol: string) => {
    let symbolData = Models.getSymbolData(symbol);
    let range = Math.abs(symbolData.highOfDay - symbolData.lowOfDay);
    let plan = TradingPlans.getTradingPlans(symbol);
    return range / plan.dailyRange >= 0.75;
}
*/
/**
 * For limit exit order, it needs to be at lease x * R 
 * @returns true if profit target >= miminum R
 */
/*
export const checkMinimumProfit = (
    symbol: string, newPrice: number, isLong: boolean, logTags: Models.LogTags) => {
    let result = {
        allowed: true,
        minimumR: 0,
        newR: 0,
    };
    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(new Date());
    if (secondsSinceMarketOpen > 60 * 10) {
        Firestore.logInfo(`checkMinimumProfit disabled after 10 minutes`, logTags);
        return result;
    }

    let minimumR = Config.getProfileSettingsForSymbol(symbol).exitRules.minimumProfit;
    if (minimumR == 0) {
        Firestore.logInfo(`checkMinimumProfit disabled by profile settings`, logTags);
        return result;
    }

    minimumR = TradingPlans.getMininumProfitRatio(symbol);

    let filledPrice = Models.getInitialFilledPrice(symbol);
    if (filledPrice == 0) {
        Firestore.logInfo(`checkMinimumProfit disabled missing filled price`, logTags);
        return result;
    }

    if ((isLong && newPrice <= filledPrice) ||
        (!isLong && newPrice >= filledPrice)) {
        // ok to take loss
        Firestore.logInfo(`checkMinimumProfit disabled for taking loss early`, logTags);
        return result;
    }

    let stopLossPrice = Chart.getStopLossPrice(symbol, isLong, null);
    let risk = Math.abs(filledPrice - stopLossPrice);
    let reward = Math.abs(newPrice - filledPrice);
    let ratio = reward / risk;
    ratio = Math.round(ratio * 100) / 100;
    Firestore.logDebug(`checkMinimumProfit minimumR ${minimumR}, ratio ${ratio}, risk ${risk}, reward ${reward}`, logTags);
    result = {
        minimumR: minimumR,
        newR: ratio,
        allowed: ratio >= minimumR,
    };
    if (!result.allowed) {
        Firestore.logError(`${symbol}: new profit ${ratio}R < minimum of ${minimumR}R`, logTags);
    } else {
        Firestore.logInfo(`${symbol}: new profit ${ratio}R >= minimum of ${minimumR}R`, logTags);
    }
    return result;
};
*/