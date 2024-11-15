package com.itheima;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AxiosDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(AxiosDemoApplication.class, args);
        System.out.println("http://localhost:8080/article/getAll");
    }

}
