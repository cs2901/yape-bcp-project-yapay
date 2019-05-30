package com.example.demo.model;
import java.util.List;
import java.util.UUID;
import org.joda.time.DateTime;

public class Payment {

    private UUID id;
    private float totalAmount;
    private Company company;
    private QR qr;
    private List<String> items;
    private DateTime date;

    public Payment(UUID id, float amount, Company company) {
        this.id = id;
        this.totalAmount = amount;
        this.company = company;
        //agregar datetime
    }

    public UUID getId() {
        return id;
    }

    public float getTotalAmount() {
        return totalAmount;
    }

    public String getCompanyName() {
        return company.getName();
    }

    public UUID getCompanyId() { return company.getId(); }

    public QR getQr() {}

    public List<String> getItems() {
        return items;
    }

    public void confirmPayment() {}

    public pair<boolean, Mono<byte[]>> checkQr() {}

    public void setItems(List<String> items) {
        this.items = items;
    }

    public void setQr(QR qr) {
        this.qr = qr;
    }
}
