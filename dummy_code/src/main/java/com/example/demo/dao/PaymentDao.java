package com.example.demo.dao;
import com.example.demo.model.Payment;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;



public class PaymentDao {

    public static PaymentDao getInstance() {}
    private PaymentDao() {}

    int insertPayment(UUID id, Payment payment) {};

    public int insertPayment(Payment payment) {
        UUID id = UUID.randomUUID();
        return insertPayment(id, payment);
    }

    public List<Payment> selectAllPayments() {};

    public Optional<Payment> selectPaymentById(UUID id) {};

    public int deletePaymentById(UUID id) {};
}