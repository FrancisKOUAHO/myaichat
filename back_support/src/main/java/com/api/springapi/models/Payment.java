package com.api.springapi.models;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "total")
    private BigDecimal total;

    @Column(name = "order_id")
    private String orderId;

    @Column(name = "st_cus_id")
    private String stCusId;

    @Column(name = "st_sub_id")
    private String stSubId;

    @Column(name = "st_payment_intent_id")
    private String stPaymentIntentId;

    @Column(name = "st_payment_method")
    private String stPaymentMethod;

    @Column(name = "st_payment_status")
    private String stPaymentStatus;

    @Column(name = "date")
    private Long date;

    @Column(name = "trial_end")
    private LocalDateTime trialEnd;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getStCusId() {
        return stCusId;
    }

    public void setStCusId(String stCusId) {
        this.stCusId = stCusId;
    }

    public String getStSubId() {
        return stSubId;
    }

    public void setStSubId(String stSubId) {
        this.stSubId = stSubId;
    }

    public String getStPaymentIntentId() {
        return stPaymentIntentId;
    }

    public void setStPaymentIntentId(String stPaymentIntentId) {
        this.stPaymentIntentId = stPaymentIntentId;
    }

    public String getStPaymentMethod() {
        return stPaymentMethod;
    }

    public void setStPaymentMethod(String stPaymentMethod) {
        this.stPaymentMethod = stPaymentMethod;
    }

    public String getStPaymentStatus() {
        return stPaymentStatus;
    }

    public void setStPaymentStatus(String stPaymentStatus) {
        this.stPaymentStatus = stPaymentStatus;
    }

    public Long getDate() {
        return date;
    }

    public void setDate(Long date) {
        this.date = date;
    }

    public LocalDateTime getTrialEnd() {
        return trialEnd;
    }

    public void setTrialEnd(LocalDateTime trialEnd) {
        this.trialEnd = trialEnd;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Payment payment = (Payment) o;
        return Objects.equals(id, payment.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Payment{" +
                "id=" + id +
                ", total=" + total +
                ", orderId='" + orderId + '\'' +
                ", stCusId='" + stCusId + '\'' +
                ", stSubId='" + stSubId + '\'' +
                ", stPaymentIntentId='" + stPaymentIntentId + '\'' +
                ", stPaymentMethod='" + stPaymentMethod + '\'' +
                ", stPaymentStatus='" + stPaymentStatus + '\'' +
                ", date=" + date +
                ", trialEnd=" + trialEnd +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}
