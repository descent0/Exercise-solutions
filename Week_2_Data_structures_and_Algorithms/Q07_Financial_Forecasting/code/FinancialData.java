package Week_2_Data_structures_and_Algorithms.Q07_Financial_Forecasting.code;

public class FinancialData {

    private double baseValue;
    private double growthRate;

    public FinancialData(double baseValue, double growthRate) {
        this.baseValue = baseValue;
        this.growthRate = growthRate;
    }

    public double getBaseValue() {
        return baseValue;
    }

    public double getGrowthRate() {
        return growthRate;
    }
}
