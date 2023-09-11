package com.api.springapi.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public class OrderDTO {

    private Long id;
    private String status;
    private BigDecimal totalPrice;
    private String sessionId;
    private Long userId;
    private Long paymentId;

    private LocalDate createdAt;

    private LocalDate updatedAt;

    private Long totalOrder;

    // Getters
    public Long getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public String getSessionId() {
        return sessionId;
    }

    public Long getUserId() {
        return userId;
    }

    public Long getPaymentId() {
        return paymentId;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    public Long getTotalOrders() {
        return totalOrder;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }

    public void setTotalOrders(Long totalOrder) {
        this.totalOrder = totalOrder;
    }
}
