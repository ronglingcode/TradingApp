import * as Models from '../models';
import * as Helper from '../../utils/helper';
import * as Firestore from '../../firestore';
import * as TradingPlansModels from './tradingPlansModels';
import * as TradingState from '../tradingState';
declare let window: Models.MyWindow;


export const getTradingPlansForSingleDirection = (symbol: string, isLong: boolean) => {
    let plans = getTradingPlans(symbol);
    if (isLong)
        return plans.long;
    else
        return plans.short;
}

export const getTradingPlansWithoutDefault = (symbol: string) => {
    let stocksTradingPlans = window.HybridApp.TradingPlans;
    let isFutures = Helper.isFutures(symbol);
    for (let i = 0; i < stocksTradingPlans.length; i++) {
        const element = stocksTradingPlans[i];
        if (isFutures) {
            if (symbol.startsWith(element.symbol) &&
                element.isFutures == true) {
                return {
                    ...element
                };
            }
        } else {
            if (element.symbol == symbol) {
                return {
                    ...element
                };
            }
        }
    }
    return undefined;
};
export const getTradingPlans = (symbol: string) => {
    let result = getTradingPlansWithoutDefault(symbol);
    if (result) {
        return result;
    }

    return window.HybridApp.TradingPlans[0];
}
export const getLastDefenseForLongInRetracement = (symbol: string) => {
    let p = getTradingPlansForSingleDirection(symbol, true);
    if (p.retracement) {
        return p.retracement.lastDefense;
    }
    return 0;
};
export const getLastDefenseForShortInRetracement = (symbol: string) => {
    let p = getTradingPlansForSingleDirection(symbol, false);
    let resistances: number[] = [];
    if (p.retracement) {
        return p.retracement.lastDefense;
    }
    return 0;
};
export const getMatchingRetracementArea = (symbol: string, isLong: boolean, entryPrice: number) => {
    let pullbackPlan = getTradingPlansForSingleDirection(symbol, isLong).retracement;
    if (!pullbackPlan) {
        return null;
    }
    let areas = pullbackPlan.entryAreas;
    for (let i = 0; i < areas.length; i++) {
        const area = areas[i];
        let pa = area.priceArea;
        if (isWithinRange(entryPrice, pa.priceLevel, pa.upperRoom, pa.lowerRoom)) {
            return area;
        }
    }
    if (pullbackPlan.vwapArea) {
        let currentVwap = Models.getCurrentVwap(symbol);
        let area = pullbackPlan.vwapArea;
        let pa = area.priceArea;
        if (isWithinRange(entryPrice, currentVwap, pa.upperRoom, pa.lowerRoom)) {
            return pullbackPlan.vwapArea;
        }
    }
    let openPrice = Models.getOpenPrice(symbol);
    if (pullbackPlan.openPriceArea && openPrice) {
        let area = pullbackPlan.openPriceArea;
        let pa = area.priceArea;
        if (isWithinRange(entryPrice, openPrice, pa.upperRoom, pa.lowerRoom)) {
            return pullbackPlan.openPriceArea;
        }
    }

    return null;
};
export const getRetracementPriceAreas = (symbol: string, isLong: boolean) => {
    let plan = getTradingPlansForSingleDirection(symbol, isLong);
    if (!plan || !plan.retracement) {
        return [];
    }
    let areas = plan.retracement.entryAreas;
    let result: TradingPlansModels.PriceArea[] = [];
    areas.forEach(area => {
        result.push(area.priceArea);
    });
    return result;
};

const isWithinRange = (entry: number, target: number, upperRoom: number, lowerRoom: number) => {
    let upperPrice = target + upperRoom;
    let lowerPrice = target - lowerRoom;
    return (lowerPrice <= entry) && (entry <= upperPrice);
};

export const fetchConfigData = async () => {
    let data = await Firestore.fetchConfigData();
    let stockSelections: string[] = [];
    let tradingPlans: TradingPlansModels.TradingPlans[] = [];
    let activeProfileName = '';
    let tradingSettings: TradingPlansModels.TradingSettings = {
        equalWeightDivider: 0,
        useSingleOrderForEntry: false,
    };
    if (data) {
        tradingPlans = data.plans as TradingPlansModels.TradingPlans[];
        tradingPlans.forEach(tp => {
            populateTradingPlan(tp);
        });
        stockSelections = data.stockSelections as string[];
        activeProfileName = data.activeProfileName;
        tradingSettings = data.tradingSettings;
    }
    return {
        tradingPlans: tradingPlans,
        stockSelections: stockSelections,
        activeProfileName: activeProfileName,
        tradingSettings: tradingSettings,
    };
}

const populateTradingPlan = (plan: TradingPlansModels.TradingPlans) => {
    if (plan.long.firstNewHighPlan) {
        let subPlan = plan.long.firstNewHighPlan;
        if (subPlan.includeSecondNewHigh && !plan.long.secondNewHighPlan) {
            plan.long.secondNewHighPlan = {
                ...subPlan
            }
        }
    }
    if (plan.short.firstNewHighPlan) {
        let subPlan = plan.short.firstNewHighPlan;
        if (subPlan.includeSecondNewHigh && !plan.short.secondNewHighPlan) {
            plan.short.secondNewHighPlan = {
                ...subPlan
            }
        }
    }
}
export const getTradingSettings = () => {
    return window.HybridApp.TradingData.tradingSettings;
}

export const getVwapCorrection = (symbol: string) => {
    let plans = getTradingPlans(symbol);
    return plans.vwapCorrection;
};

export const getKeyAreasToDraw = (symbol: string) => {
    let results: Models.KeyAreaToDraw[] = [];
    let p = getTradingPlans(symbol);
    if (p.long.retracement) {
        let r = p.long.retracement;
        r.entryAreas.forEach(area => {
            let pa = area.priceArea;
            let item: Models.KeyAreaToDraw = {
                upperPrice: pa.priceLevel + pa.upperRoom,
                lowerPrice: pa.priceLevel - pa.lowerRoom,
                direction: 1,
            };
            results.push(item);
        });
    }
    if (p.short.retracement) {
        let r = p.short.retracement;
        r.entryAreas.forEach(area => {
            let pa = area.priceArea;
            let item: Models.KeyAreaToDraw = {
                upperPrice: pa.priceLevel + pa.upperRoom,
                lowerPrice: pa.priceLevel - pa.lowerRoom,
                direction: -1,
            };
            results.push(item);
        });
    }
    return results;
}

export const getBreakoutEntryPrice = (symbol: string, isLong: boolean, algo: TradingPlansModels.BreakoutAlgo) => {
    if (algo.useHighLowOfDay) {
        let symbolData = Models.getSymbolData(symbol);
        if (isLong) {
            return symbolData.highOfDay;
        } else {
            return symbolData.lowOfDay;
        }
    } else {
        return algo.entryPrice;
    }
}

/**
 * @returns reason if trading plan is not valid. Empty string if valid.
 */
export const validateTradingPlans = (symbol: string, tradingPlans: TradingPlansModels.TradingPlans) => {
    let atr = tradingPlans.atr;
    if (atr.average <= 0 || atr.mutiplier <= 0 || atr.minimumMultipler <= 0) {
        return "missing atr";
    }
    /*
    if (atr.maxRisk <= 0) {
        return "miss max risk in ATR";
    }*/
    let keyLevels = tradingPlans.keyLevels;
    if (keyLevels.momentumStartForLong <= 0) {
        return "missing momentumStartForLong";
    }
    if (keyLevels.momentumStartForShort <= 0) {
        return "missing momentumStartForShort";
    }

    if (hasFirst60SecondsPlan(tradingPlans)) {
        let gapType = tradingPlans.analysis.gapType;
        if (gapType != TradingPlansModels.GapType.Outside) {
            return "first 60 seconds plan not allowed if not gapped outside of daily range";
        }
    }

    let longPlans = flattenPlans(tradingPlans.long);
    for (let i = 0; i < longPlans.length; i++) {
        let onePlan = longPlans[i];
        let checkResult = validateTargets(onePlan.targets);
        if (checkResult) {
            return checkResult;
        }
    }

    let shortPlans = flattenPlans(tradingPlans.short);
    for (let i = 0; i < shortPlans.length; i++) {
        let onePlan = shortPlans[i];
        let checkResult = validateTargets(onePlan.targets);
        if (checkResult) {
            return checkResult;
        }
    }

    if (!hasReasons(tradingPlans.long)) {
        return "no reasons for long";
    }
    if (!hasReasons(tradingPlans.short)) {
        return "no reasons for short";
    }

    return "";
};
export const hasReasons = (plan: TradingPlansModels.SingleDirectionPlans) => {
    let reasons = plan.reasons;
    for (let i = 0; i < reasons.length; i++) {
        let r = reasons[i];
        for (let j = 0; j < r.length; j++) {
            if (r[j].length > 0) {
                return true;
            }
        }
    }
    return false;
}
export const flattenPlans = (plan: TradingPlansModels.SingleDirectionPlans) => {
    let results: TradingPlansModels.BasePlan[] = [];
    if (plan.openDriveContinuation60Plan) {
        results.push(plan.openDriveContinuation60Plan);
    }
    if (plan.profitTakingExhaust60Plan) {
        results.push(plan.profitTakingExhaust60Plan);
    }
    if (plan.profitTakingFade60Plan) {
        results.push(plan.profitTakingFade60Plan);
    }
    if (plan.premarket2ndBreakout60Plan) {
        results.push(plan.premarket2ndBreakout60Plan);
    }
    if (plan.falseBreakoutPlan) {
        results.push(plan.falseBreakoutPlan);
    }
    if (plan.firstBreakoutPlan) {
        results.push(plan.firstBreakoutPlan);
    }
    if (plan.redtoGreenPlan) {
        results.push(plan.redtoGreenPlan);
    }
    if (plan.firstNewHighPlan) {
        results.push(plan.firstNewHighPlan);
    }
    if (plan.levelBreakout) {
        results.push(plan.levelBreakout);
    }
    if (plan.secondNewHighPlan) {
        results.push(plan.secondNewHighPlan);
    }

    return results;
}
export const validateTargets = (targets: TradingPlansModels.ExitTargets) => {
    if (!noZero(targets.initialTargets.dailyRanges)) {
        return "zero in initial targets using ATR";
    }
    if (!targets.minimumTargets) {
        return "no minimum targets";
    }
    if (!noZero(targets.minimumTargets.dailyRanges)) {
        return "zero in minimum targets using ATR";
    }
    return "";
}

export const noZero = (numbers: number[]) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            return false;
        }
    }
    return true;
}

export const hasFirst60SecondsPlan = (tradingPlans: TradingPlansModels.TradingPlans) => {
    return hasFirst60PlanForOneSide(tradingPlans.long) ||
        hasFirst60PlanForOneSide(tradingPlans.short);
}
export const hasFirst60PlanForOneSide = (plan: TradingPlansModels.SingleDirectionPlans) => {
    return plan.profitTakingExhaust60Plan ||
        plan.profitTakingFade60Plan ||
        plan.premarket2ndBreakout60Plan ||
        plan.openDriveContinuation60Plan;
}