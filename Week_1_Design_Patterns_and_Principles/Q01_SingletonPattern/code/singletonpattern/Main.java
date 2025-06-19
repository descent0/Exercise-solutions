package Week_1_Design_Patterns_and_Principles.Q01_SingletonPattern.code.singletonpattern;

public class Main {
    public static void main(String[] args) {
       Logger logger1 = Logger.getInstance();
        logger1.log("First log");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second log");

        System.out.println("Same instance? " + (logger1 == logger2)); 
    }
}
