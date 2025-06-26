package Week_2_Data_structures_and_Algorithms.Q07_Financial_Forecasting.code;

public class RecursiveForecast implements ForecastStrategy {

    public double forecast(FinancialData data, int years) {
        if (years == 0) {
            return data.getBaseValue();
        }
        return (1 + data.getGrowthRate()) * forecast(data, years - 1);
    }
}