package Week_1_Design_Patterns_and_Principles.Q02_FactoryMethodPattern.code.factorymethodpattern;

public class ExcelFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}

