package com.example.demo.api;

import com.example.demo.model.Payment;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class PaymentController {
    public void createPayment(String companyName, String companyPhone, float totalAmount);
    public Payment getPayment(UUID id);
}