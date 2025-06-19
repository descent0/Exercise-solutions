package Week_1_Design_Patterns_and_Principles.Q02_FactoryMethodPattern.code.factorymethodpattern;

public class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF document...");
    }
}

