package com.example.demo.model;

import java.util.UUID;

public class Company {
    private UUID id = UUID.randomUUID();
    private String name;
    private String phone;

    public Company(String companyName, String phoneNumber) {
        this.name = companyName;
        this.phone = phoneNumber;
    };

    public UUID getId() {
        return id;
    }
    public String getName() { return name; }
    public String getPhone() { return phone;  }
}
