package Week_2_Data_structures_and_Algorithms.Q02_E_commerce_Platform_Search_Function.code;

public class ProductSearch {
    private final SearchStrategy strategy;

    public ProductSearch(SearchStrategy strategy) {
        this.strategy = strategy;
    }

    public Product search(Product[] products, int id) {
        return strategy.search(products, id);
    }
}