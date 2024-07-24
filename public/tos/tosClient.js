import * as webRequest from '../../src/utils/webRequest';
import * as TimeHelper from '../../src/utils/timeHelper';
import * as Broker from '../../src/api/broker';
import * as Watchlist from '../../src/algorithms/watchlist';
import * as TradingState from '../../src/models/tradingState';
import * as Models from '../../src/models/models';
import { Firestore } from 'firebase/firestore';

window.TradingApp.TOS = (function () {
    let userPrincipal = {};
    const initialize = async () => {
        let r0 = await Models.setConfigData();
        let r1 = await Broker.refreshAccessToken();
        let r2 = await createWatchlist();
        let r4 = await setInitialAccount();
    };

    /* #region Account */

    const setInitialAccount = async () => {
        let brokerAccount = await Broker.syncAccount();
        let result = false;
        if (brokerAccount) {
            let result = await TradingState.initializeTradingState(brokerAccount)
        }
        if (!TimeHelper.isMarketOpen()) {
            let a = Models.getPositionSymbols();
            if (a.length > 0) {
                alert(`has overnight position: ${a}`);
            }
        }
        return result;
    };
    /* #endregion */
    const createWatchlist = async () => {
        let stocks = await Watchlist.createWatchlist();
        TradingState.addStocksFromWatchlist(stocks);
        return stocks;
    };

    return {
        createWatchlist,
        initialize,
        userPrincipal,
    }
})();