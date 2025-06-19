package Week_2_Data_structures_and_Algorithms.Q07_Financial_Forecasting.code;

public class ForecastService {
    private final ForecastStrategy strategy;

    public ForecastService(ForecastStrategy strategy) {
        this.strategy = strategy;
    }

    public double getForecast(FinancialData data, int years) {
        return strategy.forecast(data, years);
    }
}
