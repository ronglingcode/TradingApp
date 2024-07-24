import * as Config from '../config/config';
import * as Firestore from '../firestore';
import type * as Models from '../models/models';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as MarketData from '../api/marketData';
import * as Helper from '../utils/helper';
import * as Rules from './rules';
declare let window: Models.MyWindow;

export const getFutures = () => {
    let futures = window.TradingData.StockSelection.futures as string[];
    // override to just one futures
    //futures = ['MNQ'];
    let results: string[] = [];
    futures.forEach(f => {
        let quarter = Helper.getFuturesQuarter(f);
        results.push(`${f}${quarter}`);
    });
    return results;
};

export const getWatchlistItem = (symbol: string) => {
    if (!window.HybridApp.Watchlist)
        return buildDefaultWatchlistItem(symbol);
    for (let i = 0; i < window.HybridApp.Watchlist.length; i++) {
        let item = window.HybridApp.Watchlist[i];
        if (item && item.symbol == symbol) {
            return item;
        }
    }
    return buildDefaultWatchlistItem(symbol);
};

export const createWatchlist = async () => {
    let bestStocksToTradeToday = window.HybridApp.StockSelections;
    if (Config.getProfileSettings().indexOnly) {
        bestStocksToTradeToday = window.TradingData.StockSelection['index'];
    } else if (Config.getProfileSettings().isFutures) {
        bestStocksToTradeToday = getFutures();
    }

    let watchlist: Models.WatchlistItem[] = [];
    for (let i = 0; i < bestStocksToTradeToday.length; i++) {
        let symbol = bestStocksToTradeToday[i];
        let watchlistItem = buildDefaultWatchlistItem(symbol);

        let skipMessage = `skip ${symbol} because `;

        let tradingPlans = TradingPlans.getTradingPlansWithoutDefault(symbol);
        if (!tradingPlans) {
            Firestore.logError(`${skipMessage}missing trading plans`);
            watchlist = [];
            break;
        }
        watchlistItem.marketCapInMillions = tradingPlans.marketCapInMillions;

        if (!verifyTradingPlans(symbol, tradingPlans)) {
            Firestore.logError(`invalid trading plans`);
            watchlist = [];
            break;
        }
        let keyLevels = tradingPlans.keyLevels
        if (keyLevels.momentumStartForLong == 0 || keyLevels.momentumStartForShort == 0) {
            Firestore.logError(`${symbol} must define momentum start range to avoid trading in a choppy range`);
            watchlist = [];
            break;
        }

        if (!finishedStockAnalysis(symbol, tradingPlans.analysis)) {
            Firestore.logError(`must finish all analysis for ${symbol}`);
            watchlist = [];
            break;
        }

        // used to check market cap here

        let invalidReason = TradingPlans.validateTradingPlans(symbol, tradingPlans);
        if (invalidReason != "") {
            Firestore.logError(`${skipMessage}${invalidReason}`);
            continue;
        }

        // only pick the best stocks, stocks with biggest news to trade
        // be selective
        if (Config.getProfileSettings().isEquity) {
            let vwapCorrection = TradingPlans.getVwapCorrection(symbol);
            if (vwapCorrection.volumeSum == 0 || vwapCorrection.tradingSum == 0) {
                //Firestore.logError(`${skipMessage}missing vwap correction.`);
                //continue;
            }

        }

        watchlist.push(watchlistItem);
    }
    if (Config.getProfileSettings().isEquity && watchlist.length > Config.Settings.maxStocksCount) {
        alert("Too many stocks to trade, see reasoning in https://sunrisetrading.atlassian.net/browse/TPS-161");
        watchlist = watchlist.slice(0, Config.Settings.maxStocksCount);
    }

    let errorMessage = checkStockSelection(watchlist);
    if (errorMessage != "OK") {
        alert("failed stock selection check, defaulting to first stock");
        watchlist = watchlist.slice(0, 1);
    }

    window.HybridApp.Watchlist = watchlist;
    return watchlist;
};

const buildDefaultWatchlistItem = (symbol: string) => {
    let item: Models.WatchlistItem = {
        symbol: symbol,
        marketCapInMillions: 0,
    }
    return item;
};

export const finishedStockAnalysis = (symbol: string, analysis: TradingPlansModels.Analysis) => {
    let errorMsg = `${symbol} missing `;
    if (analysis.newsQualityAndFreshness < 0) {
        Firestore.logError(`${errorMsg} newsQualityAndFreshness`);
        return false;
    }
    if (analysis.newsQualityAndFreshness < 0) {
        Firestore.logError(`${errorMsg} newsQualityAndFreshness`);
        return false;
    }
    if (analysis.dailyChartStory < 0) {
        Firestore.logError(`${errorMsg} dailyChartStory`);
        return false;
    }
    if (analysis.relativeVolumeAndCandleSmoothness < 0) {
        Firestore.logError(`${errorMsg} relativeVolumeAndCandleSmoothness`);
        return false;
    }
    if (analysis.cleanVwapTrend < 0) {
        Firestore.logError(`${errorMsg} cleanVwapTrend`);
        return false;
    }
    if (analysis.gapType == TradingPlansModels.GapType.Unknown) {
        Firestore.logError(`${errorMsg} gap type`);
        return false;
    }
    if (analysis.gapSize == 0) {
        Firestore.logError(`${errorMsg} gap size`);
        return false;
    }
    if (analysis.weeklychart.length == 0) {
        Firestore.logError(`${errorMsg} weekly chart`);
        return false;
    }
    if (analysis.dailyChart.length == 0) {
        Firestore.logError(`${errorMsg} dailyChart chart`);
        return false;
    }
    if (analysis.hourlyChart.length == 0) {
        Firestore.logError(`${errorMsg} hourlyChart chart`);
        return false;
    }
    if (analysis.premarketChart.length == 0) {
        Firestore.logError(`${errorMsg} premarket chart`);
        return false;
    }
    if (analysis.keyLevels.length == 0) {
        Firestore.logError(`${errorMsg} keyLevels`);
        return false;
    }

    return true;
}


export const isTopPick = (symbol: string) => {
    if (Helper.isFutures(symbol))
        return true;

    let wl = window.HybridApp.Watchlist;
    if (!wl || wl.length < 1) {
        return false;
    }
    if (wl.length == 1)
        return true;
    if (symbol == wl[0].symbol)
        return true;

    let index = ['SPY', 'QQQ'];
    if (index.includes(symbol) &&
        index.includes(wl[0].symbol) &&
        index.includes(wl[1].symbol)) {
        return true;
    }
    return false;
}

export const isFocusedOnBestStock = (watchlist: Models.WatchlistItem[]) => {
    if (watchlist.length == 1) {
        return true;
    }
    for (let i = 0; i < watchlist.length; i++) {
        let symbol = watchlist[i].symbol;
        if (!Helper.isFutures(symbol) && !Helper.isIndex(symbol)) {
            return false;
        }
    }
    return true;
}

// TPS-336 https://sunrisetrading.atlassian.net/browse/TPS-336
const checkStockSelection = (watchlist: Models.WatchlistItem[]) => {
    return "OK";
}

const verifyTradingPlans = (symbol: string, plan: TradingPlansModels.TradingPlans) => {
    let longPlan = plan.long;
    let shortPlan = plan.short;
    if (longPlan.imbalancePlan && shortPlan.imbalancePlan) {
        Firestore.logError(`${symbol} having imbalance plan for both directions`);
        return false;
    }
    return true;
}
