/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import * as WebRequest from './utils/webRequest';
import * as Helper from './utils/helper';
import * as TimeHelper from './utils/timeHelper';
import * as Firestore from './firestore';
import * as Broker from './api/broker';
import * as MarketData from './api/marketData';
import * as tdaApi from './api/tdAmeritrade/api';
import * as schwabApi from './api/schwab/api';
import * as alpacaApi from './api/alpaca/api';
import * as Handler from './controllers/handler';
import * as OrderFlow from './controllers/orderFlow';
import * as Chart from './ui/chart';
import * as UI from './ui/ui';
import * as Config from './config/config';
import * as TakeProfit from './algorithms/takeProfit';
import * as RiskManager from './algorithms/riskManager';
import * as Patterns from './algorithms/patterns';
import * as Watchlist from './algorithms/watchlist';
import * as Models from './models/models';
import * as TradingState from './models/tradingState';
import * as TradingPlans from './models/tradingPlans/tradingPlans';
import * as TvTools from './tools/tradingview';

declare let window: Models.MyWindow;

window.HybridApp.Algo = {
  TakeProfit: TakeProfit,
  RiskManager: RiskManager,
  Watchlist: Watchlist
};
window.HybridApp.Api = {
  Broker: Broker,
  MarketData: MarketData,
  TdaApi: tdaApi,
  SchwabApi: schwabApi,
  AlpacaApi: alpacaApi,
};
window.HybridApp.Config = Config;
window.HybridApp.Controllers = {
  Handler: Handler,
  OrderFlow: OrderFlow,
};

window.HybridApp.Models = {
  Models: Models,
  TradingState: TradingState,
  TradingPlans: TradingPlans,
};
window.HybridApp.UI = {
  Chart: Chart,
  UI: UI,
};
window.HybridApp.Utils = {
  'Helper': Helper,
  'WebRequest': WebRequest,
  TimeHelper: TimeHelper,
};
window.HybridApp.Firestore = Firestore;

let showExecutionButton = document.getElementById("show_execution");
if (showExecutionButton) {
  showExecutionButton.addEventListener("click", () => {
    Broker.generateExecutionScript();
  });
}

let exportButton = document.getElementById("export_trades");
if (exportButton) {
  exportButton.addEventListener("click", () => {
    TvTools.exportTrades();
  });
}
let sqlButton = document.getElementById("sql");
if (sqlButton) {
  sqlButton.addEventListener("click", () => {
    let datestr = '2024-05-31';
    Firestore.logInfo(`insert into [dbo].[daily_stocks] (id, symbol, datestr) values ('mdb-${datestr}','mdb','${datestr}'`);
    Firestore.logInfo(`insert into [dbo].[daily_trades] (datestr, symbol,daily_stock) values ('2024-05-31','mdb','mdb-2024-05-31');`);
  });
}

let checkQuantityButton = document.getElementById("check_quantity");
if (checkQuantityButton) {
  checkQuantityButton.addEventListener("click", () => {
    let watchlist = Models.getWatchlist();
    watchlist.forEach(item => {
      let q = RiskManager.getQuanityWithoutStopLoss(item.symbol);
      if (q > 0) {
        Firestore.logError(`has ${q} shares without stop loss`);
      } else {
        Firestore.logInfo("check quantity is good");
      }
    });
  });
}

let syncAccountButton = document.getElementById("update_account_ui");
if (syncAccountButton) {
  syncAccountButton.addEventListener("click", () => {
    Chart.updateAccountUIStatus([]);
  });
}

let checkWaveButton = document.getElementById("wave");
if (checkWaveButton) {
  checkWaveButton.addEventListener("click", () => {
    Patterns.checkWave();
  });
}
Firestore.addToLogView('version 1.32', 'Info');
