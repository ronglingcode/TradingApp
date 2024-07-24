import * as Chart from '../ui/chart';
import * as Helper from '../utils/helper';
import * as Config from '../config/config';
import type * as LightweightCharts from 'sunrise-tv-lightweight-charts';
import * as Firestore from '../firestore';
import * as Models from '../models/models';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as Rules from '../algorithms/rules';
import * as AutoTrader from '../algorithms/autoTrader';

export const initialize = (symbol: string, inputCandles: Models.Candle[]) => {
    let widget = Models.getChartWidget(symbol);
    let data = inputCandles;
    if (!widget || !data) {
        console.log("no price history or no widget");
        return;
    }
    let symbolData = Models.getSymbolData(symbol);
    let keyAreasToDraw = TradingPlans.getKeyAreasToDraw(symbol);
    for (let i = 0; i < keyAreasToDraw.length; i++) {
        symbolData.keyAreaData.push({
            candles: [],
        });
    }

    let vwapCorrection = TradingPlans.getVwapCorrection(symbol);
    let vwapCorrectionVolumeSum = vwapCorrection.volumeSum;
    let vwapCorrectionTradingAmount = vwapCorrection.tradingSum;
    let vwapCorrected = false;

    data.sort(function (a, b) { return a.datetime - b.datetime });
    let prevDatetime = 0;

    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        // avoid duplicates
        if (prevDatetime === element.datetime) {
            continue;
        } else {
            prevDatetime = element.datetime;
        }
        let d = new Date(element.datetime);
        if (d < Config.Settings.dtStartTime)
            continue;

        let newD = Helper.jsDateToUTC(d);
        let newCandle = Models.buildCandlePlus(symbol, element, newD, Helper.getMinutesSinceMarketOpen(d));
        symbolData.candles.push(newCandle);
        symbolData.volumes.push({ time: newD, value: element.volume });

        for (let i = 0; i < keyAreasToDraw.length; i++) {
            let upper = keyAreasToDraw[i].upperPrice;
            let lower = keyAreasToDraw[i].lowerPrice;
            let direction = keyAreasToDraw[i].direction;
            let kac = buildKeyAreaCloudCandleData(newD, upper, lower, direction);
            symbolData.keyAreaData[i].candles.push(kac);
        }

        let newTradingAmount = element.volume * getTypicalPrice(element);

        if (newCandle.minutesSinceMarketOpen < 0) {
            // update pre-market indicators
            if (element.low < symbolData.premktLow) {
                symbolData.premktLow = Math.floor(element.low * 100) / 100;
                Chart.resetPreMarketLowLineSeries(widget);
            }
            if (element.high > symbolData.premktHigh) {
                symbolData.premktHigh = Math.ceil(element.high * 100) / 100;
                Chart.resetPreMarketHighLineSeries(widget);
            }
            if (!vwapCorrected && vwapCorrectionTradingAmount > 0 && vwapCorrectionVolumeSum > 0) {
                if (newCandle.minutesSinceMarketOpen >= -30) {
                    symbolData.totalTradingAmount = vwapCorrectionTradingAmount;
                    symbolData.premarketDollarTraded = symbolData.totalTradingAmount;
                    symbolData.totalVolume = vwapCorrectionVolumeSum;
                    vwapCorrected = true;
                }
            }
            symbolData.premarketDollarTraded += newTradingAmount;
            if (newCandle.minutesSinceMarketOpen > -30) {
                updateVwapCount(symbolData, newCandle.close);
            }
        } else {
            // update in-market indicators
            if (element.low < symbolData.lowOfDay) {
                symbolData.lowOfDay = Math.floor(element.low * 100) / 100;
            }
            if (element.high > symbolData.highOfDay) {
                symbolData.highOfDay = Math.ceil(element.high * 100) / 100;
            }
        }
        if (Helper.isMarketOpenTime(d, Config.Settings.currentDay) && i != data.length - 1) {
            // only set opening candle when it's the not last candle
            // meaning the opening candle is closed
            symbolData.openRange = createOpenRange(newCandle);
        }
        pushNewOpenRangeData(symbolData, newD);

        symbolData.totalVolume += element.volume;
        symbolData.totalTradingAmount += (element.volume * getTypicalPrice(element));

        symbolData.vwap.push({
            time: newD,
            value: symbolData.totalTradingAmount / symbolData.totalVolume,
        });
        Chart.populatePreMarketLineSeries(newD, symbolData.premktHigh, symbolData.premktLow, widget);
        // simulate auto trader
        // not simulate last candle, it's usually not closed
        // let time and sales data trigger this candle close
        if (i < data.length - 1) {
            //AutoTrader.onMinuteClosed(symbol, newCandle, false, symbolData);
        }
    }

    //widget.volumeSeries.setData(symbolData.volumes);
    widget.vwapSeries.setData(symbolData.vwap);
    widget.candleSeries.setData(symbolData.candles);
    //widget.orbSeries.setData(symbolData.OpenRangeLineSeriesData.orbArea);
    for (let i = 0; i < keyAreasToDraw.length; i++) {
        widget.keyAreaSeriesList[i].setData(symbolData.keyAreaData[i].candles);
    }

    Chart.updateUI(symbol, "hod", symbolData.highOfDay.toString());
    Chart.updateUI(symbol, "lod", symbolData.lowOfDay.toString());
    let tradingPlans = TradingPlans.getTradingPlans(symbol);
    let keyLevels = tradingPlans.keyLevels;
    let lastDefenseForLong = [TradingPlans.getLastDefenseForLongInRetracement(symbol)];
    let lastDefenseForShort = [TradingPlans.getLastDefenseForShortInRetracement(symbol)];
    Chart.drawKeyLevels(widget, keyLevels, lastDefenseForLong, lastDefenseForShort);
    let longRetracementAreas = TradingPlans.getRetracementPriceAreas(symbol, true);
    if (longRetracementAreas.length > 0) {
        Chart.drawKeyAreas(widget, true, longRetracementAreas);
    }
    let shortRetracementAreas = TradingPlans.getRetracementPriceAreas(symbol, false);
    if (shortRetracementAreas.length > 0) {
        Chart.drawKeyAreas(widget, false, shortRetracementAreas);
    }

    if (symbolData.openRange) {
        setDataForOpenRange(widget, symbolData.OpenRangeLineSeriesData);
    }
    for (let i = 0; i < symbolData.candles.length; i++) {
        // process newly closed candle
        // skip last candle
        if (i === symbolData.candles.length - 1) {
            continue;
        }
        Chart.drawIndicatorsForNewlyClosedCandle(
            i, symbolData.candles, widget
        );
    }
    Chart.showPremarketTrend(symbol, symbolData.premktBelowVwapCount, symbolData.premktAboveVwapCount);
};

export const updateFromTimeSale = (timesale: Models.TimeSale) => {
    let symbol = timesale.symbol;
    let widget = Models.getChartWidget(symbol);
    if (!widget)
        return;

    Chart.updateUI(symbol, "currentPrice", Helper.numberToStringWithPaddingToCents(timesale.lastPrice));

    let oneMinuteBucket = Helper.numberToDate(timesale.tradeTime);
    oneMinuteBucket.setSeconds(0, 0);
    let newTime = Helper.jsDateToUTC(oneMinuteBucket);
    let symbolData = Models.getSymbolData(symbol);
    let lastPrice = timesale.lastPrice ?? 0;
    let lastSize = timesale.lastSize ?? 0;

    symbolData.totalVolume += lastSize;
    symbolData.totalTradingAmount += (lastPrice * lastSize);
    let newVwapValue = symbolData.totalTradingAmount / symbolData.totalVolume;
    let lastCandle = symbolData.candles[symbolData.candles.length - 1];
    if (!lastCandle) {
        // sometimes timesales data comes in before chart is loaded.
        return;
    }
    let lastVolume = symbolData.volumes[symbolData.volumes.length - 1];
    let lastVwap = symbolData.vwap[symbolData.vwap.length - 1];
    if (oneMinuteBucket < Config.Settings.marketOpenTime) {
        // update pre-market indicators
        if (lastPrice > symbolData.premktHigh) {
            symbolData.premktHigh = Math.ceil(lastPrice * 100) / 100;
            Chart.resetPreMarketHighLineSeries(widget);
        }
        if (lastPrice < symbolData.premktLow && lastPrice > 0) {
            symbolData.premktLow = Math.floor(lastPrice * 100) / 100;
            Chart.resetPreMarketLowLineSeries(widget);
        }
    } else {
        // update in-market indicators
        if (lastPrice > symbolData.highOfDay) {
            symbolData.highOfDay = Math.ceil(lastPrice * 100) / 100;
            Chart.updateUI(symbol, "hod", Helper.numberToString(symbolData.highOfDay));
        }
        if (lastPrice < symbolData.lowOfDay && lastPrice > 0) {
            symbolData.lowOfDay = Math.floor(lastPrice * 100) / 100;
            Chart.updateUI(symbol, "lod", Helper.numberToString(symbolData.lowOfDay));
        }
    }
    if (lastCandle && !lastCandle.time) {
        console.log('here');
        console.log(lastCandle);
    }

    if (newTime == lastCandle.time) {
        // update current candle
        lastVolume.value += lastSize;
        if (timesale.tradeTime && timesale.tradeTime < lastCandle.firstTradeTime) {
            lastCandle.open = lastPrice;
            lastCandle.firstTradeTime = timesale.tradeTime;
            Firestore.logInfo("received out of order timesale " + symbol + ": " + timesale.tradeTime);
        }
        if (lastPrice > lastCandle.high) {
            lastCandle.high = lastPrice;
        } else if (lastPrice < lastCandle.low) {
            lastCandle.low = lastPrice;
        }
        lastCandle.close = lastPrice;
        lastCandle.volume += lastSize;
        lastVwap.value = newVwapValue;
    } else {
        // moved to a new one minute
        // handle newly closed candle
        let newlyClosedCandle = lastCandle;
        if (lastCandle && !lastCandle.time) {
            console.log('here');
            console.log(lastCandle);
        }
        let localJsDate = Helper.tvTimestampToLocalJsDate(newlyClosedCandle.time);

        // update Open range price series
        if (Helper.isMarketOpenTime(localJsDate, Config.Settings.currentDay)) {
            // first minute just closed, create open range candle data
            symbolData.openRange = createOpenRange(newlyClosedCandle);

            let closedCandleTime = newlyClosedCandle.time;
            addDataAndUpdateChartForOpenRange(closedCandleTime, symbolData, widget);
        }

        // candle closed after market open
        if (symbolData.openRange) {
            /*
            addDataAndUpdateChart(newTime, symbolData.OpenRangeLineSeriesData.orbArea, {
                open: symbolData.openRange.high,
                high: symbolData.openRange.high,
                low: symbolData.openRange.low,
                close: symbolData.openRange.low
            }, widget.orbSeries);
            */
            addDataAndUpdateChartForOpenRange(newTime, symbolData, widget);
        }
        let keyAreasToDraw = TradingPlans.getKeyAreasToDraw(symbol);
        for (let i = 0; i < keyAreasToDraw.length; i++) {
            const element = keyAreasToDraw[i];
            let kac = buildKeyAreaCloudCandleData(newTime, element.upperPrice, element.lowerPrice, element.direction);
            addDataAndUpdateChart(newTime, symbolData.keyAreaData, kac, widget.keyAreaSeriesList[i]);
        }
        Chart.drawIndicatorsForNewlyClosedCandle(
            symbolData.candles.length - 1, symbolData.candles, widget
        );

        // create a new candle
        let newDate = Helper.tvTimestampToLocalJsDate(newTime);
        lastCandle = {
            symbol: timesale.symbol,
            time: newTime,
            open: lastPrice,
            high: lastPrice,
            low: lastPrice,
            close: lastPrice,
            minutesSinceMarketOpen: Helper.getMinutesSinceMarketOpen(newDate),
            firstTradeTime: timesale.tradeTime ?? 0,
            datetime: timesale.tradeTime ?? 0,
            volume: lastSize,
            vwap: 0,
        };
        symbolData.candles.push(lastCandle);
        lastVolume = {
            time: newTime,
            value: lastSize
        };
        symbolData.volumes.push(lastVolume);
        lastVwap = {
            time: newTime,
            value: newVwapValue
        };
        symbolData.vwap.push(lastVwap);
        addOrbAreaCandle(newTime, symbolData.OpenRangeLineSeriesData.orbArea, symbolData.openRange);

        if (-30 < lastCandle.minutesSinceMarketOpen && lastCandle.minutesSinceMarketOpen < 0) {
            updateVwapCount(symbolData, lastCandle.close);
            Chart.showPremarketTrend(symbol, symbolData.premktBelowVwapCount, symbolData.premktAboveVwapCount);
        }
        /*
        if (symbolData.OpenRangeLineSeriesData.orbArea[symbolData.OpenRangeLineSeriesData.orbArea.length - 1])
            widget.orbSeries.update(symbolData.OpenRangeLineSeriesData.orbArea[symbolData.OpenRangeLineSeriesData.orbArea.length - 1]);
        */
        Chart.populatePreMarketLineSeries(newTime, symbolData.premktHigh, symbolData.premktLow, widget);
        AutoTrader.onMinuteClosed(symbol, newlyClosedCandle, true, symbolData);
    }
    widget.candleSeries.update(lastCandle);
    let volumeText = `${Helper.largeNumberToString(lastVolume.value)} $${Helper.roundToMillion(lastVolume.value * lastPrice)}M`
    Chart.updateUI(symbol, "currentVolume", volumeText);
    //widget.volumeSeries.update(lastVolume);
    widget.vwapSeries.update(lastVwap);
    let position = Models.getPosition(symbol);
    Chart.showLiveR(symbol, position, widget);
    if (widget.isDark) {
        let mo = Helper.getSecondsSinceMarketOpen(new Date())
        if (mo > 0) {
            let atr = Models.getAtr(symbol);
            let logTags: Models.LogTags = {}
            let enougthAtr = !Rules.isDailyRangeTooSmall(symbol, atr, false, logTags);
            if (enougthAtr && Models.getLiquidityScale(symbol) > 0) {
                let l = Models.getLiquidityScale(symbol, true);
                Firestore.logInfo(`liquidity scale: ${l}`);
                Chart.lightChart(symbol);
            }
        }
    }
    AutoTrader.onNewTimeAndSalesData(symbol, lastPrice);
};

const buildKeyAreaCloudCandleData = (time: LightweightCharts.UTCTimestamp, upper: number, lower: number, direction: number) => {
    if (direction > 0) {
        let c: Models.SimpleCandle = {
            time: time,
            open: lower,
            high: upper,
            low: lower,
            close: upper,
        };
        return c;
    } else {
        let c: Models.SimpleCandle = {
            time: time,
            open: upper,
            high: upper,
            low: lower,
            close: lower,
        };
        return c;
    }
}

const addDataAndUpdateChartForOpenRange = (
    closedCandleTime: LightweightCharts.UTCTimestamp,
    symbolData: Models.SymbolData,
    widget: Models.ChartWidget,
) => {
    if (!symbolData.openRange)
        return;

    if (Config.getProfileSettings().uiSettings.showExtendedOpenRange) {
        addDataAndUpdateChart(closedCandleTime, symbolData.OpenRangeLineSeriesData.openLow3R, { value: symbolData.openRange.low3R }, widget.openRangeSeriesList[0]);
        addDataAndUpdateChart(closedCandleTime, symbolData.OpenRangeLineSeriesData.openLow2R, { value: symbolData.openRange.low2R }, widget.openRangeSeriesList[1]);
        addDataAndUpdateChart(closedCandleTime, symbolData.OpenRangeLineSeriesData.openLow1R, { value: symbolData.openRange.low1R }, widget.openRangeSeriesList[2]);
        addDataAndUpdateChart(closedCandleTime, symbolData.OpenRangeLineSeriesData.openHigh1R, { value: symbolData.openRange.high1R }, widget.openRangeSeriesList[6]);
        addDataAndUpdateChart(closedCandleTime, symbolData.OpenRangeLineSeriesData.openHigh2R, { value: symbolData.openRange.high2R }, widget.openRangeSeriesList[7]);
        addDataAndUpdateChart(closedCandleTime, symbolData.OpenRangeLineSeriesData.openHigh3R, { value: symbolData.openRange.high3R }, widget.openRangeSeriesList[8]);
    }
    addDataAndUpdateChart(closedCandleTime, symbolData.OpenRangeLineSeriesData.openLow, { value: symbolData.openRange.low }, widget.openRangeSeriesList[3]);
    addDataAndUpdateChart(closedCandleTime, symbolData.OpenRangeLineSeriesData.openPrice, { value: symbolData.openRange.open }, widget.openRangeSeriesList[4]);
    addDataAndUpdateChart(closedCandleTime, symbolData.OpenRangeLineSeriesData.openHigh, { value: symbolData.openRange.high }, widget.openRangeSeriesList[5]);
};
const setDataForOpenRange = (widget: Models.ChartWidget, a: Models.OpenRangeLineSeriesData) => {
    if (Config.getProfileSettings().uiSettings.showExtendedOpenRange) {
        widget.openRangeSeriesList[0].setData(a.openLow3R);
        widget.openRangeSeriesList[1].setData(a.openLow2R);
        widget.openRangeSeriesList[2].setData(a.openLow1R);
        widget.openRangeSeriesList[6].setData(a.openHigh1R);
        widget.openRangeSeriesList[7].setData(a.openHigh2R);
        widget.openRangeSeriesList[8].setData(a.openHigh3R);
    }

    widget.openRangeSeriesList[3].setData(a.openLow);
    widget.openRangeSeriesList[4].setData(a.openPrice);
    widget.openRangeSeriesList[5].setData(a.openHigh);

};
const pushNewOpenRangeData = (symbolData: Models.SymbolData,
    newD: LightweightCharts.UTCTimestamp) => {
    if (symbolData.openRange) {
        if (Config.getProfileSettings().uiSettings.showExtendedOpenRange) {
            symbolData.OpenRangeLineSeriesData.openHigh3R.push({ time: newD, value: symbolData.openRange.high3R });
            symbolData.OpenRangeLineSeriesData.openHigh2R.push({ time: newD, value: symbolData.openRange.high2R });
            symbolData.OpenRangeLineSeriesData.openHigh1R.push({ time: newD, value: symbolData.openRange.high1R });

            symbolData.OpenRangeLineSeriesData.openLow1R.push({ time: newD, value: symbolData.openRange.low1R });
            symbolData.OpenRangeLineSeriesData.openLow2R.push({ time: newD, value: symbolData.openRange.low2R });
            symbolData.OpenRangeLineSeriesData.openLow3R.push({ time: newD, value: symbolData.openRange.low3R });
        }
        symbolData.OpenRangeLineSeriesData.openHigh.push({ time: newD, value: symbolData.openRange.high });
        symbolData.OpenRangeLineSeriesData.openPrice.push({ time: newD, value: symbolData.openRange.open });
        symbolData.OpenRangeLineSeriesData.openLow.push({ time: newD, value: symbolData.openRange.low });

        addOrbAreaCandle(newD, symbolData.OpenRangeLineSeriesData.orbArea, symbolData.openRange);
    }
};
export const createOpenRange = (candle: Models.CandlePlus) => {
    let range = candle.high - candle.low;
    let openRange: Models.OpenRange = {
        high3R: candle.high + range * 3,
        high2R: candle.high + range * 2,
        high1R: candle.high + range,
        low1R: candle.low - range,
        low2R: candle.low - range * 2,
        low3R: candle.low - range * 3,
        ...candle
    };
    return openRange;
};

/**
 * Returns the dollar amount in millions
 * @param symbol 
 */
export const getPremarketTradingAmountInMillionDollars = (symbol: string) => {
    let symbolData = Models.getSymbolData(symbol);
    return symbolData.premarketDollarTraded / 1000000;
};

export const getExtremePrice = (symbol: string, up: boolean, secondsSinceMarketOpen: number) => {
    let isPremarket = secondsSinceMarketOpen < 0;
    let symbolData = Models.getSymbolData(symbol);
    let p = 0;
    if (up) {
        if (isPremarket)
            p = symbolData.premktHigh;
        else
            p = symbolData.highOfDay;
    } else {
        if (isPremarket)
            p = symbolData.premktLow;
        else
            p = symbolData.lowOfDay;
    }
    return p;
};

export const getTypicalPrice = (candle: Models.Candle) => {
    /*
    if (candle.vwap > 0) {
        return candle.vwap;
    }*/

    return (candle.high + candle.low + candle.close) / 3;
};

export const updateFromLevelOneQuote = (quote: Models.Quote) => {
    if (!quote)
        return;
    let symbol = quote.symbol;
    let symbolData = Models.getSymbolData(symbol);
    if (quote.bidPrice) {
        Chart.updateUI(symbol, "bid", quote.bidPrice.toString());
        symbolData.bid = quote.bidPrice;
    }
    if (quote.askPrice) {
        Chart.updateUI(symbol, "ask", quote.askPrice.toString());
        symbolData.ask = quote.askPrice;
    }
    if (quote.bidPrice && quote.askPrice) {
        let spread = symbolData.ask - symbolData.bid;
        spread = Math.round(spread * 100) / 100;
        Chart.updateUI(symbol, "spread", `${spread}`);
    }
};


export const addOrbAreaCandle = (newTime: LightweightCharts.UTCTimestamp, orbArea: Models.SimpleCandle[], openingCandle: Models.Candle | undefined) => {
    if (!openingCandle || !orbArea) {
        return;
    }

    orbArea.push({
        time: newTime,
        open: openingCandle.high,
        high: openingCandle.high,
        low: openingCandle.low,
        close: openingCandle.low
    });
};
export const addDataAndUpdateChart = (
    newTime: LightweightCharts.UTCTimestamp, dataArray: any[], newObj: any,
    series: LightweightCharts.ISeriesApi<LightweightCharts.SeriesType>) => {
    dataArray.push({
        ...newObj,
        time: newTime
    });
    series.update(dataArray.slice(-1)[0]);
};


const updateVwapCount = (symbolData: Models.SymbolData, closePrice: number) => {
    let previousVwap = symbolData.totalTradingAmount / symbolData.totalVolume;
    if (closePrice > previousVwap) {
        symbolData.premktAboveVwapCount++;
    } else if (closePrice < previousVwap) {
        symbolData.premktBelowVwapCount++;
    }
}