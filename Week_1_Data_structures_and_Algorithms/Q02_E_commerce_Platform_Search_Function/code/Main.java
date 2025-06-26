package Week_2_Data_structures_and_Algorithms.Q02_E_commerce_Platform_Search_Function.code;


public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Shoes", "Fashion"),
            new Product(101, "Phone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(102, "Laptop", "Electronics")
        };

        int searchId = 103;

        ProductSearch linearService = new ProductSearch(new LinearSearch());
        ProductSearch binaryService = new ProductSearch(new BinarySearch());

        System.out.println("Linear Search Result: " + linearService.search(products, searchId));
        System.out.println("Binary Search Result: " + binaryService.search(products, searchId));
    }
}
