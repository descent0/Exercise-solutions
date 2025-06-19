package Week_2_Data_structures_and_Algorithms.Q02_E_commerce_Platform_Search_Function.code;

import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch implements SearchStrategy {
    public Product search(Product[] products, int id) {
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int midId = products[mid].getProductId();
            if (midId == id) return products[mid];
            else if (midId < id) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }
}
