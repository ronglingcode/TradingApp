import * as Models from '../models/models';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as Firestore from '../firestore';
import type * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as EntryHandler from '../controllers/entryHandler';
import * as OrderFlow from '../controllers/orderFlow';
import * as Helper from '../utils/helper';

interface AlgoState {
    isLong: boolean,
    plan: TradingPlansModels.FirstNewHighPlan,
    logTags: Models.LogTags,
    orderSubmitted: boolean,
}
export let algoStateBySymbol = new Map<string, AlgoState>();

export const TryAutoTrigger = (symbol: string) => {
    let plan = TradingPlans.getTradingPlans(symbol);
    if (plan.long && plan.long.firstNewHighPlan && plan.long.firstNewHighPlan.enableAutoTrigger) {
        TryAutoTriggerForOneSide(symbol, true, plan.long.firstNewHighPlan);
    }
    if (plan.short && plan.short.firstNewHighPlan && plan.short.firstNewHighPlan.enableAutoTrigger) {
        TryAutoTriggerForOneSide(symbol, false, plan.short.firstNewHighPlan);
    }
}

export const TryAutoTriggerForOneSide = (symbol: string, isLong: boolean, plan: TradingPlansModels.FirstNewHighPlan) => {
    if (Models.hasEntryOrdersInSameDirection(symbol, isLong)) {
        Firestore.logError(`already had entries in the same direction, cannot auto trigger first new high`);
        return 0;
    }
    let netQuantity = Models.getPositionNetQuantity(symbol);
    if ((isLong && netQuantity > 0) || (!isLong && netQuantity < 0)) {
        Firestore.logError(`already had position in the same direction, cannot auto trigger first new high`);
        return 0;
    }
    startAlgo(symbol, isLong, true, plan);
}

export const startAlgo = (symbol: string, isLong: boolean, startImmediately: boolean,
    plan: TradingPlansModels.FirstNewHighPlan) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}_firstNewHighAlgo`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    let s = algoStateBySymbol.get(symbol);
    if (s) {
        Firestore.logError(`already having first new high, skip`, logTags);
        return;
    }

    let newState: AlgoState = {
        isLong: isLong,
        plan: plan,
        logTags: logTags,
        orderSubmitted: false,
    };
    algoStateBySymbol.set(symbol, newState);
    if (startImmediately) {
        loop(symbol, newState);
    }
}
export const stopAlgo = (symbol: string) => {
    algoStateBySymbol.delete(symbol);
}

export const loop = (symbol: string, algoState: AlgoState) => {
    let logTags = algoState.logTags;
    let isLong = algoState.isLong;
    let plan = algoState.plan;
    let runResult = EntryHandler.runFirstNewHighPlan(symbol, isLong, plan, algoState.orderSubmitted, logTags);
    if (!runResult.needContinueNextCycle) {
        Firestore.logError(`not continue auto first new high`, logTags);
        stopAlgo(symbol);
    }
    if (runResult.orderSubmitted) {
        algoState.orderSubmitted = true;
    } else {
        Firestore.logInfo(`no entries yet, auto recheck in next cycle`, logTags);
    }
}

export const onMinuteClosed = (symbol: string) => {
    let s = algoStateBySymbol.get(symbol);
    if (s) {
        loop(symbol, s);
    }
}
