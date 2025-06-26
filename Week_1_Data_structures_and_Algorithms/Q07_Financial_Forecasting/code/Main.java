package Week_2_Data_structures_and_Algorithms.Q07_Financial_Forecasting.code;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter base amount (e.g., 1000): ");
        double base = scanner.nextDouble();

        System.out.print("Enter annual growth rate (in %): ");
        double ratePercent = scanner.nextDouble();
        double rate = ratePercent / 100.0;  

        System.out.print("Enter number of years to forecast: ");
        int years = scanner.nextInt();

        FinancialData data = new FinancialData(base, rate);
        ForecastService service = new ForecastService(new RecursiveForecast());

        double result = service.getForecast(data, years);

        System.out.printf(" Predicted Value after %d years: %.2f\n", years, result);

        scanner.close();
    }
}