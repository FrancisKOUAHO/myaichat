package com.api.springapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class SubscriptionDetailDTO {
    private String email;
    private String planName;
    private BigDecimal planPrice;
    private String planInterval;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime userCreatedAt;

    public SubscriptionDetailDTO(String email, String planName, BigDecimal planPrice, String planInterval, LocalDateTime userCreatedAt) {
        this.email = email;
        this.planName = planName;
        this.planPrice = planPrice;
        this.planInterval = planInterval;
        this.userCreatedAt = userCreatedAt;
    }

    // Getters
    public String getEmail() {
        return email;
    }

    public String getPlanName() {
        return planName;
    }

    public BigDecimal getPlanPrice() {
        return planPrice;
    }

    public String getPlanInterval() {
        return planInterval;
    }

    public LocalDateTime getUserCreatedAt() {
        return userCreatedAt;
    }

    // Setters
    public void setEmail(String email) {
        this.email = email;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public void setPlanPrice(BigDecimal planPrice) {
        this.planPrice = planPrice;
    }

    public void setPlanInterval(String planInterval) {
        this.planInterval = planInterval;
    }

    public void setUserCreatedAt(LocalDateTime userCreatedAt) {
        this.userCreatedAt = userCreatedAt;
    }
}
