package Week_1_Design_Patterns_and_Principles.Q02_FactoryMethodPattern.code.factorymethodpattern;

public class PdfFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}

