import type * as LightweightCharts from 'sunrise-tv-lightweight-charts';
import * as TradingPlans from './tradingPlans/tradingPlans';
import type * as TradingPlansModels from './tradingPlans/tradingPlansModels';
import * as Helper from '../utils/helper';
import type { Timestamp } from 'firebase/firestore';
import * as Watchlist from '../algorithms/watchlist';
import * as Firestore from '../firestore';
export interface MyWindow extends Window {
    HybridApp: {
        Algo: {
            TakeProfit: any,
            RiskManager: any,
            Watchlist: any,
        },
        Api: {
            Broker: any,
            MarketData: any,
            TdaApi: any,
            SchwabApi: any,
            AlpacaApi: any,
        },
        Config: any,
        Controllers: {
            Handler: any,
            OrderFlow: any,
        },
        Models: {
            Models: any,
            TradingState: any,
            TradingPlans: any,
        },
        UI: {
            Chart: any,
            UI: any,
        },
        UIState: UIState,
        Utils: {
            Helper: any,
            WebRequest: any,
            TimeHelper: any,
        },
        Firestore: any,
        Cache: any,
        AccountCache?: BrokerAccount,
        SymbolData?: Map<string, SymbolData>,
        ChartWidgets: Map<string, ChartWidget>,
        Watchlist?: WatchlistItem[],
        TradingPlans: TradingPlansModels.TradingPlans[],
        StockSelections: string[],
        TradingData: TradingData,
        tosAccountCache: any,
        tsAccountCache: any,
        Secrets: {
            tdameritrade: {
                accessToken: string,
            },
            tradeStation: {
                accessToken: string,
            },
            schwab: {
                accessToken: string,
            }
        },
        ChartData: any,
        SymbolsList: string[],
    },
    TradingApp: any,
    TradingData: any,
};

declare let window: MyWindow;

export interface TradingData {
    activeProfileName: string,
    tradingSettings: TradingPlansModels.TradingSettings,
}
export interface UIState {
    activeSymbol: string,
    activeTabIndex: number,
};
export interface TradingState {
    date: string,
    initialBalance: number,
    stateBySymbol: Map<string, SymbolState>,
    readOnlyStateBySymbol: Map<string, ReadOnlySymbolState>,
};
export interface ReadOnlySymbolState {
    atr: TradingPlansModels.AverageTrueRange,
}
export interface SymbolState {
    openPrice?: number,
    pendingOrderTimeoutID?: NodeJS.Timeout,
    breakoutTradeStateForLong: BreakoutTradeState,
    breakoutTradeStateForShort: BreakoutTradeState,
    activeBasePlan?: TradingPlansModels.BasePlan,
    peakRiskMultiple: number,
};
export enum TwoCandlesPattern {
    UpTrend = 'UpTrend',
    StrongUpTrend = 'StrongUpTrend',
    DownTrend = 'DownTrend',
    StrongDownTrend = 'StrongDownTrend',
    InsideBar = 'InsideBar',
    LongEngulfing = 'LongEngulfing',
    ShortEngulfing = 'ShortEngulfing',
};
export enum BreakoutTradeStatus {
    None = 'None',
    Pending = 'Pending',
    Triggered = 'Triggered',
    FirstLeg = '1st leg',
    FirstRetracement = '1st pullback',
    SecondLeg = '2nd leg',
    SecondRetracement = '2nd pullback',
};
export interface BreakoutTradeState {
    hasValue: boolean,
    entryPrice: number,
    stopLossPrice: number,
    initialQuantity: number,
    sizeMultipler: number,
    submitTime: Timestamp,
    isLong: boolean,
    status: BreakoutTradeStatus,
    isMarketOrder: boolean,
    lowestExitBatchCount: number,
    submitEntryResult: SubmitEntryResult,
    plan: TradingPlansModels.BasePlan,
    maxPullbackAllowed: number,
    maxPullbackReached: number,
};
export interface StreamingAccountActivity {
    symbol: string,
    messageType: string,
    messageData: string,
};
export interface LogTags {
    symbol?: string,
    logSessionName?: string,
};

export interface ChartWidget {
    tabIndex: number,
    isDark: boolean,
    stock: WatchlistItem,
    htmlContents: ChartWidgetHtmlContents,
    chart: LightweightCharts.IChartApi,
    keyAreaSeriesList: LightweightCharts.ISeriesApi<"Candlestick">[],
    //orbSeries: LightweightCharts.ISeriesApi<"Candlestick">,
    //volumeSeries: LightweightCharts.ISeriesApi<"Histogram">,
    candleSeries: LightweightCharts.ISeriesApi<"Candlestick">,
    vwapSeries: LightweightCharts.ISeriesApi<"Line">,
    premktHigh?: LightweightCharts.ISeriesApi<"Line">,
    premktLow?: LightweightCharts.ISeriesApi<"Line">,
    openRangeSeriesList: LightweightCharts.ISeriesApi<"Line">[],
    markers: LightweightCharts.SeriesMarker<LightweightCharts.UTCTimestamp>[],
    tradeMarkers: LightweightCharts.SeriesMarker<LightweightCharts.UTCTimestamp>[],
    liveRMarker?: LightweightCharts.SeriesMarker<LightweightCharts.UTCTimestamp>,
    entryPriceLine?: LightweightCharts.IPriceLine,
    stopLossPriceLine?: LightweightCharts.IPriceLine,
    entryOrders: OrderModel[],
    entryOrdersPriceLines: LightweightCharts.IPriceLine[],
    exitOrderPairs: ExitPair[],
    exitOrdersPriceLines: LightweightCharts.IPriceLine[],
    crosshairPrice: number,
    firstTriangleConsolidationUpper?: LightweightCharts.ISeriesApi<"Line">,
    firstTriangleConsolidationLower?: LightweightCharts.ISeriesApi<"Line">,
    higherLowSeries?: LightweightCharts.ISeriesApi<"Line">,
    lowerHighSeries?: LightweightCharts.ISeriesApi<"Line">,
    profitRatios: LightweightCharts.IPriceLine[],
    minTarget?: LightweightCharts.IPriceLine,
    atrLimitForReload?: LightweightCharts.IPriceLine,
    initialQuantity: number,
    initialStopPrice: number,
    initialCost: number,
    filledPriceLine?: LightweightCharts.IPriceLine,
};
export interface SymbolFundamental {
    symbol: string,
    marketCap: number,
    marketCapFloat: number,
};
export interface ChartWidgetHtmlContents {
    container: HTMLElement, // chartContainer
    chart: HTMLElement, // document.getElementById("chart" + tabIndex),
    symbol: HTMLElement, // document.getElementById("symbol" + tabIndex),
    positionCount: Element,
    exitOrders: HTMLElement,
    currentCandle: CurentCandleElements,
    quantityElements: QuantityElements,
    algos: AlgoElements,
    tradingPlans: AlgoElements,
};
export interface AlgoElements {
    long: HTMLElement,
    short: HTMLElement,
}
export interface QuantityElements {
    input: HTMLInputElement,
    percentageButton: HTMLElement,
    fixedQuantityButton: HTMLElement,
};
export interface CurentCandleElements {
    open: HTMLElement,
    high: HTMLElement,
    low: HTMLElement,
    close: HTMLElement,
}

export interface WatchlistItem {
    symbol: string,
    marketCapInMillions: number,
};
export interface WatchlistItemPriceTargets {
    price: number,
    percentage: number,
};
export interface SymbolData {
    candles: CandlePlus[],
    premarketDollarTraded: number,
    previousDayPremarketDollarTraded: number,
    openRange?: OpenRange,
    OpenRangeLineSeriesData: OpenRangeLineSeriesData,
    keyAreaData: KeyAreaData[]
    highOfDay: number,
    lowOfDay: number,
    premktHigh: number,
    premktLow: number,
    premktAboveVwapCount: number,
    premktBelowVwapCount: number,
    bid: number,
    ask: number,
    vwap: LineSeriesData[],
    volumes: LineSeriesData[],
    totalVolume: number,
    totalTradingAmount: number,
};

export interface KeyAreaData {
    candles: SimpleCandle[],
}

export const getCurrentRange = (symbol: string, isLong: boolean) => {
    let startPrice = isLong ? getLowestPrice(symbol, false) : getHighestPrice(symbol, false);
    let currentPrice = getCurrentPrice(symbol);
    let range = Math.abs(startPrice - currentPrice);
    return Math.round(range * 100) / 100;
};
export const getHighestPrice = (symbol: string, includePremarket: boolean) => {
    let symbolData = getSymbolData(symbol);
    if (includePremarket) {
        let high = symbolData.premktHigh;
        if (symbolData.highOfDay && symbolData.highOfDay > high)
            high = symbolData.highOfDay;
        return high;
    } else {
        return symbolData.highOfDay;
    }
};

export const getLowestPrice = (symbol: string, includePremarket: boolean) => {
    let symbolData = getSymbolData(symbol);
    if (includePremarket) {
        let low = symbolData.premktLow;
        if (symbolData.lowOfDay && symbolData.lowOfDay < low)
            low = symbolData.lowOfDay;
        return low;
    } else {
        return symbolData.lowOfDay;
    }
};
export interface LineSeriesData {
    time: LightweightCharts.UTCTimestamp,
    value: number,
}
export interface OpenRange extends CandlePlus {
    high3R: number,
    high2R: number,
    high1R: number,
    low1R: number,
    low2R: number,
    low3R: number,
};
export interface OpenRangeLineSeriesData {
    openHigh3R: LineSeriesData[],
    openHigh2R: LineSeriesData[],
    openHigh1R: LineSeriesData[],
    openHigh: LineSeriesData[],
    openPrice: LineSeriesData[],
    openLow: LineSeriesData[],
    openLow1R: LineSeriesData[],
    openLow2R: LineSeriesData[],
    openLow3R: LineSeriesData[],
    orbArea: SimpleCandle[],
}
export enum OrderType {
    LIMIT = "LIMIT",
    STOP = "STOP",
    MARKET = "MARKET",
};

export interface OrderModel {
    symbol: string,
    orderID: string,
    orderType: OrderType,
    price?: number, // stopPrice or limitPrice depends on order type
    quantity: number,
    isBuy: boolean,
    positionEffectIsOpen: boolean,
    rawOrder?: any,
};
export interface EntryOrderModel extends OrderModel {
    exitLimitPrice?: number,
    exitStopPrice?: number,
}
export interface SimpleCandle {
    time: LightweightCharts.UTCTimestamp, // UTC in seconds
    open: number,
    close: number,
    high: number,
    low: number,
};
export interface Candle extends SimpleCandle {
    symbol: string,
    volume: number,
    datetime: number, // like 1667386800000
    vwap: number,
};
export interface CandlePlus extends Candle {
    minutesSinceMarketOpen: number,
    firstTradeTime: number,
};
export const buildCandlePlus = (symbol: string, element: Candle,
    time: LightweightCharts.UTCTimestamp, minutesSinceMarketOpen: number) => {
    let newCandle: CandlePlus = {
        symbol: symbol,
        time: time,
        open: element.open,
        high: element.high,
        low: element.low,
        close: element.close,
        volume: element.volume,
        minutesSinceMarketOpen: minutesSinceMarketOpen,
        firstTradeTime: element.datetime,
        datetime: element.datetime,
        vwap: element.vwap,
    };
    return newCandle;
};
export interface Quote {
    symbol: string,
    bidPrice?: number,
    askPrice?: number,
};

export interface TimeSale {
    symbol: string,
    tradeTime?: number,
    lastPrice?: number,
    lastSize?: number,
    lastSequence?: number,
    seq?: number,
    receivedTime: Date,
};

export interface BrokerAccount {
    // fields set by individual API
    orderExecutions: Map<string, OrderExecution[]>,
    entryOrders: Map<string, EntryOrderModel[]>,
    exitPairs: Map<string, ExitPair[]>,
    positions: Map<string, Position>,
    rawAccount?: any,
    currentBalance: number,
    // fields set by common Broker
    trades: Map<string, TradeExecution[]>,
    tradesCount: number,
    nonBreakevenTradesCount: number,
    realizedPnL: number,
};

export interface ExitPair {
    symbol: string,
    STOP?: OrderModel,
    LIMIT?: OrderModel,
    source: string,
    parentOrderID: string,
};

export interface Position {
    symbol: string,
    averagePrice: number,
    // return 0 if no position
    // return +x if long position
    // return -x if short position
    netQuantity: number,
};

export interface OrderExecution {
    symbol: string,
    price: number,
    /**
     * filled time
     */
    time: Date, // filled time
    tradingViewTime: LightweightCharts.UTCTimestamp, // one minute bucket time
    quantity: number,
    isBuy: boolean,
    positionEffectIsOpen: boolean,
    roundedPrice: number,
    minutesSinceOpen: number,
};
export interface TradeExecution {
    symbol: string,
    entries: OrderExecution[],
    exits: OrderExecution[],
    realizedPnL: number,
    isLong: boolean,
    isClosed: boolean,
};

/* #region Exit Orders */
export const getExitPairs = (symbol: string): ExitPair[] => {
    let accountCache = window.HybridApp.AccountCache;
    if (!accountCache)
        return [];
    return accountCache.exitPairs.get(symbol) ?? [];
};
export const getAllLimitExits = (symbol: string) => {
    let exitPairs = getExitPairs(symbol);
    let limitOrders: OrderModel[] = [];
    exitPairs.forEach(pair => {
        if (pair.LIMIT)
            limitOrders.push(pair.LIMIT);
    });
    return limitOrders;
}

export const getFarthestStopOrderPrice = (symbol: string) => {
    if (!window.HybridApp.AccountCache) {
        return 0;
    }
    let exitOrderPairs = window.HybridApp.AccountCache.exitPairs.get(symbol) ?? [];
    let stopOrdersPrices: number[] = [];
    exitOrderPairs.forEach(pair => {
        if (pair.STOP && pair.STOP.price) {
            stopOrdersPrices.push(pair.STOP.price);
        }
    });
    if (stopOrdersPrices.length <= 0)
        return 0;

    let isLong = getPositionNetQuantity(symbol) > 0;
    let price = stopOrdersPrices[0];
    for (let i = 1; i < stopOrdersPrices.length; i++) {
        let nextPrice = stopOrdersPrices[i];
        if (isLong && nextPrice < price) {
            price = nextPrice;
        } else if (!isLong && nextPrice > price) {
            price = nextPrice;
        }
    }
    return price;
};

export const getExitOrderIds = (symbol: string, accountCache: BrokerAccount | undefined) => {
    let orderIds: string[] = [];
    let exitPairs = getExitPairs(symbol);
    exitPairs.forEach(element => {
        if (element.LIMIT) {
            orderIds.push(element.LIMIT.orderID);
        }
        if (element.STOP) {
            orderIds.push(element.STOP.orderID);
        }
    });
    return orderIds;
};
/* #endregion Exit Orders */
export const getEntryOrders = (symbol: string) => {
    if (!window.HybridApp.AccountCache) {
        return [];
    }
    let map = window.HybridApp.AccountCache.entryOrders;
    let entryOrders = map.get(symbol);
    if (entryOrders) {
        return entryOrders;
    } else {
        return [];
    }
}
export const getBreakoutEntryOrders = (symbol: string, isLong: boolean) => {
    let entryOrders = getEntryOrders(symbol);
    let result: EntryOrderModel[] = [];
    entryOrders.forEach(o => {
        if (o.isBuy == isLong) {
            result.push(o);
        }
    });
    return result;
}
export const hasEntryOrdersInSameDirection = (symbol: string, isLong: boolean) => {
    let entries = getEntryOrders(symbol);
    for (let i = 0; i < entries.length; i++) {
        let e = entries[i];
        if (e.isBuy == isLong) {
            return true;
        }
    }
    return false;
}
export const getBreakoutEntryOrderIds = (symbol: string, accountCache: BrokerAccount | undefined) => {
    let orderIds: string[] = [];
    if (!accountCache)
        return orderIds;

    let entryOrders = accountCache.entryOrders.get(symbol) ?? [];
    entryOrders.forEach(element => {
        if (element.orderType == OrderType.STOP) {
            orderIds.push(element.orderID);
        }
    });
    return orderIds;
};
export const getEntryOrderStopLossPrice = (symbol: string) => {
    let orders = getEntryOrders(symbol);
    if (orders.length == 0) {
        return 0;
    }
    let entryOrder = orders[0];
    if (!entryOrder.exitStopPrice) {
        return 0;
    }
    return entryOrder.exitStopPrice;
}
export const getRealizedProfitLossPerDirection = (symbol: string, isLong: boolean) => {
    let accountCache = window.HybridApp.AccountCache;
    if (!accountCache || !accountCache.trades)
        return 0;
    let trades = accountCache.trades.get(symbol);
    if (!trades)
        return 0;
    let profitLoss = 0;
    trades.forEach(trade => {
        if (trade.isLong == isLong) {
            profitLoss += trade.realizedPnL;
        }
    });
    return profitLoss;
}
export const getRealizedProfitLossForSymbol = (symbol: string) => {
    let accountCache = window.HybridApp.AccountCache;
    if (!accountCache || !accountCache.trades)
        return 0;
    let trades = accountCache.trades.get(symbol);
    if (!trades)
        return 0;
    let profitLoss = 0;
    trades.forEach(trade => {
        profitLoss += trade.realizedPnL;
    });
    return profitLoss;
}

export const getProfitLossFromClosedTrades = (symbol: string) => {
    let accountCache = window.HybridApp.AccountCache;
    if (!accountCache || !accountCache.trades)
        return 0;
    let trades = accountCache.trades.get(symbol);
    if (!trades)
        return 0;
    let profitLoss = 0;
    trades.forEach(trade => {
        if (trade.isClosed) {
            profitLoss += trade.realizedPnL;
        }
    });
    return profitLoss;
}

export const getNetWinningTradesCountPerDirection = (symbol: string, isLong: boolean) => {
    let accountCache = window.HybridApp.AccountCache;
    if (!accountCache || !accountCache.trades)
        return 0;
    let trades = accountCache.trades.get(symbol);
    if (!trades)
        return 0;
    let netWinCount = 0;
    trades.forEach(trade => {
        if (trade.isLong == isLong) {
            if (trade.realizedPnL > 0) {
                netWinCount++;
            } else if (trade.realizedPnL < 0) {
                netWinCount--;
            }
        }
    });
    return netWinCount;
}
export const getAllOrderExecutions = (symbol: string | undefined) => {
    let accountCache = window.HybridApp.AccountCache;
    if (!accountCache)
        return [];
    let orders = accountCache.orderExecutions;
    let results: OrderExecution[] = []
    if (symbol) {
        let o = orders.get(symbol);
        if (o) {
            results.push(...o);
        }
    } else {
        orders.forEach((value: OrderExecution[], key: string) => {
            results.push(...value);
        });
    }
    return results;
};
export const getTradeExecutions = (symbol: string) => {
    let accountCache = window.HybridApp.AccountCache;
    if (!accountCache)
        return [];
    let trades = accountCache.trades.get(symbol);
    if (trades) {
        return trades;
    } else {
        return [];
    }
};

export const getCurrentOpenTrade = (symbol: string) => {
    let trades = getTradeExecutions(symbol);
    for (let i = 0; i < trades.length; i++) {
        if (!trades[i].isClosed) {
            return trades[i];
        }
    }
    return null;
}

/**
 * Get the quantity of last exit order
 */
export const getLastExitSize = (symbol: string) => {
    let trades = getTradeExecutions(symbol);
    if (trades.length == 0) {
        return 0;
    }
    let i = trades.length - 1;
    while (i >= 0) {
        let trade = trades[i];
        let l = trade.exits.length;
        if (l > 0) {
            return trade.exits[l - 1].quantity;
        }
        i--;
    };
    return 0;
}

export const getInitialFilledPrice = (symbol: string) => {
    let trades = getTradeExecutions(symbol);
    if (!trades || trades.length == 0)
        return 0;
    let trade = trades[trades.length - 1];
    let entry = trade.entries[0];
    return entry.price;
};

export const getFirstEntryTimeFromNowInSeconds = (symbol: string) => {
    let trades = getTradeExecutions(symbol);

    let firstTradeTime = null;
    for (let i = 0; i < trades.length; i++) {
        let entries = trades[i].entries;
        if (!entries || entries.length == 0)
            continue;
        for (let j = 0; j < entries.length; j++) {
            let entry = entries[j];
            if (firstTradeTime == null || firstTradeTime > entry.time) {
                firstTradeTime = entry.time;
            }
        }
    }
    if (firstTradeTime == null) {
        return -1;
    }
    let now = new Date();
    let seconds = (now.getTime() - firstTradeTime.getTime()) / 1000;
    console.log(`${symbol} first entry ${seconds} seconds ago`);
    return seconds;
};

export const getLastEntryTime = (symbol: string) => {
    let trades = getTradeExecutions(symbol);
    if (trades.length == 0)
        return null;

    let lastTrade = trades[trades.length - 1];
    let entries = lastTrade.entries;
    if (entries.length == 0)
        return null;

    let tradeTime = entries[0].time;
    for (let j = 1; j < entries.length; j++) {
        let entry = entries[j];
        if (tradeTime > entry.time) {
            tradeTime = entry.time;
        }
    }
    return tradeTime;
};

export const getLastEntryTimeFromNowInSeconds = (symbol: string) => {
    let tradeTime = getLastEntryTime(symbol);
    if (!tradeTime)
        return -1;

    let now = new Date();
    let seconds = (now.getTime() - tradeTime.getTime()) / 1000;
    console.log(`${symbol} first entry ${seconds} seconds ago`);
    return seconds;
};

export const getAveragePrice = (symbol: string) => {
    let cache = window.HybridApp.AccountCache;
    if (!cache)
        return 0;
    let position = cache.positions.get(symbol);
    if (!position)
        return 0;
    return Helper.roundPrice(symbol, position.averagePrice);
};
export const getPosition = (symbol: string) => {
    let cache = window.HybridApp.AccountCache;
    if (!cache)
        return undefined;
    return cache.positions.get(symbol);
};

export const getBrokerAccount = () => {
    return window.HybridApp.AccountCache;
}
export const getPositionSymbols = () => {
    let cache = window.HybridApp.AccountCache;
    let result: string[] = [];
    if (!cache)
        return result;
    cache.positions.forEach((value: Position, key: string) => {
        result.push(key);
    })
    return result;
}
/**
 * @returns negative quantity if short
 */
export const getPositionNetQuantity = (symbol: string) => {
    let p = getPosition(symbol);
    if (p)
        return p.netQuantity;
    else
        return 0;
};

export const getRealizedProfitLoss = () => {
    if (window.HybridApp.AccountCache)
        return window.HybridApp.AccountCache.realizedPnL;
    return 0;
};

export const getDefaultSymbolData = () => {
    let result: SymbolData = {
        candles: [],
        keyAreaData: [],
        premarketDollarTraded: 0,
        previousDayPremarketDollarTraded: 0,
        highOfDay: 0,
        lowOfDay: 99999999,
        premktHigh: 0,
        premktLow: 99999999,
        premktAboveVwapCount: 0,
        premktBelowVwapCount: 0,
        vwap: [],
        volumes: [],
        bid: 0,
        ask: 0,
        OpenRangeLineSeriesData: getEmptyOpenRangeLineSeriesData(),
        totalVolume: 0,
        totalTradingAmount: 0,
    };
    return result;
};
export const getEmptyOpenRangeLineSeriesData = () => {
    let data: OpenRangeLineSeriesData = {
        openHigh3R: [],
        openHigh2R: [],
        openHigh1R: [],
        openHigh: [],
        openPrice: [],
        openLow: [],
        openLow1R: [],
        openLow2R: [],
        openLow3R: [],
        orbArea: [],
    };
    return data;
};

export const getSymbolData = (symbol: string) => {
    if (!window.HybridApp.SymbolData) {
        window.HybridApp.SymbolData = new Map<string, SymbolData>();
    }
    let mapValue = window.HybridApp.SymbolData.get(symbol);
    if (!mapValue) {
        let newValue = getDefaultSymbolData();
        window.HybridApp.SymbolData.set(symbol, newValue);
        return newValue;
    } else {
        return mapValue;
    }
};

export const getHighLowBreakoutEntryStopPrice = (symbol: string, isLong: boolean) => {
    let symbolData = getSymbolData(symbol);
    let entryPrice = isLong ? symbolData.highOfDay : symbolData.lowOfDay;
    let stopOutPrice = isLong ? symbolData.lowOfDay : symbolData.highOfDay;
    if (isLong) {
        let ask = symbolData.ask;
        if (ask > entryPrice) {
            entryPrice = ask;
        }
    } else {
        let bid = symbolData.bid;
        if (bid < entryPrice) {
            entryPrice = bid;
        }
    }
    return {
        entryPrice: entryPrice,
        stopOutPrice: stopOutPrice,
    }
}

export const getCurrentVwap = (symbol: string) => {
    let symbolData = getSymbolData(symbol);
    let vwap = symbolData.vwap;
    let currentVwap = vwap[vwap.length - 1].value;
    return currentVwap;
};
export const getOpenPrice = (symbol: string) => {
    let symbolData = getSymbolData(symbol);
    if (symbolData.openRange) {
        return symbolData.openRange.open;
    } else {
        return undefined;
    }
};
export const getPreviousCandle = (symbol: string, currentCandle: SimpleCandle) => {
    let candles = getSymbolData(symbol).candles;
    let start = 0;
    while (start + 1 < candles.length) {
        if (candles[start + 1].time >= currentCandle.time) {
            return candles[start];
        } else {
            start++;
        }
    }
    return candles[start];
};
export const getCandlesSinceOpen = (symbol: string) => {
    let time = Helper.getMarketOpenTime();
    let tvTime = Helper.jsDateToTradingViewUTC(time);
    return getCandleSinceTime(symbol, tvTime);
}
export const aggregateCandles = (candles: Candle[], timeframe: number) => {
    let results: Candle[] = [];
    let merged: Candle = {
        ...candles[0]
    };
    let i = 1;
    while (i < candles.length) {
        let current = candles[i];
        if (i % timeframe == 0) {
            merged = {
                ...current,
            };
        } else {
            merged.high = Math.max(merged.high, current.high);
            merged.low = Math.min(merged.low, current.low);
        }
        if (i % timeframe == (timeframe - 1)) {
            merged.close = current.close;
            results.push(merged);
        }
        i++;
    }
    return results;
}
export const getVolumesSinceOpen = (symbol: string) => {
    let time = Helper.getMarketOpenTime();
    let tvTime = Helper.jsDateToTradingViewUTC(time);
    let symbolData = getSymbolData(symbol);
    let results: LineSeriesData[] = [];
    for (let i = 0; i < symbolData.volumes.length; i++) {
        const candle = symbolData.volumes[i];
        if (candle.time >= tvTime) {
            results.push(candle);
        }
    }
    return results;
}
export const getVwapsSinceOpen = (symbol: string) => {
    let time = Helper.getMarketOpenTime();
    let tvTime = Helper.jsDateToTradingViewUTC(time);
    let symbolData = getSymbolData(symbol);
    let results: LineSeriesData[] = [];
    for (let i = 0; i < symbolData.vwap.length; i++) {
        const candle = symbolData.vwap[i];
        if (candle.time >= tvTime) {
            results.push(candle);
        }
    }
    return results;
}
export const getCandleSinceTime = (symbol: string, time: LightweightCharts.UTCTimestamp) => {
    let symbolData = getSymbolData(symbol);
    let results: CandlePlus[] = [];
    for (let i = 0; i < symbolData.candles.length; i++) {
        const candle = symbolData.candles[i];
        if (candle.time >= time) {
            results.push(candle);
        }
    }
    return results;
}
export const getCandlesSince = (symbol: string, startCandle: Candle, max: number) => {
    let symbolData = getSymbolData(symbol);
    let results: CandlePlus[] = [];
    for (let i = 0; i < symbolData.candles.length; i++) {
        const candle = symbolData.candles[i];
        if (candle.time > startCandle.time) {
            results.push(candle);
        }
        if (results.length >= max) {
            break;
        }
    }
    return results;
};

export const setChartWidget = (symbol: string, widget: ChartWidget) => {
    if (!window.HybridApp.ChartWidgets) {
        window.HybridApp.ChartWidgets = new Map<string, ChartWidget>();
    }
    window.HybridApp.ChartWidgets.set(symbol, widget);
};

export const getChartWidget = (symbol: string) => {
    return window.HybridApp.ChartWidgets.get(symbol);
};
export const getExitOrdersPairs = (symbol: string) => {
    let widget = getChartWidget(symbol);
    if (!widget)
        return [];
    return widget.exitOrderPairs;
};
export const getWatchlist = () => {
    if (!window.HybridApp.Watchlist)
        return [];
    return window.HybridApp.Watchlist;
};
export const getCurrentPrice = (symbol: string) => {
    let lastCandle = getCurrentCandle(symbol);
    if (!lastCandle) {
        return 0;
    }
    let currentPrice = lastCandle.close;
    return currentPrice;
};

export const getCurrentCandle = (symbol: string) => {
    let symbolData = getSymbolData(symbol);
    let candles = symbolData.candles;
    let lastCandle = candles[candles.length - 1];
    return lastCandle;
}

export const getUIState = () => {
    return window.HybridApp.UIState;
};

export const getCandlesTimeDifferenceInMinutes = (start: SimpleCandle, end: SimpleCandle) => {
    let diff = end.time - start.time;
    return diff / (60);
};
/**
 * @returns 0 if no fixed quantity
 */
export const getFixedQuantityFromInput = (symbol: string) => {
    let widget = getChartWidget(symbol);
    if (!widget)
        return 0;
    let input = widget.htmlContents.quantityElements.input;
    let text = input.value;
    let result = parseInt(text);
    if (!isNaN(result))
        return result;
    else
        return 0;
};

export const toTdaOrderTypeString = (t: OrderType) => {
    let orderType = 'MKT';
    if (t == OrderType.LIMIT)
        orderType = 'LMT';
    else if (t == OrderType.STOP)
        orderType = 'STP';
    return orderType;
};

export const setConfigData = async () => {
    let config = await TradingPlans.fetchConfigData();
    window.HybridApp.TradingPlans = config.tradingPlans;
    window.HybridApp.StockSelections = config.stockSelections;
    console.log('set active profile name ' + config.activeProfileName);
    window.HybridApp.TradingData = {
        activeProfileName: config.activeProfileName,
        tradingSettings: config.tradingSettings,
    };
    scheduleTradingPlansRefreshBeforeMarketOpen();
    return true;
}

const scheduleTradingPlansRefreshBeforeMarketOpen = () => {
    let seconds = Helper.getSecondsToMarketOpen(new Date());
    seconds = seconds - 10;// give 10 seconds before market open
    if (seconds <= 0)
        return;
    console.log(`refresh trading plan in ${seconds} seconds`);
    setTimeout(() => {
        refreshTradingPlans();
    }, seconds * 1000);
}


export const refreshTradingPlans = async () => {
    let config = await TradingPlans.fetchConfigData();
    window.HybridApp.TradingPlans = config.tradingPlans;
}

export interface KeyAreaToDraw {
    upperPrice: number,
    lowerPrice: number,
    direction: number,
}

export const getAtr = (symbol: string) => {
    let p = TradingPlans.getTradingPlans(symbol);
    return p.atr;
}
export const getTodayRange = (atr: TradingPlansModels.AverageTrueRange) => {
    return Helper.roundToCents(atr.average * atr.mutiplier);
}

export const isLongForReload = (symbol: string) => {
    let netQuantity = getPositionNetQuantity(symbol);
    if (netQuantity != 0) {
        return netQuantity > 0;
    }
    let trades = getTradeExecutions(symbol);
    if (trades.length == 0) {
        return true;
    }
    let lastTrade = trades[trades.length - 1];
    return lastTrade.entries[0].isBuy;
};

export const generateLogTags = (symbol: string, prefix: string) => {
    let logSessionName = Helper.generateLogSessionName(prefix);
    let logTags: LogTags = {
        logSessionName: logSessionName,
        symbol: symbol,
    };
    return logTags;
};

export const getDollarTradedAfterOpenInMillions = (symbol: string) => {
    let symbolData = getSymbolData(symbol);
    let dollarTraded = symbolData.totalTradingAmount - symbolData.premarketDollarTraded;
    return dollarTraded / 1000000;
}
const logIf = (message: string, debug?: boolean) => {
    if (debug) {
        Firestore.logInfo(message);
    }
}
export const getLiquidityScale = (symbol: string, debug?: boolean) => {
    let candles = getVolumesSinceOpen(symbol);
    let price = getCurrentPrice(symbol);
    if (candles.length == 0) {
        return 0;
    }
    let item = Watchlist.getWatchlistItem(symbol);
    let threshold = item.marketCapInMillions * 1000;
    let firstMinuteTraded = price * candles[0].value;
    logIf(`first minute trade ${firstMinuteTraded}`, debug);
    logIf(`candles.length = ${candles.length}`, debug);
    logIf(`threshold ${threshold}`, debug);
    if (candles.length == 1) {
        if (firstMinuteTraded > Math.min(20000000, threshold)) {
            logIf(`case 1`, debug);
            return 1;
        } else if (firstMinuteTraded > 10000000) {
            logIf(`case 2`, debug);
            return 0.35;
        } else if (firstMinuteTraded > threshold) {
            logIf(`case 3`, debug);
            return 0.35;
        } else {
            logIf(`case 4`, debug);
            return 0;
        }
    }

    let maxVolume = candles[0].value;
    for (let i = 1; i < candles.length; i++) {
        if (candles[i].value > maxVolume) {
            maxVolume = candles[i].value;
        }
    }
    logIf(`max volume: ${maxVolume}`, debug);
    let dollarTraded = price * maxVolume;
    if (dollarTraded > Math.min(20000000, threshold)) {
        logIf('after case 1', debug);
        return 1;
    } else if (dollarTraded > 10000000) {
        logIf('after case 2', debug);
        return dollarTraded / 20000000;
    } else if (dollarTraded > threshold) {
        logIf('after case 3', debug);
        return 0.35;
    } else {
        logIf('after case 4', debug);
        return 0;
    }
}
export const getQuantityDetails = (symbol: string) => {
    let exits = getExitOrdersPairs(symbol);
    let quantityWithBothLegs = 0;
    let quantityWithOneLeg = 0;
    let totalQuantity = Math.abs(getPositionNetQuantity(symbol));
    exits.forEach(pair => {
        if (pair.STOP && pair.LIMIT) {
            quantityWithBothLegs += pair.STOP.quantity;
        } else if (pair.STOP) {
            quantityWithOneLeg += pair.STOP.quantity;
        } else if (pair.LIMIT) {
            quantityWithOneLeg += pair.LIMIT.quantity;
        }
    });
    let quantityWithoutLegs = totalQuantity - quantityWithBothLegs - quantityWithOneLeg;
    return {
        totalQuantity: totalQuantity,
        quantityWithoutLegs: quantityWithoutLegs,
        quantityWithOneLeg: quantityWithOneLeg,
        quantityWithBothLegs: quantityWithBothLegs,
    };
}

export interface ProfitTarget {
    target: number,
    quantity: number,
}

export interface SubmitEntryResult {
    profitTargets: ProfitTarget[],
    totalQuantity: number,
    isSingleOrder: boolean,
}

export const getMarketCapInMillions = (symbol: string) => {
    let p = TradingPlans.getTradingPlans(symbol);
    return p.marketCapInMillions;
}