package com.example.demo.model;
import java.util.List;
import java.util.UUID;
import org.joda.time.DateTime;

public class Payment {

    private UUID id;
    private float totalAmount;
    private Company company;
    private QR qr;
    private DateTime date;
    private boolean confirmed;

    public Payment(String companyName, String companyPhone, float totalAmount)

    public UUID getId()

    public float getTotalAmount()

    public String getCompanyName()

    public String getCompanyPhone()

    public String isConfirmed()

    public QR getQr()

    public void confirmPayment()

    public boolean qrIsExpired()
}
