import * as Helper from '../utils/helper';
import * as Models from '../models/models';
import * as Firestore from '../firestore';
import * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as TradingPlans from '../models/tradingPlans/tradingPlans';
import * as EntryHandler from '../controllers/entryHandler';
import * as Patterns from './patterns';
import * as Rules from './rules';
import * as Broker from '../api/broker';

interface AlgoState {
    timeoutID: NodeJS.Timeout,
    initialSizeMultiplier: number,
    planType: TradingPlansModels.PlanType,
    isLong: boolean,
    hasPendingCondition: boolean,
    pendingConditionPassed: boolean
}
export let algoStateBySymbol = new Map<string, AlgoState>();

export const startAlgo = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.BasePlan, planType: TradingPlansModels.PlanType) => {
    let logTags = Models.generateLogTags(symbol, `${symbol}_${planType}`);
    Firestore.logInfo(logTags.logSessionName, logTags);
    // make sure there's no already same algo
    let currentState = algoStateBySymbol.get(symbol);
    if (currentState) {
        Firestore.logError(`already having RedToGreen60 as ${currentState.planType}, skip`, logTags);
        return;
    }

    let seconds = Helper.getSecondsSinceMarketOpen(new Date());
    if (seconds > 60) {
        Firestore.logError(`expired after 1st minute`, logTags);
        return;
    }

    let waitSeconds = 0.01;
    Firestore.logInfo(`schedule RedToGreen60 as ${planType}`, logTags);
    let loopId = setTimeout(() => {
        loop(symbol, isLong, true, plan, planType, logTags);
    }, waitSeconds * 1000);
    let newState: AlgoState = {
        timeoutID: loopId,
        initialSizeMultiplier: 0,
        planType: planType,
        isLong: isLong,
        hasPendingCondition: false,
        pendingConditionPassed: false,
    }
    algoStateBySymbol.set(symbol, newState);
}

export const stopAlgo = (symbol: string) => {
    let s = algoStateBySymbol.get(symbol);
    if (s) {
        clearTimeout(s.timeoutID);
        algoStateBySymbol.delete(symbol);
    }
}
export const checkPendingCondition = (symbol: string) => {
    let s = algoStateBySymbol.get(symbol);
    if (!s || !s.hasPendingCondition || s.pendingConditionPassed) {
        return;
    }
    if (s.planType == TradingPlansModels.PlanType.OpenDriveContinuation60 ||
        s.planType == TradingPlansModels.PlanType.ProfitTakingExhuast60 ||
        s.planType == TradingPlansModels.PlanType.ProfitTakingFade60) {
        let hasReversal = Patterns.hasReversalBarSinceOpen(symbol, s.isLong, true, true);
        if (hasReversal) {
            s.pendingConditionPassed = true;
            Firestore.logInfo(`${symbol} pending condition passed`);
        }
    } else if (s.planType == TradingPlansModels.PlanType.Premarket2ndBreakout60) {
        let hasRetracementFromPremarket = Patterns.hasRetracementFromPremarket(symbol, s.isLong);
        if (hasRetracementFromPremarket) {
            s.pendingConditionPassed = true;
            Firestore.logInfo(`${symbol} pending condition passed`);
        }
    }
}
const prepareNextLoop = (waitInSeconds: number, symbol: string, isLong: boolean,
    plan: TradingPlansModels.BasePlan, planType: TradingPlansModels.PlanType, logTags: Models.LogTags) => {
    let loopId = setTimeout(() => {
        loop(symbol, isLong, false, plan, planType, logTags);
    }, waitInSeconds * 1000);
    let s = algoStateBySymbol.get(symbol);
    if (s) {
        s.timeoutID = loopId;
        algoStateBySymbol.set(symbol, s);
    }

}
export const loop = (symbol: string, isLong: boolean, isFirstLoop: boolean,
    plan: TradingPlansModels.BasePlan, planType: TradingPlansModels.PlanType, logTags: Models.LogTags) => {
    let algoState = algoStateBySymbol.get(symbol);
    if (!algoState) {
        Firestore.logInfo('algo canceled, existing', logTags);
        return;
    }

    let secondsSinceMarketOpen = Helper.getSecondsSinceMarketOpen(new Date());
    if (secondsSinceMarketOpen > 60) {
        Firestore.logInfo('exiting after 60 seconds', logTags);
        algoStateBySymbol.delete(symbol);
        return;
    }

    // wait for conditions to meet to submit orders
    if (planType == TradingPlansModels.PlanType.Premarket2ndBreakout60) {
        runAsPremarket2ndBreakout(symbol, isLong, isFirstLoop, plan, planType, logTags);
    } else if (planType == TradingPlansModels.PlanType.OpenDriveContinuation60) {
        runAsOpeningDriveContinuation(symbol, isLong, isFirstLoop, plan, planType, logTags);
    } else if (planType == TradingPlansModels.PlanType.ProfitTakingFade60) {
        runAsProfitTakingFade(symbol, isLong, isFirstLoop, plan as TradingPlansModels.ProfitTakingFade60Plan, planType, logTags);
    } else if (planType == TradingPlansModels.PlanType.ProfitTakingExhuast60) {
        runAsProfitTakingExhuast(symbol, isLong, isFirstLoop, plan, planType, logTags);
    }
}
const runAsProfitTakingFade = (symbol: string, isLong: boolean, isFirstLoop: boolean,
    plan: TradingPlansModels.ProfitTakingFade60Plan, planType: TradingPlansModels.PlanType, logTags: Models.LogTags) => {
    let checkedPassed = checkLiquidityAndDailyRange(symbol, isLong, isFirstLoop, plan, planType, logTags);
    if (!checkedPassed) {
        return;
    }
    let hasReversal = Patterns.hasReversalBarSinceOpen(symbol, isLong, true, true);
    let s = algoStateBySymbol.get(symbol);
    if (!s) {
        logError(isFirstLoop, `no algo state, existing`, logTags);
        return;
    }
    if (!isLong && plan.onlyIfOpenBelow > 0) {
        let openPrice = Models.getOpenPrice(symbol);
        if (openPrice && openPrice >= plan.onlyIfOpenBelow) {
            logError(isFirstLoop, `open price ${openPrice} is not below ${plan.onlyIfOpenBelow} `, logTags);
            return;
        }
    }
    if (!hasReversal && !s.pendingConditionPassed) {
        logError(isFirstLoop, `not reversal, recheck after 0.4 seconds`, logTags);
        if (!s.hasPendingCondition) {
            Firestore.logInfo(`set pending condition for ${symbol}`, logTags);
            s.hasPendingCondition = true;
        }
        prepareNextLoop(0.4, symbol, isLong, plan, planType, logTags);
        return;
    }
    // TODO: check price is below vwap
    runPlan(symbol, isLong, plan, planType, logTags);
}
const runAsProfitTakingExhuast = (symbol: string, isLong: boolean, isFirstLoop: boolean,
    plan: TradingPlansModels.OpenDriveContinuation60Plan, planType: TradingPlansModels.PlanType, logTags: Models.LogTags) => {
    let checkedPassed = checkLiquidityAndDailyRange(symbol, isLong, isFirstLoop, plan, planType, logTags);
    if (!checkedPassed) {
        return;
    }
    let hasReversal = Patterns.hasReversalBarSinceOpen(symbol, isLong, true, true);
    let s = algoStateBySymbol.get(symbol);
    if (!s) {
        logError(isFirstLoop, `no algo state, existing`, logTags);
        return;
    }
    if (!hasReversal && !s.pendingConditionPassed) {
        logError(isFirstLoop, `not reversal, recheck after 0.4 seconds`, logTags);
        if (!s.hasPendingCondition) {
            Firestore.logInfo(`set pending condition for ${symbol}`, logTags);
            s.hasPendingCondition = true;
        }
        prepareNextLoop(0.4, symbol, isLong, plan, planType, logTags);
        return;
    }
    // TODO: check no pullback to vwap in last 30 minutes before open
    runPlan(symbol, isLong, plan, planType, logTags);
}
const runAsOpeningDriveContinuation = (symbol: string, isLong: boolean, isFirstLoop: boolean,
    plan: TradingPlansModels.OpenDriveContinuation60Plan, planType: TradingPlansModels.PlanType, logTags: Models.LogTags) => {
    let checkedPassed = checkLiquidityAndDailyRange(symbol, isLong, isFirstLoop, plan, planType, logTags);
    if (!checkedPassed) {
        return;
    }
    let hasReversal = Patterns.hasReversalBarSinceOpen(symbol, isLong, true, true);
    let s = algoStateBySymbol.get(symbol);
    if (!s) {
        logError(isFirstLoop, `no algo state, existing`, logTags);
        return;
    }
    if (!hasReversal && !s.pendingConditionPassed) {
        logError(isFirstLoop, `not reversal, recheck after 0.4 seconds`, logTags);
        if (!s.hasPendingCondition) {
            Firestore.logInfo(`set pending condition for ${symbol}`, logTags);
            s.hasPendingCondition = true;
        }
        prepareNextLoop(0.4, symbol, isLong, plan, planType, logTags);
        return;
    }
    runPlan(symbol, isLong, plan, planType, logTags);
}

const runAsPremarket2ndBreakout = (symbol: string, isLong: boolean, isFirstLoop: boolean,
    plan: TradingPlansModels.Premarket2ndBreakout60Plan, planType: TradingPlansModels.PlanType, logTags: Models.LogTags) => {
    let checkedPassed = checkLiquidityAndDailyRange(symbol, isLong, isFirstLoop, plan, planType, logTags);
    if (!checkedPassed) {
        return;
    }
    let s = algoStateBySymbol.get(symbol);
    if (!s) {
        logError(isFirstLoop, `no algo state, existing`, logTags);
        return;
    }
    let hasPremarketBreakout = Patterns.hasPremarketBreakout(symbol, isLong);
    if (!hasPremarketBreakout) {
        logError(isFirstLoop, "no 1st break premarket level yet, recheck after 0.4 seconds", logTags);
        prepareNextLoop(0.4, symbol, isLong, plan, planType, logTags);
        return;
    }
    let hasRetracementFromPremarket = Patterns.hasRetracementFromPremarket(symbol, isLong);
    if (!hasRetracementFromPremarket && !s.pendingConditionPassed) {
        logError(isFirstLoop, "not back into premarket level, opponent not step in yet recheck after 0.4 seconds", logTags);
        if (s.hasPendingCondition) {
            Firestore.logInfo(`set pending condition for ${symbol}`, logTags);
            s.hasPendingCondition = true;
        }
        prepareNextLoop(0.4, symbol, isLong, plan, planType, logTags);
        return;
    }

    runPlan(symbol, isLong, plan, planType, logTags);
}
const checkLiquidityAndDailyRange = (symbol: string, isLong: boolean, isFirstLoop: boolean,
    plan: TradingPlansModels.Premarket2ndBreakout60Plan, planType: TradingPlansModels.PlanType, logTags: Models.LogTags) => {
    let scale = Models.getLiquidityScale(symbol);
    if (scale == 0) {
        logError(isFirstLoop, `not enough liquidity, recheck after 0.4 seconds`, logTags);
        prepareNextLoop(0.4, symbol, isLong, plan, planType, logTags);
        return false;
    } else {
        Firestore.logInfo(`liquidity pass with ${scale}`);
    }
    let enoughAtr = meetAtrRule(symbol, logTags);
    if (!enoughAtr) {
        logError(isFirstLoop, `range too small, recheck after 0.4 seconds`, logTags);
        prepareNextLoop(0.4, symbol, isLong, plan, planType, logTags);
        return false;
    }
    return true;
}
const runPlan = (symbol: string, isLong: boolean,
    plan: TradingPlansModels.Premarket2ndBreakout60Plan,
    planType: TradingPlansModels.PlanType, logTags: Models.LogTags) => {
    let algoState = algoStateBySymbol.get(symbol);
    if (!algoState) {
        Firestore.logInfo('algo canceled, existing', logTags);
        return;
    }
    algoState.initialSizeMultiplier = EntryHandler.runRedToGreen60Plan(symbol, isLong, plan, planType, logTags);
    if (algoState.initialSizeMultiplier <= 0) {
        Firestore.logError(`size is 0, existing algo`);
    }
    algoStateBySymbol.delete(symbol);
    if (planType == TradingPlansModels.PlanType.ProfitTakingExhuast60 ||
        planType == TradingPlansModels.PlanType.ProfitTakingFade60
    ) {
        let seconds = Helper.getSecondsSinceMarketOpen(new Date());
        let waitSeconds = 59 - seconds;
        setTimeout(() => {
            // cancel entry if not triggered in the first 60 seconds
            Broker.cancelBreakoutEntryOrders(symbol);
        }, waitSeconds * 1000);

    }
}
const logError = (isFirstLoop: boolean, msg: string, logTags: Models.LogTags) => {
    if (isFirstLoop) {
        Firestore.logError(msg, logTags);
    } else {
        Firestore.logError(msg, logTags);
    }
}

const meetAtrRule = (symbol: string, logTags: Models.LogTags) => {
    let plan = TradingPlans.getTradingPlans(symbol);
    let atr = plan.atr;
    return !Rules.isDailyRangeTooSmall(symbol, atr, true, logTags);
}
