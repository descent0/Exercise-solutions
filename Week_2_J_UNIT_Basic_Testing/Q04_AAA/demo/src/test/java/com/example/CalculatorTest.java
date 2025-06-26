package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        calculator = null;
    }

    @Test
    public void testAddTwoPositiveNumbers() {
        int result = calculator.add(10, 5);
        assertEquals(15, result);
    }

    @Test
    public void testAddWithNegativeNumber() {
        int result = calculator.add(-3, 7);
        assertEquals(4, result);
    }
}
