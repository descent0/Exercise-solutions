package com.cognizant.spring_learn;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    private static final ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

    public Country getCountryIndia() {
        return context.getBean("country", Country.class);
    }

    public Country getCountry(String code) {
        List<Country> countryList = (List<Country>) context.getBean("countryList");

        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null); // Optional: handle null later with @ResponseStatus(HttpStatus.NOT_FOUND)
    }
}


