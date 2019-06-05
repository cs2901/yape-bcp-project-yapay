package com.example.demo.model;

import org.joda.time.DateTime;
import java.util.UUID;
import org.json.simple.JSONObject;

public class QR {
    private UUID id = UUID.randomUUID();
    private String qrcodeData;
    private DateTime expiration;

    private String generateQR();

    public QR(UUID paymentId, Company company, float totalAmount);


    public UUID getId();
    public boolean hasExpired();
    public String getQrData();
}
