/*
import * as Helper from '../utils/helper';
import * as Rules from './rules';
import * as Chart from '../ui/chart';
import * as Models from '../models/models';
import * as UI from '../ui/ui';
import * as Firestore from '../firestore';
import * as TradingState from '../models/tradingState';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import type * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as DB from '../data/db';
import * as Patterns from './patterns';
import * as EntryHandler from '../controllers/entryHandler';
import * as Broker from '../api/broker';
import type * as LightweightCharts from 'sunrise-tv-lightweight-charts';
declare let window: Models.MyWindow;

const defaultEntryCoolDownInSeconds = {
    'bigTrendDay': 300, // 5 minutes
    'rangeDay': 210 // 3.5 minutes
};

export const onMinuteClosed = (symbol: string, newCandle: Models.CandlePlus, isRealtime: boolean, symbolData: Models.SymbolData) => {
    if (newCandle.minutesSinceMarketOpen === 0) {
        onFirstMinuteClose(symbol, newCandle, isRealtime, symbolData.vwap.slice(-1)[0].value);
    } else if (newCandle.minutesSinceMarketOpen === 1) {
        onSecondMinuteClose(symbol, [symbolData.candles[symbolData.candles.length - 2], newCandle]);
    } else if (newCandle.minutesSinceMarketOpen === 2) {
        onThirdMinuteClose(symbol, [symbolData.candles[symbolData.candles.length - 3], symbolData.candles[symbolData.candles.length - 2], newCandle]);
    }
    
    if (isRealtime)
        updateSymbolStateOnCandleCloseLive(symbol, newCandle);
        
    };

    const updateSymbolStateOnCandleCloseLive = (symbol: string, newCandle: Models.CandlePlus) => {
        let symbolState = TradingState.getSymbolState(symbol);
        if (!symbolState.breakoutTradeState.hasValue) {
            // exit if no trade placed
            return;
        }
        let tradeState = symbolState.breakoutTradeState;
        let status = tradeState.status;
        let isLong = tradeState.isLong;
        let breakoutPrice = tradeState.entryPrice;
        let netQuantity = Models.getPositionNetQuantity(symbol);
        if (status == Models.BreakoutTradeStatus.Pending) {
            // Pending => Triggered
            if (netQuantity != 0 && Patterns.hasBreakoutOccurredForNewCandle(breakoutPrice, isLong, newCandle)) {
                symbolState.breakoutTradeState.status = Models.BreakoutTradeStatus.Triggered;
                symbolState.breakoutTradeState.breakoutCandle = newCandle;
                if (Patterns.isFalseBreakoutForNewCandle(isLong, newCandle, breakoutPrice)) {
                    let logTags: Models.LogTags = {
                        logSessionName: `${symbol}-autotrader_reduce_half_size-${newCandle.time}`,
                    };
                    //Firestore.logInfo(`Auto take half out due to breakout candle close inside for ${symbol}`);
                    //OrderFlow.marketOutHalfExitOrders(symbol, logTags);
                    symbolState.breakoutTradeState.exitLocked = false;
                } else {
                    symbolState.breakoutTradeState.exitLocked = true;
                }
                TradingState.update();
            }
        }
        if (netQuantity != 0) {
            if (tradeState.breakoutCandle) {
                analyzePatternsAfterBreakout(symbol, isLong, tradeState, breakoutPrice, tradeState.breakoutCandle, newCandle);
            }
            printState(symbol, tradeState);
        }
    }
    
    const analyzePatternsAfterBreakout = (symbol: string, isLong: boolean, breakoutTradeState: Models.BreakoutTradeState,
        breakoutPrice: number, breakoutCandle: Models.Candle, newCandle: Models.Candle) => {
        let offset = Models.getCandlesTimeDifferenceInMinutes(breakoutCandle, newCandle);
        Firestore.logInfo(`analyzePatternsAfterBreakout: offset ${offset}`);
        if (offset <= 0) {
            return;
        }
        // only analyze 2 or 3 candles after breakout
        if (offset <= breakoutTradeState.lockCandlesCount) {
            if (Patterns.hasBreakoutOccurredForNewCandle(breakoutPrice, isLong, newCandle)) {
                // draw hold signal
                let position: LightweightCharts.SeriesMarkerPosition = isLong ? 'aboveBar' : 'belowBar';
                let shape: LightweightCharts.SeriesMarkerShape = isLong ? 'arrowUp' : 'arrowDown';
                Chart.addMarker(symbol, {
                    time: newCandle.time,
                    position: position,
                    color: 'black',
                    shape: shape,
                    text: `hold \n${offset}/${breakoutTradeState.lockCandlesCount}`,
                });
                // lock exit after 1st follow through candle
                if (offset == 1) {
                    lockExit(breakoutTradeState);
                }
            } else {
                // release lock on exit if any of the follow through candle retrace back in
                unlockExit(breakoutTradeState);
                let position: LightweightCharts.SeriesMarkerPosition = isLong ? 'aboveBar' : 'belowBar';
                let shape: LightweightCharts.SeriesMarkerShape = isLong ? 'arrowUp' : 'arrowDown';
                Chart.addMarker(symbol, {
                    time: newCandle.time,
                    position: position,
                    color: 'black',
                    shape: shape,
                    text: 'unlocked'
                });
            }
            if (offset == breakoutTradeState.lockCandlesCount) {
                // release lock on 2nd or 3rd follow through candle close
                unlockExit(breakoutTradeState);
            }
        }
        let previousCandle = Models.getPreviousCandle(symbol, newCandle);
        let patterns = Patterns.getTwoCandlesPattern(previousCandle, newCandle);
        Firestore.logInfo(` two candles pattern: ${patterns}`);
        console.log(patterns);
        console.log(previousCandle);
        console.log(newCandle);
        if (breakoutTradeState.status == Models.BreakoutTradeStatus.Triggered) {
            if (isLong && patterns.includes(Models.TwoCandlesPattern.UpTrend)) {
                breakoutTradeState.status = Models.BreakoutTradeStatus.FirstLeg;
                breakoutTradeState.firstLegEndPrice = newCandle.high;
            } else if (!isLong && patterns.includes(Models.TwoCandlesPattern.DownTrend)) {
                breakoutTradeState.status = Models.BreakoutTradeStatus.FirstLeg;
                breakoutTradeState.firstLegEndPrice = newCandle.low;
            }
        } else if (breakoutTradeState.status == Models.BreakoutTradeStatus.FirstLeg) {
            if (isLong) {
                if (patterns.includes(Models.TwoCandlesPattern.UpTrend)) {
                    if (breakoutTradeState.firstLegEndPrice && newCandle.high > breakoutTradeState.firstLegEndPrice)
                        breakoutTradeState.firstLegEndPrice = newCandle.high;
                } else if (patterns.includes(Models.TwoCandlesPattern.DownTrend)) {
                    breakoutTradeState.status = Models.BreakoutTradeStatus.FirstRetracement;
                    breakoutTradeState.firstRetracementEndPrice = newCandle.low;
                }
            } else {
                if (patterns.includes(Models.TwoCandlesPattern.DownTrend)) {
                    if (breakoutTradeState.firstLegEndPrice && newCandle.low < breakoutTradeState.firstLegEndPrice)
                        breakoutTradeState.firstLegEndPrice = newCandle.low;
                } else if (patterns.includes(Models.TwoCandlesPattern.UpTrend)) {
                    breakoutTradeState.status = Models.BreakoutTradeStatus.FirstRetracement;
                    breakoutTradeState.firstRetracementEndPrice = newCandle.high;
                }
            }
        } else if (breakoutTradeState.status == Models.BreakoutTradeStatus.FirstRetracement) {
            if (isLong) {
                if (patterns.includes(Models.TwoCandlesPattern.DownTrend)) {
                    if (breakoutTradeState.firstRetracementEndPrice && newCandle.low < breakoutTradeState.firstRetracementEndPrice)
                        breakoutTradeState.firstRetracementEndPrice = newCandle.low;
                } else if (patterns.includes(Models.TwoCandlesPattern.UpTrend)) {
                    breakoutTradeState.status = Models.BreakoutTradeStatus.SecondLeg;
                }
            } else {
                if (patterns.includes(Models.TwoCandlesPattern.UpTrend)) {
                    if (breakoutTradeState.firstRetracementEndPrice && newCandle.high > breakoutTradeState.firstRetracementEndPrice)
                        breakoutTradeState.firstRetracementEndPrice = newCandle.high;
                } else if (patterns.includes(Models.TwoCandlesPattern.DownTrend)) {
                    breakoutTradeState.status = Models.BreakoutTradeStatus.SecondLeg;
                }
            }
        }
        TradingState.update();
        
    };

const printState = (symbol: string, breakoutTradeState: Models.BreakoutTradeState) => {
    if (breakoutTradeState.hasValue) {
        let message = `state for ${symbol}: has value ${breakoutTradeState.hasValue} ${breakoutTradeState.status}`;
        Firestore.logDebug(message);
        console.log(breakoutTradeState);
        Firestore.logBreakoutTradeState(symbol, breakoutTradeState);
    }
}

const lockExit = (state: Models.BreakoutTradeState) => {
    if (!state.exitLocked) {
        state.exitLocked = true;
        TradingState.update();
    }
};
const unlockExit = (state: Models.BreakoutTradeState) => {
    if (state.exitLocked) {
        state.exitLocked = false;
        TradingState.update();
    }
};

const onFirstMinuteClose = (symbol: string, newCandle: Models.CandlePlus, isRealtime: boolean, vwap: number) => {
};
const onSecondMinuteClose = (symbol: string, lastFewCandles: Models.CandlePlus[]) => {
    let candle0 = lastFewCandles[0];
    let candle1 = lastFewCandles[1];
    // second minute close, check for triangle consolidation
    if (candle0.high >= candle1.high && candle0.low <= candle1.low) {
        Firestore.logDebug("onSecondMinuteClose: triangle consolidation for " + symbol);
    }
    checkBreakoutAfterCandleClose(symbol, candle0, candle1);
};

const onThirdMinuteClose = (symbol: string, lastFewCandles: Models.CandlePlus[]) => {
    let candle0 = lastFewCandles[0];
    let candle1 = lastFewCandles[1];
    let candle2 = lastFewCandles[2];
    // third minute close, check for triangle consolidation
    if (candle0.high >= candle1.high && candle0.low <= candle1.low) {
        Firestore.logDebug("onSecondMinuteClose: triangle consolidation for " + symbol);
    }
    //checkBreakoutAfterCandleClose(symbol, candle0, candle2);
};

const checkBreakoutAfterCandleClose = (symbol: string, openCandle: Models.CandlePlus, closedCandle: Models.CandlePlus) => {
    let bias = Watchlist.getInitialBias(symbol);
    // if long bias, check for false breakdown open range low
    if (bias > 0) {
        checkFalseBreakdown(symbol, openCandle.low, closedCandle);
    } else if (bias < 0) {
        checkFalseBreakout(symbol, openCandle.high, closedCandle);
    } else {
        // if no bias, check both sides
        checkFalseBreakdown(symbol, openCandle.low, closedCandle);
        checkFalseBreakout(symbol, openCandle.high, closedCandle);
    }

};
const checkFalseBreakdown = (symbol: string, breakdownLevel: number, candle: Models.CandlePlus) => {
    if (candle.low < breakdownLevel && candle.close > breakdownLevel) {
        Firestore.logInfo('draw false breakdown marker for ' + symbol);
        notifyEntrySignal(symbol, true);
        Chart.addMarker(symbol, {
            time: candle.time,
            position: 'belowBar',
            color: 'green',
            shape: 'arrowUp',
            text: 'false breakdown'
        });
    }
};

const checkFalseBreakout = (symbol: string, breakoutLevel: number, candle: Models.CandlePlus) => {
    if (candle.high > breakoutLevel && candle.close < breakoutLevel) {
        Firestore.logInfo('draw false breakout marker for ' + symbol);
        notifyEntrySignal(symbol, false);
        Chart.addMarker(symbol, {
            time: candle.time,
            position: 'aboveBar',
            color: 'red',
            shape: 'arrowDown',
            text: 'false breakout'
        });
    }
};

export const scheduleEvents = () => {
    let now = new Date();
    scheduleMarketOpenEvent(now);
    scheduleFirstMinuteCloseEvent(now);
    setTimeout(() => {
        onlyShowTopPickChart();
    }, 5 * 1000);
    //scheduleChartReview();
};

const onlyShowTopPickChart = () => {
    let wl = window.HybridApp.Watchlist;
    if (!wl || wl.length <= 1)
        return;

    for (let i = 1; i < wl.length; i++) {
        let symbol = wl[i].symbol;
        let hasPositions = Models.getPositionNetQuantity(symbol) != 0;
        if (hasPositions)
            continue;

        let entryOrders = Models.getEntryOrders(symbol);
        if (entryOrders.length > 0)
            continue;

        if (!Rules.isEntryAfterTopPick(symbol)) {
            Chart.hideChart(symbol);
            Firestore.logInfo(`hide ${symbol} for top pick`);
        }
    }
    return;
}

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
    marketOpenTime.setSeconds(5);

    let waitTime = marketOpenTime.getTime() - now.getTime();
    if (waitTime > 0) {
        console.log(`schedule market open event in ${waitTime / 1000}`);
        setTimeout(() => {
            onMarketOpen(null);
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
export const onMarketOpen = (symbol: string | undefined | null) => {
    let symbols: string[] = [];
    if (symbol) {
        symbols.push(symbol);
    } else {
        let watchlist: Models.WatchlistItem[] = [];
        if (window.HybridApp.Watchlist) {
            watchlist = window.HybridApp.Watchlist;
        }
        watchlist.forEach(item => {
            symbols.push(item.symbol);
        });
    }

    symbols.forEach(s => {
        if (!Rules.checkPremarketVolume(s)) {
            removeSymbolFromChartAndWatchlist(s);
        }
    });
};

const removeSymbolFromChartAndWatchlist = (symbol: string) => {
    Chart.hideChart(symbol);
    if (window.HybridApp.Watchlist && window.HybridApp.Watchlist.length > 0) {
        for (var i = 0; i < window.HybridApp.Watchlist.length; i++) {
            if (window.HybridApp.Watchlist[i].symbol === symbol) {
                window.HybridApp.Watchlist.splice(i, 1);
            }
        }
    }
};

const notifyEntrySignal = (symbol: string, isLong: boolean) => {
    Helper.playNotificationSound();
    Chart.blinkChart(symbol, isLong);
}

export let reviewChartPendingNext: any = 0;
const chartReviewIntervalInSeconds = 2;
const chartReviewMinuteStartDelayInSeconds = 5;
export const scheduleChartReview = () => {
    let watchlist = Models.getWatchlist();
    if (watchlist.length <= 1) {
        return;
    }
    if (Helper.getMinutesSinceMarketOpen(new Date()) > 120) {
        return;
    }
    let secondsToNextMinute = Helper.getSecondsToNextMinute();
    let secondsToStart = 0;
    let secondsToMarketOpen = Helper.getSecondsToMarketOpen(new Date());
    if (secondsToMarketOpen > 0) {
        // market not open
        secondsToStart = secondsToMarketOpen + 60 + chartReviewMinuteStartDelayInSeconds;
    } else {
        secondsToStart = secondsToNextMinute + chartReviewMinuteStartDelayInSeconds;
    }
    console.log(`start in ${secondsToStart}`);
    setTimeout(() => { startChartReviewLoop(); }, secondsToStart * 1000);
};
export const startChartReviewLoop = () => {
    console.log('start loop');
    startChartReview();
    setInterval(startChartReview, 60 * 1000);
};
export const startChartReview = () => {
    console.log('startChartReview()');
    let hasNextChart = UI.reviewChartStart();
    if (hasNextChart) {
        reviewChartPendingNext = setTimeout(() => {
            autoNextChartReview();
        }, chartReviewIntervalInSeconds * 1000);
    }
};

const autoNextChartReview = () => {
    let hasNextChart = UI.reviewNextChart();
    if (hasNextChart) {
        reviewChartPendingNext = setTimeout(() => {
            autoNextChartReview();
        }, chartReviewIntervalInSeconds * 1000);
    }
};
export const manualNextChartReview = () => {
    if (reviewChartPendingNext != 0)
        clearTimeout(reviewChartPendingNext);

    let hasNextChart = UI.reviewNextChart();
    if (hasNextChart) {
        reviewChartPendingNext = setTimeout(() => {
            autoNextChartReview();
        }, chartReviewIntervalInSeconds * 1000);
    }
};


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
    if (plan.deferTradingInSeconds && plan.deferTradingInSeconds > secondsSinceMarketOpen) {
        waitInSeconds = plan.deferTradingInSeconds - secondsSinceMarketOpen;
    } else if (secondsSinceMarketOpen < 0) {
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
        Firestore.logInfo('exit for no entry orders, nothing to udpate', logTags);
        return;
    }
    let stopLoss = Models.getEntryOrderStopLossPrice(symbol);
    if (stopLoss == 0) {
        Firestore.logInfo('exit for no entry orders stop loss, nothing to udpate', logTags);
        return;
    }
    let entryPrice = entryOrders[0].price;
    if (!entryPrice) {
        Firestore.logError('no entry price', logTags);
        return;
    }
    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(new Date());
    if (algo.expirationInSeconds > 0 && secondsSinceMarketOpen > algo.expirationInSeconds) {
        Broker.cancelEntryOrders(symbol);
        Firestore.logError('algo expired', logTags);
        return;
    }
    let symbolData = Models.getSymbolData(symbol);
    let newStopLoss = isLong ? symbolData.lowOfDay : symbolData.highOfDay;
    if ((isLong && newStopLoss < stopLoss) || (
        !isLong && newStopLoss > stopLoss)) {
        Firestore.logDebug('update entry orders', logTags);
        Broker.cancelEntryOrders(symbol);
        EntryHandler.breakoutEntryWithoutRules(
            symbol, isLong, entryPrice, newStopLoss, logTags, sizeMultipler, algo);
    }
    setTimeout(() => {
        updateAlgo(symbol, isLong, sizeMultipler, algo, logTags);
    }, 1000);
}
    
*/