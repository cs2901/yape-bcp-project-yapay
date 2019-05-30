package com.example.demo.service;

import com.example.demo.model.Payment;
import com.example.demo.dao.PaymentDao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class PaymentService {

    private final PaymentDao paymentDao;

    public static PaymentService getInstance() {}
    private PaymentService(PaymentDao paymentDao) {
        this.paymentDao = PaymentDao.getInstance();
    }

    public int addPayment(Payment payment) {
        return paymentDao.insertPayment(payment);
    }

    public List<Payment> getAllPayments() {
        return paymentDao.selectAllPayments();
    }

    public Optional<Payment> getPaymentById(UUID id) {
        return paymentDao.selectPaymentById(id);
    }


}