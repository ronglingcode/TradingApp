import type * as TradingPlansModels from '../models/tradingPlans/tradingPlansModels';
import * as TakeProfit from '../algorithms/takeProfit';

const R2Target: TradingPlansModels.ExitTargets = {
    initialTargets: {
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rrr: [0.9, 0.95, 1.5, 1.8, 1.85, 1.9, 1.95, 2, 2.5, 3],
        dailyRanges: [1, 1, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    minimumTargets: {
        rrr: [0.9, 0.95, 1.3, 1.5, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9],
        priceLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dailyRanges: [0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1],
    },
    wave3BatchIndexStart: TakeProfit.BatchCount - 2,
    wave5BatchIndexStart: TakeProfit.BatchCount - 1,
    trail5Count: 1,
    trail15Count: 1,
};
export const overrideTradingPlans = (plan: TradingPlansModels.BasePlan,
    planType: TradingPlansModels.PlanType) => {
    plan.planType = planType;
    if (plan.planConfigs.allowFirstFewExitsCount > 2) {
        plan.planConfigs.allowFirstFewExitsCount = 2;
    }
    https://sunrisetrading.atlassian.net/browse/TPS-393
    // focus on easy trend trade, ignore scalps for now
    plan.planConfigs.size = 0.24;
    plan.planConfigs.allowEarlyExits = false;
    plan.planConfigs.alwaysAllowStopOutOrFlatten = false;

}

