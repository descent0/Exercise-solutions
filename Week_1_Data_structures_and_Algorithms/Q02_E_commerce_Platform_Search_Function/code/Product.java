package Week_2_Data_structures_and_Algorithms.Q02_E_commerce_Platform_Search_Function.code;

public class Product {
    private int productId;
    private String productName;
    private String category;

    public Product(int id, String name, String category) {
        this.productId = id;
        this.productName = name;
        this.category = category;
    }

    public int getProductId() { return productId; }

    @Override
    public String toString() {
        return "[" + productId + "] " + productName + " - " + category;
    }
}
