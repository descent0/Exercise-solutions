package Week_2_Data_structures_and_Algorithms.Q02_E_commerce_Platform_Search_Function.code;


public class LinearSearch implements SearchStrategy {
    public Product search(Product[] products, int id) {
        for (Product p : products) {
            if (p.getProductId() == id) return p;
        }
        return null;
    }
}
