import * as Models from '../models/models';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as Firestore from '../firestore';
import type * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as AutoFirstNewHigh from './autoFirstNewHigh';
import * as AutoRedToGreen from './autoRedToGreen';
import * as Helper from '../utils/helper';

interface AlgoState {
    isLong: boolean,
    plan: TradingPlansModels.FirstBreakoutPlan,
    logTags: Models.LogTags,
}
export let algoStateBySymbol = new Map<string, AlgoState>();

export const startAlgo = (symbol: string, isLong: boolean,
    shiftKey: boolean, plan: TradingPlansModels.FirstBreakoutPlan) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}_1st-breakout-algo`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let s = algoStateBySymbol.get(symbol);
    if (s) {
        Firestore.logError(`already having first breakout algo, skip`, logTags);
        return;
    }

    let newState: AlgoState = {
        isLong: isLong,
        plan: plan,
        logTags: logTags,
    };
    let mainPlan = TradingPlans.getTradingPlansForSingleDirection(symbol, isLong);
    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(new Date());
    if (secondsSinceMarketOpen > 120) {
        Firestore.logInfo(`had 2 minutes, skip red to green and start first new high immediately`, logTags);
        if (mainPlan.firstNewHighPlan) {
            algoStateBySymbol.set(symbol, newState);
            AutoFirstNewHigh.startAlgo(symbol, isLong, true, mainPlan.firstNewHighPlan);
        }
    } else {
        // start red to green and schedule first new high
        if (mainPlan.redtoGreenPlan) {
            algoStateBySymbol.set(symbol, newState);
            AutoRedToGreen.startAlgo(symbol, isLong, mainPlan.redtoGreenPlan);
        }
        if (mainPlan.firstNewHighPlan) {
            algoStateBySymbol.set(symbol, newState);
            AutoFirstNewHigh.startAlgo(symbol, isLong, false, mainPlan.firstNewHighPlan);
        }
    }
}
export const stopAlgo = (symbol: string) => {
    algoStateBySymbol.delete(symbol);
}