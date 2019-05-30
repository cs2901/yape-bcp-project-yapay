package com.example.demo.model;

import java.util.List;
import java.util.UUID;
import org.joda.time.DateTime;

public class DataReport {
    private UUID id;
    private DateTime date;
    private List<Payment> payments;

    public DataReport(DateTime date, List<Payment> payments) {};

    public void setId(UUID id) {
        this.id = id;
    }

    public void setDate(DateTime date) {
        this.date = date;
    }

    public void setPayments(List<Payment> payments) {
        this.payments = payments;
    }

    public void sendReport(){}
}
