package com.example.demo.dao;
import com.example.demo.model.Payment;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Repository
public class PaymentDao {
    public int insertPayment(UUID id, Payment payment);
    public List<Payment> selectAllPayments();
    public Optional<Payment> selectPaymentById(UUID id);
    public int deletePaymentById(UUID id);
}