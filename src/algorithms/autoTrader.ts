import * as Helper from '../utils/helper';
import * as Rules from './rules';
import * as Chart from '../ui/chart';
import * as Models from '../models/models';
import * as Firestore from '../firestore';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as TradingState from '../models/tradingState';
import * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as EntryHandler from '../controllers/entryHandler';
import * as Broker from '../api/broker';
import * as MarketData from '../api/marketData';
import * as Vwap from '../algorithms/vwap';
import * as Patterns from '../algorithms/patterns';
import * as AutoRedToGreen from './autoRedToGreen';
import * as AutoFirstNewHigh from './autoFirstNewHigh';
import * as AutoRedToGreen60 from './autoRedToGreen60';
import * as AutoFirstBreakout from './autoFirstBreakout';
import * as OrderFlow from '../controllers/orderFlow';

declare let window: Models.MyWindow;

let refreshInprogress: Map<string, boolean> = new Map<string, boolean>();

export const scheduleEvents = () => {
    let now = new Date();
    scheduleMarketOpenEvent(now);
    scheduleFirstMinuteCloseEvent(now);
    setInterval(refreshAlgoPeriodically, 2 * 1000);
    setInterval(() => {
        Chart.updateAccountUIStatus([]);
        Patterns.checkWave();
    }, 5000);
    // run on each reload 
    setTimeout(() => {

    }, 3000);
};


export const showAllCharts = () => {
    let wl = window.HybridApp.Watchlist;
    if (!wl || wl.length <= 1)
        return;

    for (let i = 1; i < wl.length; i++) {
        let symbol = wl[i].symbol;
        Chart.showChart(symbol);
    }
}

const scheduleMarketOpenEvent = (now: Date) => {
    let marketOpenTime = new Date();
    marketOpenTime.setHours(6);
    marketOpenTime.setMinutes(30);
    marketOpenTime.setSeconds(2);

    let waitTime = marketOpenTime.getTime() - now.getTime();
    if (waitTime > 0) {
        console.log(`schedule market open event in ${waitTime / 1000}`);
        setTimeout(() => {
            onMarketJustOpened();
        }, waitTime);
    }
};
const scheduleFirstMinuteCloseEvent = (now: Date) => {
    let rightBeforeFirstMinuteClose = new Date();
    rightBeforeFirstMinuteClose.setHours(6);
    rightBeforeFirstMinuteClose.setMinutes(30);
    rightBeforeFirstMinuteClose.setSeconds(50);
    let waitTime = rightBeforeFirstMinuteClose.getTime() - now.getTime();
    if (waitTime > 0) {
        setTimeout(() => {
            Helper.speak("Check all stocks for first minute close");
        }, waitTime);
    }
}

const scheduleSecondMinuteCloseEvent = (now: Date) => {
    let rightBeforeFirstMinuteClose = new Date();
    rightBeforeFirstMinuteClose.setHours(6);
    rightBeforeFirstMinuteClose.setMinutes(30);
    rightBeforeFirstMinuteClose.setSeconds(50);
    let waitTime = rightBeforeFirstMinuteClose.getTime() - now.getTime();
    if (waitTime > 0) {
        setTimeout(() => {
            Helper.speak("Check all stocks for first minute close");
        }, waitTime);
    }
}

export const onMarketJustOpened = () => {
    setInterval(() => {
        refreshEntryStopLoss();
    }, 1000);
    autoTriggerRedToGreen60();
}
export const autoTriggerRedToGreen60 = () => {
    let watchlist = Models.getWatchlist();
    watchlist.forEach(item => {
        let symbol = item.symbol;
        let plan = TradingPlans.getTradingPlans(symbol);
        let longPlan = plan.long.profitTakingFade60Plan;
        let shortPlan = plan.short.profitTakingFade60Plan;

        if (longPlan && longPlan.enableAutoTrigger) {
            AutoRedToGreen60.startAlgo(symbol, true, longPlan, TradingPlansModels.PlanType.ProfitTakingFade60);
        }
        if (shortPlan && shortPlan.enableAutoTrigger) {
            AutoRedToGreen60.startAlgo(symbol, false, shortPlan, TradingPlansModels.PlanType.ProfitTakingFade60);
        }
    });
}
export const onMarketOpen = (symbol: string) => {
    // handle when market opens
    if (!symbol) {
        //hideVwapMixedStocksForFirstFewMinutes();
    }
};
const hideVwapMixedStocksForFirstFewMinutes = () => {
    let watchlist = Models.getWatchlist();
    let symbols: string[] = [];
    watchlist.forEach(item => {
        if (Vwap.getStrongPremarketVwapTrend(item.symbol) == 0) {
            symbols.push(item.symbol);
        }
    });
    if (symbols.length == 0) {
        return;
    }
    Firestore.logError(`defer 2 minutes for vwap mixed stocks`);
    symbols.forEach(s => {
        Chart.hideChart(s);
    });
    setTimeout(() => {
        symbols.forEach(s => {
            Chart.showChart(s);
        })
    }, (2 * 60 - 10) * 1000);
}


const notifyEntrySignal = (symbol: string, isLong: boolean) => {
    Helper.playNotificationSound();
    Chart.blinkChart(symbol, isLong);
}


export const startAlgo = (symbol: string, isLong: boolean) => {
    let plan = TradingPlans.getTradingPlans(symbol);
    if (!plan)
        return;
    let singleDirection = TradingPlans.getTradingPlansForSingleDirection(symbol, isLong);
    let algo = singleDirection.breakoutAlgo;
    if (!algo)
        return;

    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(new Date());
    let logTags = EntryHandler.getLogTagsForEntryAction(symbol, isLong, "breakoutAlgo");
    if (algo.allowPremarket) {
        runAlgo(symbol, isLong, algo, logTags);
        return;
    }
    let waitInSeconds = 0;
    if (secondsSinceMarketOpen < 0) {
        // need to wait for market open
        waitInSeconds = Math.abs(secondsSinceMarketOpen) + 1;
    }
    setTimeout(() => {
        if (algo)
            runAlgo(symbol, isLong, algo, logTags);
    }, waitInSeconds * 1000);
}

export const runAlgo = (symbol: string, isLong: boolean,
    algo: TradingPlansModels.BreakoutAlgo, logTags: Models.LogTags) => {
    if (!Chart.isAlgoActive(symbol, isLong)) {
        Firestore.logInfo('algo is not active', logTags)
        return;
    }
    let sizeMultipler = EntryHandler.entryForAlgo(symbol, isLong, algo);
    if (sizeMultipler == 0) {
        Firestore.logError('algo not allowed', logTags)
        return;
    }
    setTimeout(() => {
        updateAlgo(symbol, isLong, sizeMultipler, algo, logTags);
    }, 1000);
}

export const updateAlgo = (symbol: string, isLong: boolean, sizeMultipler: number,
    algo: TradingPlansModels.BreakoutAlgo, logTags: Models.LogTags) => {
    if (!Chart.isAlgoActive(symbol, isLong)) {
        Firestore.logInfo('algo is not active', logTags)
        return;
    }
    let entryOrders = Models.getEntryOrders(symbol);
    if (entryOrders.length == 0) {
        Firestore.logInfo('exit for no entry orders, nothing to update', logTags);
        return;
    }
    let stopLoss = Models.getEntryOrderStopLossPrice(symbol);
    if (stopLoss == 0) {
        Firestore.logInfo('exit for no entry orders stop loss, nothing to update', logTags);
        return;
    }
    let entryPrice = entryOrders[0].price;
    if (!entryPrice) {
        Firestore.logError('no entry price', logTags);
        return;
    }
    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(new Date());
    if (algo.expirationInSeconds > 0 && secondsSinceMarketOpen > algo.expirationInSeconds) {
        Broker.cancelBreakoutEntryOrders(symbol);
        Firestore.logError('algo expired', logTags);
        return;
    }
    let symbolData = Models.getSymbolData(symbol);
    let newStopLoss = isLong ? symbolData.lowOfDay : symbolData.highOfDay;
    if ((isLong && newStopLoss < stopLoss) || (
        !isLong && newStopLoss > stopLoss)) {
        Firestore.logDebug('update entry orders', logTags);
        Broker.cancelBreakoutEntryOrders(symbol);
        EntryHandler.breakoutEntryWithoutRules(
            symbol, isLong, entryPrice, newStopLoss, logTags, sizeMultipler, algo);
    }
    setTimeout(() => {
        updateAlgo(symbol, isLong, sizeMultipler, algo, logTags);
    }, 1000);
}

export const onMinuteClosed = (
    symbol: string, newlyClosedCandle: Models.CandlePlus,
    isRealtime: boolean, symbolData: Models.SymbolData) => {
    console.log(`candle just closed for ${symbol}`);
    if (isRealtime) {
        AutoFirstNewHigh.onMinuteClosed(symbol);
        let seconds = Helper.getSecondsSinceMarketOpen(new Date());
        if (120 <= seconds && seconds <= 180) {
            Firestore.logInfo(`2nd candle just closed, minutes since open ${newlyClosedCandle.minutesSinceMarketOpen}`);
            AutoFirstNewHigh.TryAutoTrigger(symbol);
        }
    }
}

export const updateAllAlgo = (symbol: string) => {
    let netQuantity = Models.getPositionNetQuantity(symbol);
    if (netQuantity != 0) {
        // TODO: the opposition algo should keep
        clearExistingAlgos(symbol);
    }
}
export const clearExistingAlgos = (symbol: string) => {
    AutoFirstNewHigh.stopAlgo(symbol);
    AutoRedToGreen.stopAlgo(symbol);
    AutoFirstNewHigh.stopAlgo(symbol);
    AutoRedToGreen60.stopAlgo(symbol);
    AutoFirstBreakout.stopAlgo(symbol);
}

export const refreshAlgoPeriodically = () => {
    let wl = window.HybridApp.Watchlist;
    if (!wl || wl.length == 0)
        return;

    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(new Date());
    for (let i = 0; i < wl.length; i++) {
        let symbol = wl[i].symbol;
        refreshAlgoPeriodicallyForSymbol(symbol, secondsSinceMarketOpen);
    }
}
const refreshAlgoPeriodicallyForSymbol = (symbol: string, secondsSinceMarketOpen: number) => {
    if (secondsSinceMarketOpen > 60) {
        //AutoFirstNewHigh.refreshPeriodically(symbol);
    }
}

export const pauseAlgo = (symbol: string) => {
    clearExistingAlgos(symbol);
}
export const refreshEntryStopLoss = () => {
    let items = Models.getWatchlist();
    items.forEach(item => {
        if (!Helper.isFutures(item.symbol)) {
            let logTags: Models.LogTags = {
                symbol: item.symbol,
                logSessionName: 'refresh-entry-stop-loss'
            };
            refreshEntryStopLossForSymbol(item.symbol, logTags);
        }
    });
}
export const refreshEntryStopLossForSymbol = (symbol: string, logTags: Models.LogTags) => {
    if (hasRefreshInProgress(symbol)) {
        // wait for next loop to double the wait time
        setRefreshInProgress(symbol, false);
        return;
    }
    let exitOrders = Models.getExitOrdersPairs(symbol);
    if (exitOrders.length > 0) {
        // already filled entry, exiting algo
        return;
    }
    let entryOrders = Models.getEntryOrders(symbol);
    if (entryOrders.length == 0) {
        // no entry orders yet
        return;
    }
    let stopLoss = Models.getEntryOrderStopLossPrice(symbol);
    if (stopLoss == 0) {
        // no stop loss from entry orders, nothing to update
        return;
    }
    let entryPrice = entryOrders[0].price;
    if (!entryPrice) {
        // no entry price
        return;
    }
    let symbolData = Models.getSymbolData(symbol);
    let isLong = entryOrders[0].isBuy;
    let newStopLoss = isLong ? symbolData.lowOfDay : symbolData.highOfDay;
    if ((isLong && newStopLoss < stopLoss) || (
        !isLong && newStopLoss > stopLoss)) {
        Firestore.logInfo(`refresh with new stop ${newStopLoss}`);
        let breakoutTradeState = TradingState.getBreakoutTradeState(symbol, isLong);
        setRefreshInProgress(symbol, true);
        OrderFlow.replaceEntryWithNewStop(
            symbol, isLong, entryPrice, newStopLoss,
            breakoutTradeState.sizeMultipler, breakoutTradeState.plan, logTags
        );
    }
};
export const hasRefreshInProgress = (symbol: string) => {
    let result = refreshInprogress.get(symbol);
    return result == true;
}
export const setRefreshInProgress = (symbol: string, isInProgress: boolean) => {
    refreshInprogress.set(symbol, isInProgress);
}

export const checkAlgoPendingCondition = (symbol: string) => {
    let seconds = Helper.getSecondsSinceMarketOpen(new Date());
    if (seconds > 60) {
        return;
    }
    AutoRedToGreen60.checkPendingCondition(symbol);
}
export const updatePullbackDepth = (symbol: string, newPrice: number) => {
    let netQuantity = Models.getPositionNetQuantity(symbol);
    if (netQuantity == 0) {
        return;
    }
    let isLong = netQuantity > 0;
    let state = TradingState.getBreakoutTradeState(symbol, isLong);
    if (!state.hasValue) {
        return;
    }
    let depth = Helper.getPullbackDepth(newPrice, state.entryPrice, state.stopLossPrice, isLong);
    if (depth != 0) {
        if (depth > state.maxPullbackReached) {
            state.maxPullbackReached = depth;
        }
    }
}
export const onNewTimeAndSalesData = (symbol: string, newPrice: number) => {
    checkAlgoPendingCondition(symbol);
    updatePullbackDepth(symbol, newPrice);
}