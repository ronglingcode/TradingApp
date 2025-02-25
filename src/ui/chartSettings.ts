import * as LightweightCharts from 'sunrise-tv-lightweight-charts';
export const defaultRed = 'rgb(255,82,82)';
export const defaultGreen = 'rgb(38,166,154)';
export const bigChartSize = {
    width: 930,
    height: 780,
};
export const focusChartSize = {
    width: 600,
    height: 550,
};
export const quarterChartSize = {
    width: 455,
    height: 330,
};
export const chartSettings = {
    width: focusChartSize.width,
    height: focusChartSize.height,
    layout: {
        background: {
            color: '#bdbdbd'
        },
        textColor: 'rgba(33, 56, 77, 1)',
    },
    grid: {
        horzLines: {
            //color: '#F0F3FA',
            visible: false,
        },
        vertLines: {
            //color: '#F0F3FA',
            visible: false,
        },
    },
    /* comment out because LightweightCharts is not loaded
    crosshair: {
        mode: LightweightCharts.CrosshairMode.Normal,
    },*/
    crosshair: {
        mode: 0,
        vertLine: {
            style: 0, //LightweightCharts.LineStyle.Solid
        },
        horzLine: {
            style: 0, //LightweightCharts.LineStyle.Solid
        }
    },
    rightPriceScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)'
    },
    timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
        timeVisible: true,
        //fixRightEdge: true,
        //fixLeftEdge: true,
        rightOffset: 10,
        barSpacing: 10
    },
    /*
    grid: {
        vertLines: { visible: false },
        horzLines: { visible: false }
    }*/
};

export const getChartSettings = (tabIndex: number, totalCount: number) => {
    let width = focusChartSize.width;
    let height = focusChartSize.height;
    if (totalCount > 1) {
        width = quarterChartSize.width;
        height = quarterChartSize.height;
    }

    // always return 1/3 of the screen as 3 stock width
    return {
        ...chartSettings,
        height: height,
        width: width,
        //width: threeStocksWidth,
    };
    /*

    let stocksCount = Models.getWatchlist().length;
    if (stocksCount == 4 || stocksCount == 1) {
        return chartSettings;
    } else if (stocksCount == 2) {
        return {
            ...chartSettings,
            width: wideWidth
        };
    } else if (stocksCount == 3) {
        if (tabIndex == 0 || tabIndex == 2) {
            return chartSettings;
        } else {
            return {
                ...chartSettings,
                width: wideWidth
            };
        }
    } else if (stocksCount == 5) {
        if (tabIndex % 2 == 0) {
            return {
                ...chartSettings,
                width: threeStocksWidth
            };
        } else {
            return chartSettings;
        }
    } else if (stocksCount == 6) {
        return {
            ...chartSettings,
            width: threeStocksWidth
        };
    } else if (stocksCount == 7) {
        if (tabIndex % 2 == 0) {
            return {
                ...chartSettings,
                width: fourStocksWidth
            };
        } else {
            return {
                ...chartSettings,
                width: threeStocksWidth
            };
        }
    } else if (stocksCount == 8) {
        return {
            ...chartSettings,
            width: fourStocksWidth
        };
    }*/
}

export const candlestickSeriesSettings = {
    //upColor: '#08b265',
    //downColor: '#fb3434',// 'rgb(255,82,82)',
    //wickUpColor: '#08b265',// '#26a69a',// 'rgb(38,166,154)',
    //wickDownColor: '#fb3434',// '#ac2e2e',//'rgb(255,82,82)',
    borderVisible: false,
    scaleMargins: {
        top: 0,
        bottom: 0.3,
    },
};
export const volumeSeriesSettings: any = {
    color: '#E1F5FE',
    priceFormat: {
        type: 'volume',
    },
    priceScaleId: '',
    scaleMargins: {
        top: 0.7,
        bottom: 0,
    },
    priceLineVisible: false
};
export const vwapSettings: any = {
    color: '#6a1b9a',
    lineWidth: 1,
    crosshairMarkerVisible: false,
    autoscaleInfoProvider: () => null,
    priceLineVisible: false
};

export const cloudAreaCandleSettings = {
    upColor: '#EFEBE9',
    downColor: '#EFEBE9',
    wickUpColor: '#EFEBE9',
    wickDownColor: '#EFEBE9',
    borderVisible: false,
    lastValueVisible: false,
    autoscaleInfoProvider: () => null,
    priceLineVisible: false
};

export const keyAreaCandleSettings = {
    upColor: '#E8F5E9',
    downColor: '#FFEBEE',
    wickUpColor: '#E8F5E9',
    wickDownColor: '#FFEBEE',
    borderVisible: false,
    lastValueVisible: false,
    autoscaleInfoProvider: () => null,
    priceLineVisible: false
};
export const cloudLineSettings: any = {
    color: 'rgba(17, 17 ,31,0.7)',
    lineWidth: 2,
    crosshairMarkerVisible: false,
    autoscaleInfoProvider: () => null,
    lastValueVisible: false,
    lineStyle: 3, //LightweightCharts.LineStyle.LargeDashed,
    priceLineVisible: false
};

export const preMarketLineSettings: any = {
    color: 'black',
    lineWidth: 1,
    autoscaleInfoProvider: () => null,
    crosshairMarkerVisible: false,
    lastValueVisible: false,
    priceLineVisible: false
};

export const openRangeLineSettings: any = {
    lineWidth: 1,
    crosshairMarkerVisible: false,
    priceLineVisible: false,
    lastValueVisible: false,
    autoscaleInfoProvider: () => null
};
