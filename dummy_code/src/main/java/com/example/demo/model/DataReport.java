package com.example.demo.model;

import java.util.List;
import java.util.UUID;
import org.joda.time.DateTime;

public class DataReport {
    private UUID id;
    private DateTime date;
    private List<Payment> payments;

    public DataReport();

    public void addPayment(Payment payment);

    public void sendReport();
}