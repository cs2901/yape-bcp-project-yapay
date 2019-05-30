package com.example.demo.api;

import com.example.demo.model.Payment;

import java.util.UUID;

public class PaymentController {

    public static PaymentController getInstance() {}
    private PaymentController(){}

    public void createPayment(float amount, String name, UUID nameId) {
        UUID id = UUID.randomUUID();
        Payment payment = new Payment(id, amount, name, nameId);
    }
    public Payment getPayment(UUID id) {}

}
