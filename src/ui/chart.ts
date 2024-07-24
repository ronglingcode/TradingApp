import * as RiskManager from '../algorithms/riskManager';
import * as VwapAlgo from '../algorithms/vwap';
import * as AutoRedToGreen from '../algorithms/autoRedToGreen';
import * as AutoRedToGreen60 from '../algorithms/autoRedToGreen60';
import * as AutoFirstBreakout from '../algorithms/autoFirstBreakout';
import * as AutoFirstNewHigh from '../algorithms/autoFirstNewHigh';
import * as Helper from '../utils/helper';
import * as Models from '../models/models';
import * as TradingState from '../models/tradingState';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as Firestore from '../firestore';
import * as Broker from '../api/broker';
import * as LightweightCharts from 'sunrise-tv-lightweight-charts';
import * as ChartSettings from '../ui/chartSettings';
import * as AutoTrader from '../algorithms/autoTrader';
import * as TakeProfit from '../algorithms/takeProfit';
import * as EntryHandler from '../controllers/entryHandler';
import { create } from 'canvas-confetti';
declare let window: Models.MyWindow;

export const setup = () => {
    let watchlist = window.HybridApp.Watchlist;
    if (!watchlist)
        return;

    for (let i = 0; i < watchlist.length; i++) {
        let symbol = watchlist[i].symbol;
        let chart = createChartWidget(i, watchlist[i], watchlist.length);
        let container = document.getElementById("chartContainer" + i);
        if (container) {
            container.style.display = 'block';
        }
        Models.setChartWidget(symbol, chart);
    }
};
export const createChartWidget = (tabIndex: number, watchlistItem: Models.WatchlistItem, totalCount: number) => {
    let symbol = watchlistItem.symbol;
    let htmlContents = getHtmlContents(symbol, tabIndex);

    let lwChart = LightweightCharts.createChart(
        htmlContents.chart,
        ChartSettings.getChartSettings(tabIndex, totalCount)
    );
    let keyAreasToDraw = TradingPlans.getKeyAreasToDraw(symbol);
    let keyAreaSeriesList: LightweightCharts.ISeriesApi<"Candlestick">[] = [];
    for (let i = 0; i < keyAreasToDraw.length; i++) {
        keyAreaSeriesList.push(lwChart.addCandlestickSeries(ChartSettings.keyAreaCandleSettings));
    }

    let myWidget: Models.ChartWidget = {
        tabIndex: tabIndex,
        isDark: true,
        stock: watchlistItem,
        htmlContents: htmlContents,
        chart: lwChart,
        //orbSeries: lwChart.addCandlestickSeries(ChartSettings.cloudAreaCandleSettings),
        //volumeSeries: lwChart.addHistogramSeries(ChartSettings.volumeSeriesSettings),
        keyAreaSeriesList: keyAreaSeriesList,
        candleSeries: lwChart.addCandlestickSeries(ChartSettings.candlestickSeriesSettings),
        vwapSeries: lwChart.addLineSeries(ChartSettings.vwapSettings),
        openRangeSeriesList: createOpenRangeSeries(lwChart),
        markers: [],
        tradeMarkers: [],
        entryOrders: [],
        entryOrdersPriceLines: [],
        exitOrderPairs: [],
        exitOrdersPriceLines: [],
        crosshairPrice: 0,
        profitRatios: [],
        initialQuantity: 0,
        initialCost: 0,
        initialStopPrice: 0,
    };

    /*
        function myClickHandler(param) {
            console.log(param)
            if (!param.point) {
                return;
            }
            let crosshairPrice = Chart.getCrossHairPrice(symbol);
            drawStopLoss(symbol, crosshairPrice);
        }
    
        widget.chart.subscribeClick(myClickHandler);
    */
    myWidget.htmlContents.chart.addEventListener('contextmenu', event => {
        event.preventDefault();
        let crosshairPrice = getCrossHairPrice(symbol);
        if (crosshairPrice) {
            drawEntry(symbol, crosshairPrice);
        }
    });
    /*
    if (Config.getProfileSettingsForSymbol(symbol).allowTighterStop) {
        myWidget.htmlContents.chart.addEventListener('dblclick', event => {
            let crosshairPrice = getCrossHairPrice(symbol);
            if (crosshairPrice)
                drawStopLoss(symbol, crosshairPrice);
        });
    }*/

    myWidget.htmlContents.container.addEventListener('mouseover', function (mouseEvent) {
        let watchlist = Models.getWatchlist();
        for (let i = 0; i < watchlist.length; i++) {
            let element = document.getElementById("chartContainer" + i);
            if (!element)
                continue;
            if (i === myWidget.tabIndex) {
                element.classList.add("active");
                window.HybridApp.UIState.activeSymbol = myWidget.stock.symbol;
                window.HybridApp.UIState.activeTabIndex = myWidget.tabIndex;
                myWidget.htmlContents.container.focus();
            } else {
                element.classList.remove("active");
            }
        }
    });
    function myCrosshairMoveHandler(param: any) {
        if (!param.point) {
            return;
        }
        let price = myWidget.candleSeries.coordinateToPrice(param.point.y);
        if (price) {
            myWidget.crosshairPrice = price;
        }
        /*
        if (param.seriesData) {
            updateToolTip(param.seriesData, myWidget);
        }*/
    }

    myWidget.chart.subscribeCrosshairMove(myCrosshairMoveHandler);
    myWidget.htmlContents.container.addEventListener("blur", function (event) {
        //console.log('blur');
        console.log(event);
    });

    return myWidget;
};
const updateToolTip = (data: any, widget: Models.ChartWidget) => {
    const [firstValue] = data.values();
    if (!firstValue)
        return;
    let c = firstValue;
    let container = widget.htmlContents.currentCandle;
    let symbol = widget.stock.symbol;
    container.open.innerText = `O: ${Helper.roundPrice(symbol, c.open)}`;
    container.high.innerText = `H: ${Helper.roundPrice(symbol, c.high)}`;
    container.low.innerText = `L: ${Helper.roundPrice(symbol, c.low)}`;
    container.close.innerText = `C: ${Helper.roundPrice(symbol, c.close)}`;
};
const getHtmlContents = (symbol: string, tabIndex: number) => {
    let container = document.getElementById("chartContainer" + tabIndex) as HTMLElement;
    let chart = document.getElementById("chart" + tabIndex) as HTMLElement;
    let currentCandleContainer = container.getElementsByClassName("currentCandle")[0] as HTMLElement;
    let quantityBarContainer = container.getElementsByClassName("quantityBar")[0] as HTMLElement;
    let algos = container.getElementsByClassName("algo");
    let tradingPlans = container.getElementsByClassName("tradingPlans")[0] as HTMLElement;
    let htmlContents: Models.ChartWidgetHtmlContents = {
        chart: chart,
        symbol: document.getElementById("symbol" + tabIndex) as HTMLElement,
        container: container,
        positionCount: container.getElementsByClassName("positionCount")[0],
        exitOrders: container.getElementsByClassName("exitOrders")[0] as HTMLElement,
        currentCandle: {
            open: currentCandleContainer.getElementsByClassName("ohlc_o")[0] as HTMLElement,
            high: currentCandleContainer.getElementsByClassName("ohlc_h")[0] as HTMLElement,
            low: currentCandleContainer.getElementsByClassName("ohlc_l")[0] as HTMLElement,
            close: currentCandleContainer.getElementsByClassName("ohlc_c")[0] as HTMLElement,
        },
        quantityElements: {
            input: quantityBarContainer.getElementsByTagName("input")[0] as HTMLInputElement,
            percentageButton: quantityBarContainer.getElementsByTagName("button")[0] as HTMLElement,
            fixedQuantityButton: quantityBarContainer.getElementsByTagName("button")[1] as HTMLElement,
        },
        algos: {
            long: algos[0] as HTMLElement,
            short: algos[1] as HTMLElement,
        },
        tradingPlans: {
            long: tradingPlans.getElementsByClassName("tradingPlansLong")[0] as HTMLElement,
            short: tradingPlans.getElementsByClassName("tradingPlansShort")[0] as HTMLElement,
        }
    };
    //widget.htmlContents.quantityBar = widget.htmlContents.container.getElementsByClassName("quantityBar")[0];
    //widget.htmlContents.quantityInput = widget.htmlContents.quantityBar.getElementsByTagName("input")[0];
    setupQuantityBar(symbol, htmlContents.quantityElements);
    setupAlgo(symbol, htmlContents.algos);
    setupTradingPlans(symbol, htmlContents.tradingPlans);
    htmlContents.symbol.innerText = symbol;
    return htmlContents;
};


const setupQuantityBar = (symbol: string, quantityElements: Models.QuantityElements) => {
    let input = quantityElements.input;
    input.addEventListener("keydown", function (e) {
        e.stopPropagation();
    });
    let p = TradingPlans.getTradingPlans(symbol);
    let buttons = [
        quantityElements.percentageButton,

    ];
    if (p.fixedQuantity) {
        buttons.push(quantityElements.fixedQuantityButton)
        buttons[1].innerText = `${p.fixedQuantity}`;
    }

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener("click", (pointerEvent) => {
            if (pointerEvent && pointerEvent.target) {
                let t = pointerEvent.target as HTMLElement;
                input.value = t.innerText;
            }
        });
    }
};

/**
 * First check any drawn stop level, 
 * then use any preset stop level passed in,
 * last use high/low of the day
 */
export const getStopLossPrice = (symbol: string, isLong: boolean, presetStopOutPrice: number | null) => {
    let p = 0;
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return 0;
    if (widget.stopLossPriceLine) {
        p = widget.stopLossPriceLine.options().price;
        if (p != 0)
            return roundStopLossPrice(symbol, isLong, p);
    }
    if (presetStopOutPrice) {
        p = presetStopOutPrice;
        return roundStopLossPrice(symbol, isLong, p);
    }

    let isFutures = Helper.isFutures(symbol);
    if (isLong) {
        p = Models.getLowestPrice(symbol, isFutures);
    } else {
        p = Models.getHighestPrice(symbol, isFutures);
    }
    return roundStopLossPrice(symbol, isLong, p);
};

const roundStopLossPrice = (symbol: string, isLong: boolean, p: number) => {
    if (isLong) {
        return Helper.roundToCentsOrOz(symbol, p, false);
    } else {
        return Helper.roundToCentsOrOz(symbol, p, true);
    }
};

export const getBreakoutEntryPrice = (symbol: string, isLong: boolean) => {
    // if entry price drawn, use entry price drawn on the chart
    // if not drawn, use high/low of the day
    let p = 0;
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return 0;
    if (widget.entryPriceLine) {
        p = widget.entryPriceLine.options().price;
    } else {
        let symbolData = Models.getSymbolData(symbol);
        if (isLong) {
            p = symbolData.highOfDay;
        } else {
            p = symbolData.lowOfDay;
        }
    }
    if (isLong) {
        return Helper.roundToCentsOrOz(symbol, p, true);
    } else {
        return Helper.roundToCentsOrOz(symbol, p, false);
    }
};

export const getMultiplier = (symbol: string) => {
    return 1;
    /*
    let qty = widget.htmlContents.quantityInput.value;
    if (!qty || !qty.endsWith("%")) {
        return 1;
    }
    let multiplier = parseFloat(qty.substring(0, qty.length - 1));
    return multiplier / 100;*/
};

export const drawOrderExecutions = (symbol: string, widget: Models.ChartWidget) => {
    if (!window.HybridApp.AccountCache)
        return;
    let trades = window.HybridApp.AccountCache.trades.get(symbol);
    if (!trades)
        return;
    let executions = flattenTrades(trades);
    widget.tradeMarkers = [];
    executions.forEach(execution => {
        let color = execution.isBuy ? '#2e7d32' : 'darkred';
        let marker: LightweightCharts.SeriesMarker<LightweightCharts.UTCTimestamp> = {
            time: execution.tradingViewTime,
            position: 'atPrice',
            color: color,
            shape: 'circle',
            text: `${execution.price}`,
            //price: 3815,
            size: 0.1,
        };
        widget.tradeMarkers.push(marker);
    });
    showMarkers(widget);
};

const showMarkers = (widget: Models.ChartWidget) => {
    let allMarkers = widget.markers.concat(widget.tradeMarkers);
    if (widget.liveRMarker) {
        allMarkers.push(widget.liveRMarker);
    }
    allMarkers.sort(function (a, b) {
        return a.time - b.time;
    });
    widget.candleSeries.setMarkers(allMarkers);
};

const flattenTrades = (trades: Models.TradeExecution[]) => {
    let executions: Models.OrderExecution[] = [];
    trades.forEach(trade => {
        executions.push(...trade.entries);
        executions.push(...trade.exits);
    });
    return executions;
};

export const createDrawingOrder = (symbol: string, order: Models.OrderModel | undefined,
    entryPrice: number, stopOutPrice: number | undefined) => {
    if (!order) {
        return null;
    }
    let price = order.price ?? 0;
    let isBuyOrder = order.isBuy;
    let color = isBuyOrder ? 'green' : 'red';
    let q = Math.abs(order.quantity);
    let isLongPosition = !isBuyOrder;
    if (!order.positionEffectIsOpen) {
        isLongPosition = !isBuyOrder;
    } else {
        isLongPosition = isBuyOrder;
    }
    let riskMultiples = getRiskMultiplesForDisplay(symbol, isLongPosition, entryPrice, stopOutPrice, q);
    return {
        'price': price,
        'color': color,
        'isBuyOrder': isBuyOrder,
        'orderType': order.orderType,
        'q': q,
        'riskMultiples': riskMultiples,
        'orderData': order
    };
};

const getRiskMultiplesForDisplay = (symbol: string, isLongPosition: boolean,
    entryPrice: number, stopOutPrice: number | undefined, quantity: number) => {
    let riskPerShare = getRiskPerShare(symbol, isLongPosition, entryPrice, stopOutPrice);
    // consider premarket positions
    let riskMultiples = RiskManager.quantityToRiskMultiples(riskPerShare, quantity);
    let display = riskMultiples * 100;
    return Math.round(display * 10) / 10
};

const getRiskPerShare = (symbol: string, isLong: boolean,
    entry: number, stopOut: number | undefined) => {
    if (stopOut) {
        return RiskManager.getRiskPerShare(symbol, entry, stopOut);
    }
    let symbolData = Models.getSymbolData(symbol);
    if (isLong) {
        return RiskManager.getRiskPerShare(symbol, entry, symbolData.lowOfDay);
    } else {
        return RiskManager.getRiskPerShare(symbol, entry, symbolData.highOfDay);
    }
}

export const updateAccountUIStatus = async (symbolList: string[]) => {
    let done = await Broker.syncAccount();
    if (done) {
        if (!symbolList || symbolList.length == 0) {
            let wl = Models.getWatchlist();
            wl.forEach(element => {
                updateAccountUIStatusForSymbol(element.symbol);
            });
            return;
        } else {
            symbolList.forEach(symbol => {
                updateAccountUIStatusForSymbol(symbol);
            });
        }
    }
};

export const updateAccountUIStatusForSymbol = (symbol: string) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget) {
        return;
    }
    let cache = window.HybridApp.AccountCache;

    let position = cache?.positions.get(symbol);
    drawFilledPrice(symbol, position, widget);
    let riskMultiple = showPositionSize(symbol, position, widget);
    drawProfitRatio(symbol, position, widget, riskMultiple);
    drawWorkingOrders(symbol, position, widget);
    drawOrderExecutions(symbol, widget);
    AutoTrader.updateAllAlgo(symbol);
};

const drawProfitRatio = (symbol: string, position: Models.Position | undefined,
    widget: Models.ChartWidget, riskMultiple: number) => {
    if (!position) {
        clearProfitRatio(widget);
        return;
    }

    let price = Models.getAveragePrice(symbol);
    let currentQuantity = Models.getPositionNetQuantity(symbol);
    currentQuantity = Math.abs(currentQuantity);
    let isLong = position.netQuantity > 0;

    // quantity increased, redraw everything
    if (currentQuantity > widget.initialQuantity) {
        clearProfitRatio(widget);
        widget.initialQuantity = currentQuantity;
        TradingState.updatePeakRisk(symbol, riskMultiple);
        widget.initialCost = price;
        widget.initialStopPrice = Models.getFarthestStopOrderPrice(symbol);

        let direction = isLong ? 1 : -1;
        let risk = Math.abs(widget.initialStopPrice - price);
        let targetRatios = [1, 2, 3];
        targetRatios.forEach(ratio => {
            let target = price + direction * risk * ratio;
            target = Helper.roundPrice(symbol, target);
            let l = createPriceLine(widget.candleSeries, target, `${ratio}R`, "black", null, false, "solid");
            widget.profitRatios.push(l);
        });
    }
    let symbolState = TradingState.getSymbolState(symbol);
    let breakoutTradeState = TradingState.getBreakoutTradeState(symbol, isLong);
    let exitPairs = Models.getExitPairs(symbol);
    let plan = TradingPlans.getTradingPlans(symbol);
    let logTags: Models.LogTags = {
        logSessionName: `draw-${symbol}`,
    };
    let exitTargets = symbolState.activeBasePlan?.targets;
    let minimumExitTargets = exitTargets?.minimumTargets;
    let minimumProfitTarget = TakeProfit.getMinimumProfitTargetForSingle(symbol,
        isLong, breakoutTradeState.entryPrice, breakoutTradeState.stopLossPrice,
        0, exitPairs.length, plan.atr, minimumExitTargets, logTags,
    );
    let oldMinTarget = 0;
    if (widget.minTarget) {
        oldMinTarget = widget.minTarget.options().price;
    }

    if (minimumProfitTarget != oldMinTarget) {
        if (widget.minTarget) {
            widget.candleSeries.removePriceLine(widget.minTarget);
        }
        widget.minTarget = createPriceLine(
            widget.candleSeries, minimumProfitTarget, `Min R`, "blue", null, false, "solid",
        );
    }
};

const clearProfitRatio = (widget: Models.ChartWidget) => {
    if (widget.profitRatios && widget.profitRatios.length > 0) {
        widget.profitRatios.forEach(l => {
            widget.candleSeries.removePriceLine(l);
        });
    }
    widget.profitRatios = [];
    widget.initialQuantity = 0;
};

const drawFilledPrice = async (symbol: string, position: Models.Position | undefined, widget: Models.ChartWidget) => {
    if (!position) {
        clearFilledPrice(widget);
        return;
    }

    let newPrice = position.averagePrice;
    let oldPrice = widget.filledPriceLine?.options().price;
    if (newPrice != oldPrice) {
        clearFilledPrice(widget);
        widget.filledPriceLine = createPriceLine(widget.candleSeries, newPrice, "Filled", "black", null, false, "solid");
    }
};

const clearFilledPrice = (widget: Models.ChartWidget) => {
    if (widget.filledPriceLine) {
        widget.candleSeries.removePriceLine(widget.filledPriceLine);
        widget.filledPriceLine = undefined;
    }
};
export const showLiveR = (symbol: string, position: Models.Position | undefined, widget: Models.ChartWidget) => {
    if (!position) {
        return;
    }
    let currentProfitRatio = getCurrentProfitRatio(symbol, position, widget);
    if (currentProfitRatio > 0) {
        let isLong = position.netQuantity > 0;
        let markerPosition: LightweightCharts.SeriesMarkerPosition = isLong ? 'aboveBar' : 'belowBar';
        let markerShape: LightweightCharts.SeriesMarkerShape = isLong ? 'arrowUp' : 'arrowDown';
        let symbolData = Models.getSymbolData(symbol);
        let candles = symbolData.candles;
        let lastCandle = candles[candles.length - 1];
        let atr = TradingState.getAtrInTrade(symbol);
        let todayRange = Models.getTodayRange(atr);
        let currentRange = Models.getCurrentRange(symbol, isLong);
        let atrText = `atr: ${currentRange}/${todayRange}`;
        widget.liveRMarker = {
            time: lastCandle.time,
            position: markerPosition,
            color: 'black',
            shape: markerShape,
            text: `${currentProfitRatio}R\n${atrText}`,
            size: 0.1,
        };
        showMarkers(widget);
    }
};
const getCurrentProfitRatio = (symbol: string, position: Models.Position | undefined, widget: Models.ChartWidget) => {
    if (!position) {
        return 0;
    }
    let currentPrice = Models.getCurrentPrice(symbol);
    let filledPrice = widget.initialCost;
    let stopPrice = widget.initialStopPrice;
    let isLong = position.netQuantity > 0;
    if ((isLong && currentPrice < filledPrice) || (!isLong && currentPrice > filledPrice)) {
        // do not show current loss
        return 0;
    }

    let currentProfit = Math.abs(currentPrice - filledPrice);
    let risk = Math.abs(stopPrice - filledPrice);
    let ratio = currentProfit / risk;
    ratio = Math.round(ratio * 10) / 10;
    return ratio;
};
/**
 * @returns the risk multiples
 */
const showPositionSize = (symbol: string, position: Models.Position | undefined, widget: any) => {
    let html = widget.htmlContents.positionCount;
    if (!position) {
        html.innerText = 'Pos: 0';
        html.style.color = 'black';
        return 0;
    }

    let display = `${Math.abs(position.netQuantity)}`;
    let riskMultiples = RiskManager.getRiskMultiplesFromExistingPosition(symbol);
    if (riskMultiples == 0)
        return 0;
    else {
        let percent = Math.round(riskMultiples * 100);
        display = `${percent}%`;
    }

    // show relative position size regarding to risk size
    if (position.netQuantity > 0) {
        html.innerText = `Pos: +${display}`;
        html.style.color = 'green';
        return riskMultiples;
    } else if (position.netQuantity < 0) {
        html.innerText = `Pos: -${display}`;
        html.style.color = 'red';
        return riskMultiples;
    }
    return riskMultiples;
};

const drawWorkingOrders = async (
    symbol: string, position: Models.Position | undefined,
    widget: Models.ChartWidget) => {
    // clear previous orders before re-draw every order
    clearDrawnOrders(widget, widget.entryOrdersPriceLines);
    widget.entryOrdersPriceLines = [];
    widget.entryOrders = [];

    clearDrawnOrders(widget, widget.exitOrdersPriceLines);
    widget.htmlContents.exitOrders.innerText = "Exits:";
    widget.exitOrdersPriceLines = [];
    widget.exitOrderPairs = [];

    let exitOrderPairs: Models.ExitPair[] = [];
    let entryOrders: Models.EntryOrderModel[] = [];
    if (window.HybridApp.AccountCache) {
        exitOrderPairs = window.HybridApp.AccountCache.exitPairs.get(symbol) ?? [];
        entryOrders = window.HybridApp.AccountCache.entryOrders.get(symbol) ?? [];
    }
    widget.exitOrderPairs = exitOrderPairs;
    widget.entryOrders = entryOrders;
    TradingState.updateLowestExitBatchCount(symbol, exitOrderPairs.length);


    if (entryOrders.length === 0 && exitOrderPairs.length === 0)
        return;

    exitOrderPairs.sort(function (a, b) {
        if (!a.LIMIT || !b.LIMIT) {
            return 1;
        }
        let limitA = a['LIMIT'];
        let limitB = b['LIMIT'];
        let isBuyOrder = limitB.isBuy;
        let isLong = !isBuyOrder;

        let priceA = limitA.price ?? 0;
        let priceB = limitB.price ?? 0;
        if (isLong) {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });
    widget.exitOrderPairs = exitOrderPairs;
    let exitOrdersString = "Exits: ";
    // draw exit orders
    for (let i = 0; i < exitOrderPairs.length; i++) {
        let orderSource = exitOrderPairs[i]['source'];
        if (orderSource != 'OTO' && orderSource != 'OCO') {
            Firestore.logError(`exit order pair is not from OTO or OCO, got ${exitOrderPairs[i]} instead`);
        }
        let entryPrice = 0;
        if (position)
            entryPrice = position.averagePrice;
        let stopOutPrice = exitOrderPairs[i]['STOP']?.price;
        let drawingStopOrder = createDrawingOrder(symbol, exitOrderPairs[i]['STOP'], entryPrice, stopOutPrice);
        let drawingLimitOrder = createDrawingOrder(symbol, exitOrderPairs[i]['LIMIT'], entryPrice, stopOutPrice);
        let text = "";
        let ordersToDraw = [];
        if (drawingStopOrder) {
            text = `${i + 1}:${drawingStopOrder.riskMultiples}%,`;
            ordersToDraw.push(drawingStopOrder);
        }
        if (drawingLimitOrder) {
            ordersToDraw.push(drawingLimitOrder);
            text = `${i + 1}:${drawingLimitOrder.riskMultiples}%,`;
        }
        exitOrdersString += text;

        ordersToDraw.forEach(orderToDraw => {
            let hasOrdersAtSamePrice = false;
            for (let j = 0; j < widget.exitOrdersPriceLines.length; j++) {
                let oldPriceLine = widget.exitOrdersPriceLines[j];
                if (oldPriceLine.options().price === orderToDraw.price) {
                    hasOrdersAtSamePrice = true;
                    oldPriceLine.applyOptions({
                        ...oldPriceLine.options(),
                        title: oldPriceLine.options().title + "," + text
                    })
                    break;
                }
            }
            if (!hasOrdersAtSamePrice) {
                let l = createPriceLine(widget.candleSeries, orderToDraw.price, text, orderToDraw.color, null, false, "solid");
                widget.exitOrdersPriceLines.push(l);
            }
        });
    }
    widget.htmlContents.exitOrders.innerText = exitOrdersString;

    if (entryOrders.length > 0) {
        // assume all entry orders are stop orders
        // because 2 way breakout, not all entries are the same price
        // group them based on diffferent prices
        let entryGroups = new Map<number, Models.EntryOrderModel[]>();
        entryOrders.forEach(o => {
            let price = o.price ?? 0; // TODO: set price for market order
            let mapValue = entryGroups.get(price);
            if (mapValue) {
                mapValue.push(o);
            } else {
                entryGroups.set(price, [o]);
            }
        });
        entryGroups.forEach((mapEntryOrders, entryPrice) => {
            let stopOutPrice = mapEntryOrders[0].exitStopPrice;
            let firstEntryOrderToDraw = createDrawingOrder(symbol, mapEntryOrders[0], entryPrice, stopOutPrice);
            if (firstEntryOrderToDraw) {
                for (let i = 1; i < mapEntryOrders.length; i++) {
                    let nextEntryORderToDraw = createDrawingOrder(symbol, mapEntryOrders[i], entryPrice, stopOutPrice);
                    if (nextEntryORderToDraw)
                        firstEntryOrderToDraw.riskMultiples += nextEntryORderToDraw.riskMultiples;
                }
                let l = createPriceLine(widget.candleSeries, firstEntryOrderToDraw.price, `entry: ${firstEntryOrderToDraw.riskMultiples}%`, firstEntryOrderToDraw.color, null, false, "solid");
                widget.entryOrdersPriceLines.push(l);
            }
        });
    }
};

const clearDrawnOrders = (widget: any, widgetPriceLines: any) => {
    if (widgetPriceLines && widgetPriceLines.length > 0) {
        widgetPriceLines.forEach((l: any) => {
            widget.candleSeries.removePriceLine(l);
        });
        widgetPriceLines = [];
    }
};

export const getCrossHairPrice = (symbol: string) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return;
    let crosshairPrice = widget.crosshairPrice;
    return Helper.roundPrice(symbol, crosshairPrice);
};

export const hideChart = (symbol: string) => {
    let chartWidget = Models.getChartWidget(symbol);
    if (!chartWidget)
        return;
    let container = chartWidget.htmlContents.container;
    container.style.display = 'none';
};
export const showChart = (symbol: string) => {
    let chartWidget = Models.getChartWidget(symbol);
    if (!chartWidget)
        return;
    let container = chartWidget.htmlContents.container;
    container.style.display = 'block';
};
export const invisibleChart = (symbol: string) => {
    let chartWidget = Models.getChartWidget(symbol);
    if (!chartWidget)
        return;
    let container = chartWidget.htmlContents.container;
    container.style.visibility = 'hidden';
};
export const visibleChart = (symbol: string) => {
    let chartWidget = Models.getChartWidget(symbol);
    if (!chartWidget)
        return;
    let container = chartWidget.htmlContents.container;
    container.style.visibility = 'visible';
};
export const maximizeChart = (symbol: string) => {
    resizeChart(symbol, ChartSettings.bigChartSize.width, ChartSettings.bigChartSize.height);
};
export const normalSizeChart = (symbol: string) => {
    resizeChart(symbol, ChartSettings.quarterChartSize.width, ChartSettings.quarterChartSize.height);
};
export const resizeChart = (symbol: string, width: number, height: number) => {
    let chartWidget = Models.getChartWidget(symbol);
    if (!chartWidget)
        return;
    chartWidget.chart.applyOptions({
        width: width,
        height: height,
    });
};
export const addMarker = (
    symbol: string,
    marker: LightweightCharts.SeriesMarker<LightweightCharts.UTCTimestamp>
) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return;
    widget.markers.push(marker);
    showMarkers(widget);
};

export const clearPriceLines = (symbol: string) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return;
    if (widget.entryPriceLine) {
        widget.candleSeries.removePriceLine(widget.entryPriceLine);
        widget.entryPriceLine = undefined;
    }
    if (widget.stopLossPriceLine) {
        widget.candleSeries.removePriceLine(widget.stopLossPriceLine);
        widget.stopLossPriceLine = undefined;
    }
};

export const updateUI = (symbol: string, className: string, text: string) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget) {
        return;
    }
    let htmlContainter = widget.htmlContents.container;
    let target = htmlContainter.getElementsByClassName(className)[0] as HTMLElement;
    if (target)
        target.innerText = text;
};

export const drawStopLoss = (symbol: string, price: number) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return;

    if (widget.stopLossPriceLine) {
        widget.candleSeries.removePriceLine(widget.stopLossPriceLine);
    }
    widget.stopLossPriceLine = createPriceLine(widget.candleSeries, price, "S/L", null, null, false, "solid");
};
export const drawEntry = (symbol: string, price: number) => {
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return;
    if (widget.entryPriceLine) {
        widget.candleSeries.removePriceLine(widget.entryPriceLine);
    }
    widget.entryPriceLine = createPriceLine(widget.candleSeries, price, "Entry", null, null, false, "solid");
};


export const createPriceLine = (
    series: LightweightCharts.ISeriesApi<LightweightCharts.SeriesType>,
    price: number, title: string, color: string | null, lineWidth: LightweightCharts.LineWidth | null,
    noPriceLabel: boolean, lineStyle: string) => {
    // check undefined for price
    if (!color) {
        color = 'blue';
    }
    if (!lineWidth) {
        lineWidth = 1;
    }
    let axisLabelVisible = true;
    if (noPriceLabel) {
        axisLabelVisible = false;
    }
    let tvLineStyle = LightweightCharts.LineStyle.Solid;
    if (lineStyle == "dashed") {
        tvLineStyle = LightweightCharts.LineStyle.Dashed;
    }
    return series.createPriceLine({
        price: price,
        color: color,
        title: title,
        lineStyle: tvLineStyle,
        lineWidth: lineWidth,
        axisLabelVisible: axisLabelVisible
    });
};

export const blinkChart = (symbol: string, isLong: boolean) => {
    let color = isLong ? "green" : "red";
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return;
    let chart = widget.htmlContents.chart;
    let a = setInterval(function () {
        if (chart.style.backgroundColor != color) {
            chart.style.backgroundColor = color;
        } else {
            chart.style.backgroundColor = '';
        }
    }, 300);
    setTimeout(() => {
        clearInterval(a);
        chart.style.backgroundColor = '';
    }, 10000);
};

/* #region Indicators */

const redColor = '#ff4444';
const greenColor = '#00c851';
const blueColor = '#304ffe';

const createOpenRangeSeries = (chart: LightweightCharts.IChartApi) => {
    // add from low to high: low3R, low2R, low1R, low, open, high, high1R, ...
    let lineSeriesList = [];
    const lineSettings = ChartSettings.openRangeLineSettings;
    for (let i = 0; i < 3; i++) {
        let s = chart.addLineSeries({
            color: redColor,
            lineStyle: LightweightCharts.LineStyle.LargeDashed,
            ...lineSettings
        });
        lineSeriesList.push(s);
    }
    let colors = [redColor, blueColor, greenColor];
    colors.forEach(color => {
        lineSeriesList.push(chart.addLineSeries({
            color: color,
            lineStyle: LightweightCharts.LineStyle.Solid,
            ...lineSettings
        }));
    });
    for (let i = 0; i < 3; i++) {
        let s = chart.addLineSeries({
            color: greenColor,
            lineStyle: LightweightCharts.LineStyle.LargeDashed,
            ...lineSettings
        });
        lineSeriesList.push(s);
    }
    return lineSeriesList;
};

export const populatePreMarketLineSeries = (time: number, high: number, low: number, widget: Models.ChartWidget) => {
    if (widget.premktHigh) {
        let newData: LightweightCharts.LineData = {
            time: time as LightweightCharts.UTCTimestamp,
            value: high,
        };
        widget.premktHigh.update(newData);
    }
    if (widget.premktLow) {
        let newData: LightweightCharts.LineData = {
            time: time as LightweightCharts.UTCTimestamp,
            value: low,
        };
        widget.premktLow.update(newData);
    }
};
const drawFirstTriangleConsolidation = (end: number, candles: Models.CandlePlus[], widget: Models.ChartWidget) => {
    if (widget.firstTriangleConsolidationUpper) {
        // already had a triangle consolidation
        return;
    }
    if (end - 1 < 0) {
        return;
    }
    let prev = candles[end - 1];
    let current = candles[end];
    if (prev.minutesSinceMarketOpen >= 0 &&
        current.high <= prev.high &&
        current.low >= prev.low) {
        widget.firstTriangleConsolidationUpper = widget.chart.addLineSeries({
            ...ChartSettings.cloudLineSettings,
            lineStyle: LightweightCharts.LineStyle.Solid
        });
        widget.firstTriangleConsolidationUpper.setData([
            { time: prev.time as LightweightCharts.UTCTimestamp, value: prev.high },
            { time: current.time as LightweightCharts.UTCTimestamp, value: current.high }
        ]);
        widget.firstTriangleConsolidationLower = widget.chart.addLineSeries({
            ...ChartSettings.cloudLineSettings,
            color: 'black',
            lineStyle: LightweightCharts.LineStyle.Solid
        });
        widget.firstTriangleConsolidationLower.setData([
            { time: prev.time as LightweightCharts.UTCTimestamp, value: prev.low },
            { time: current.time as LightweightCharts.UTCTimestamp, value: current.low }
        ]);
    }
};

export const drawKeyAreas = (widget: Models.ChartWidget, isLong: boolean, areas: TradingPlansModels.PriceArea[]) => {
    let color = isLong ? ChartSettings.defaultGreen : ChartSettings.defaultRed;
    areas.forEach(area => {
        createPriceLine(widget.candleSeries, area.priceLevel, "", color, 2, true, "solid");
        if (area.upperRoom) {
            createPriceLine(widget.candleSeries, area.priceLevel + area.upperRoom, "", color, 1, true, "dashed");
        }
        if (area.lowerRoom) {
            createPriceLine(widget.candleSeries, area.priceLevel - area.lowerRoom, "", color, 1, true, "dashed");
        }
    });
};
export const drawKeyLevels = (widget: Models.ChartWidget, keyLevels: TradingPlansModels.keyLevels,
    lastSupport: number[], lastResistance: number[]) => {
    if (keyLevels.otherLevels) {
        keyLevels.otherLevels.forEach(price => {
            createPriceLine(widget.candleSeries, price, "", "black", 2, true, "solid");
        });
    }

    lastSupport.forEach(price => {
        createPriceLine(widget.candleSeries, price, "last support", "green", 2, false, "solid");
    });
    lastResistance.forEach(price => {
        createPriceLine(widget.candleSeries, price, "last resistance", "red", 2, false, "solid");
    });
    if (keyLevels.momentumStartForLong != 0) {
        createPriceLine(
            widget.candleSeries, keyLevels.momentumStartForLong,
            "uptrend start", "green", 2, false, "solid",
        );
    }
    if (keyLevels.momentumStartForShort != 0) {
        createPriceLine(
            widget.candleSeries, keyLevels.momentumStartForShort,
            "downtrend start", "red", 2, false, "solid",
        );
    }
};
export const drawIndicatorsForNewlyClosedCandle = (end: number, candles: Models.CandlePlus[], widget: Models.ChartWidget) => {
    // only check within first hour after market open
    if (candles[end].minutesSinceMarketOpen < 0 ||
        candles[end].minutesSinceMarketOpen > 60) {
        return;
    }
    drawFirstTriangleConsolidation(end, candles, widget);
};


export const resetPreMarketLowLineSeries = (widget: Models.ChartWidget | null | undefined) => {
    if (!widget)
        return;
    if (widget.premktLow) {
        widget.chart.removeSeries(widget.premktLow);
    }
    widget.premktLow = widget.chart.addLineSeries({
        ...ChartSettings.preMarketLineSettings,
    });
}

export const resetPreMarketHighLineSeries = (widget: Models.ChartWidget) => {
    if (widget.premktHigh) {
        widget.chart.removeSeries(widget.premktHigh);
    }
    widget.premktHigh = widget.chart.addLineSeries(ChartSettings.preMarketLineSettings);
};
const runPostCandleCloseIndicators = (newlyClosedCandle: Models.CandlePlus) => {
    let localTime = Helper.tvTimestampToLocalJsDate(newlyClosedCandle.time);
    checkVwapBeforeOpen(newlyClosedCandle, localTime);
};
const checkVwapBeforeOpen = (newlyClosedCandle: Models.CandlePlus, localTime: any) => {
    // check when 6:29 AM is closed.
};
/* #endregion */

export const displayState = (symbol: string, status: string, exitLocked: boolean) => {
    let text = `State: ${status}`;
    if (exitLocked) {
        text += ' locked';
    } else {
        text += ' unlocked';
    }
    updateUI(symbol, "topBarRight2", text);
};
const setupTradingPlans = (symbol: string, container: Models.AlgoElements) => {
    if (!container)
        return;
    if (container.long) {
        setupTradingPlansForSingleDirection(symbol, true, container.long);
    }
    if (container.short) {
        setupTradingPlansForSingleDirection(symbol, false, container.short);
    }
};
const hideButtonAfterOneMinute = (button: HTMLElement, secondsSinceMarketOpen: number) => {
    let waitSeconds = 61 - secondsSinceMarketOpen;
    setTimeout(() => {
        button.style.display = 'none';
    }, waitSeconds * 1000);
}
const setupTradingPlansForSingleDirection = (symbol: string, isLong: boolean, container: HTMLElement) => {
    let plan = TradingPlans.getTradingPlansForSingleDirection(symbol, isLong);
    let seconds = Helper.getSecondsSinceMarketOpen(new Date());
    if (seconds < 61) {
        if (plan.profitTakingFade60Plan) {
            let button = createButton("PT Fade", container);
            hideButtonAfterOneMinute(button, seconds);
            let currentPlan = plan.profitTakingFade60Plan;
            button.addEventListener("click", (pointerEvent) => {
                Firestore.logInfo(`profit taking fade 60 button clicked`);
                AutoRedToGreen60.startAlgo(symbol, isLong, currentPlan, TradingPlansModels.PlanType.ProfitTakingFade60);
            });
        }
        if (plan.profitTakingExhaust60Plan) {
            let button = createButton("PT Exhuast", container);
            hideButtonAfterOneMinute(button, seconds);
            let currentPlan = plan.profitTakingExhaust60Plan;
            button.addEventListener("click", (pointerEvent) => {
                Firestore.logInfo(`profit taking exhuast 60 button clicked`);
                AutoRedToGreen60.startAlgo(symbol, isLong, currentPlan, TradingPlansModels.PlanType.ProfitTakingExhuast60);
            });
        }
        if (plan.premarket2ndBreakout60Plan) {
            let button = createButton("pre 2nd b/o", container);
            hideButtonAfterOneMinute(button, seconds);
            let currentPlan = plan.premarket2ndBreakout60Plan;
            button.addEventListener("click", (pointerEvent) => {
                Firestore.logInfo(`premarket 2nd breakout 60 button clicked`);
                AutoRedToGreen60.startAlgo(symbol, isLong, currentPlan, TradingPlansModels.PlanType.Premarket2ndBreakout60);
            });
        }
        if (plan.openDriveContinuation60Plan) {
            let button = createButton("GapGo60", container);
            hideButtonAfterOneMinute(button, seconds);
            let currentPlan = plan.openDriveContinuation60Plan;
            button.addEventListener("click", (pointerEvent) => {
                Firestore.logInfo(`open 60 button clicked`);
                AutoRedToGreen60.startAlgo(symbol, isLong, currentPlan, TradingPlansModels.PlanType.OpenDriveContinuation60);
            });
        }
    }
    if (plan.redtoGreenPlan) {
        let buttonText = isLong ? "R2G" : "G2R";
        let r2gElement = createButton(buttonText, container);
        let currentPlan = plan.redtoGreenPlan;
        r2gElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`red to green button clicked`);
            AutoRedToGreen.startAlgo(symbol, isLong, currentPlan);
        });
    }
    if (plan.firstNewHighPlan) {
        let buttonText = isLong ? "1st NewHi" : "1st NewLo";
        let firstNewHighElement = createButton(buttonText, container);
        let currentPlan = plan.firstNewHighPlan;
        firstNewHighElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            if (pointerEvent.shiftKey) {
                EntryHandler.enterFirstNewHighAfterTriggered(symbol, isLong, currentPlan);
            } else {
                AutoFirstNewHigh.startAlgo(symbol, isLong, true, currentPlan);
            }
        });
        let firstNewHighElement5 = createButton(buttonText + "_5", container);
        firstNewHighElement5.addEventListener("click", (pointerEvent) => {
            EntryHandler.runFirstNewHighPlan5(symbol, isLong, currentPlan);
        });
    }
    let breakoutElement = container.getElementsByClassName("tpBreakout")[0] as HTMLElement;
    if (plan.levelBreakout) {
        let currentPlan = plan.levelBreakout;
        breakoutElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            EntryHandler.runBreakoutPlan(symbol, isLong, currentPlan);
        });
    } else {
        breakoutElement.style.display = "None";
    }

    if (plan.secondNewHighPlan) {
        let buttonText = isLong ? "2nd NewHi" : "2nd NewLo";
        let secondNewHighElement = createButton(buttonText, container);
        let currentPlan = plan.secondNewHighPlan;
        secondNewHighElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            EntryHandler.runSecondNewHighPlan(symbol, isLong, currentPlan);
        });
    }

    if (plan.firstRetracementPlan) {
        let firstRetracementElement = createButton("Retrace", container);
        let currentPlan = plan.firstRetracementPlan;
        firstRetracementElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            EntryHandler.runFirstRetracementPlan(symbol, isLong, currentPlan);
        });
    }
    let tpRangeElement = container.getElementsByClassName("tpRange")[0] as HTMLElement;
    if (plan.rangePlan) {
        let currentPlan = plan.rangePlan;
        tpRangeElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            EntryHandler.runRangePlan(symbol, isLong, currentPlan);
        });
    } else {
        tpRangeElement.style.display = "None";
    }
    let vwapCrossFailElement = container.getElementsByClassName("tpVcf")[0] as HTMLElement;
    if (plan.vwapCrossFailPlan) {
        let currentPlan = plan.vwapCrossFailPlan;
        vwapCrossFailElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            EntryHandler.runVwapCrossFailPlan(symbol, isLong, currentPlan);
        });
    } else {
        vwapCrossFailElement.style.display = "None";
    }
    let vwapCrossSuccessElement = container.getElementsByClassName("tpVcS")[0] as HTMLElement;
    if (plan.vwapCrossSuccessPlan) {
        let currentPlan = plan.vwapCrossSuccessPlan;
        vwapCrossSuccessElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            EntryHandler.runVwapCrossSuccessPlan(symbol, isLong, currentPlan);
        });
    } else {
        vwapCrossSuccessElement.style.display = "None";
    }
    let bothFakeElement = container.getElementsByClassName("tpBothFake")[0] as HTMLElement;
    if (plan.bothSidesFalseBreakoutPlan) {
        let currentPlan = plan.bothSidesFalseBreakoutPlan;
        bothFakeElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            EntryHandler.runBothSidesFalseBreakoutPlan(symbol, isLong, currentPlan);
        });
    } else {
        bothFakeElement.style.display = "None";
    }
    let fakeoutElement = container.getElementsByClassName("tpFalseBreakout")[0] as HTMLElement;
    if (plan.falseBreakoutPlan) {
        let currentPlan = plan.falseBreakoutPlan;
        fakeoutElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            EntryHandler.runFalseBreakoutPlan(symbol, isLong, currentPlan, pointerEvent.shiftKey);
        });
    } else {
        fakeoutElement.style.display = "None";
    }
    let orbElement = container.getElementsByClassName("tpOrb")[0] as HTMLElement;
    if (plan.openRangeBreakoutPlan) {
        let currentPlan = plan.openRangeBreakoutPlan;
        orbElement.innerText = `O${currentPlan.count}`;
        orbElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`button clicked`);
            EntryHandler.runOpenRangeBreakoutPlan(symbol, isLong, currentPlan, pointerEvent.shiftKey);
        });
    } else {
        orbElement.style.display = "None";
    }
    let openDrive60Element = container.getElementsByClassName("tpOpen60")[0] as HTMLElement;

    let imbalancePlanElement = container.getElementsByClassName("tpImb")[0] as HTMLElement;
    if (plan.imbalancePlan) {
        let currentPlan = plan.imbalancePlan;
        imbalancePlanElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`imbalance button clicked`);
            EntryHandler.runImbalancePlan(symbol, isLong, currentPlan);
        });
    } else {
        imbalancePlanElement.style.display = "None";
    }
    let openScalpElement = container.getElementsByClassName("tpOpenScalp")[0] as HTMLElement;
    if (plan.openScalpPlan) {
        let currentPlan = plan.openScalpPlan;
        openScalpElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`open scalp button clicked`);
            EntryHandler.runOpenScalplan(symbol, isLong, pointerEvent.shiftKey, currentPlan);
        });
    } else {
        openScalpElement.style.display = "None";
    }
    let firstBreakoutElement = container.getElementsByClassName("tp1stBreak")[0] as HTMLElement;
    if (plan.firstBreakoutPlan) {
        let currentPlan = plan.firstBreakoutPlan;
        firstBreakoutElement.addEventListener("click", (pointerEvent) => {
            Firestore.logInfo(`1st breakout algo clicked`);
            AutoFirstBreakout.startAlgo(symbol, isLong, pointerEvent.shiftKey, currentPlan);
        });
    } else {
        firstBreakoutElement.style.display = "None";
    }
}
export const createButton = (text: string, container: HTMLElement) => {
    let buttonElement = document.createElement("span");
    buttonElement.textContent = text;
    container.appendChild(buttonElement);
    return buttonElement;
};

const setupAlgo = (symbol: string, algos: Models.AlgoElements) => {
    if (!algos)
        return;
    if (algos.long) {
        algos.long.addEventListener("click", (pointerEvent) => {
            algoLabelClicked(symbol, true, algos.long);
        });
    }
    if (algos.short) {
        algos.short.addEventListener("click", (pointerEvent) => {
            algoLabelClicked(symbol, false, algos.short);
        });
    }
};
const algoLabelClicked = (symbol: string, isLong: boolean, htmlElement: HTMLElement) => {
    let isActive = htmlElement.classList.contains("active");
    if (isActive) {
        htmlElement.classList.remove("active");
    } else {
        htmlElement.classList.add("active");
        AutoTrader.startAlgo(symbol, isLong);
    }
};
export const isAlgoActive = (symbol: string, isLong: boolean) => {
    let chart = Models.getChartWidget(symbol);
    if (!chart) {
        return false;
    }
    let algos = chart.htmlContents.algos;
    let htmlElement = isLong ? algos.long : algos.short;
    return htmlElement.classList.contains("active");
}
export const darkChart = (symbol: string) => {
    let chart = Models.getChartWidget(symbol);
    if (!chart)
        return;
    if (chart.isDark)
        return;
    chart.chart.applyOptions({
        layout: {
            background: {
                color: '#BDBDBD',
            }
        }
    });
    chart.isDark = true;
}

export const lightChart = (symbol: string) => {
    let chart = Models.getChartWidget(symbol);
    if (!chart)
        return;
    if (!chart.isDark)
        return;

    chart.chart.applyOptions({
        layout: {
            background: {
                color: '#ffffff',
            }
        }
    });
    chart.isDark = false;
}

export const showPremarketTrend = (symbol: string, belowCount: number, aboveCount: number) => {
    let text = VwapAlgo.getPremarketTrendText(belowCount, aboveCount);
    updateUI(symbol, "premktTrend", text);
}