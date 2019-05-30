package com.example.demo.model;

import org.joda.time.DateTime;
import java.util.UUID;
import org.json.simple.JSONObject;

public class QR {
    private UUID id = UUID.randomUUID();
    private Payment payment; // companyName, price
    private boolean hasExpired;
    private DateTime expiration; // set expiration

    public QR(Payment payment) {
        this.payment = payment;
        this.hasExpired = false;
    };

    public UUID getId() {
        return id;
    }
    public boolean hasExpired() { return hasExpired; }
    public JSONObject getContent() {};
    public Mono<byte[]> generateQR() {};
}
