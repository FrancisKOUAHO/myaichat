package com.api.springapi.dto;

import java.time.LocalDate;

public class UserDTO {
    private Long id;
    private String email;
    private String rememberToken;
    private String magicLinkToken;
    private LocalDate magicLinkTokenExpiresAt;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private Boolean subscriptionActive;
    private Long planId; // Assuming Plan ID is of type Long
    private LocalDate emailVerifiedAt;

    // Getters
    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getRememberToken() {
        return rememberToken;
    }

    public String getMagicLinkToken() {
        return magicLinkToken;
    }

    public LocalDate getMagicLinkTokenExpiresAt() {
        return magicLinkTokenExpiresAt;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    public Boolean getSubscriptionActive() {
        return subscriptionActive;
    }

    public Long getPlanId() {
        return planId;
    }

    public LocalDate getEmailVerifiedAt() {
        return emailVerifiedAt;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setRememberToken(String rememberToken) {
        this.rememberToken = rememberToken;
    }

    public void setMagicLinkToken(String magicLinkToken) {
        this.magicLinkToken = magicLinkToken;
    }

    public void setMagicLinkTokenExpiresAt(LocalDate magicLinkTokenExpiresAt) {
        this.magicLinkTokenExpiresAt = magicLinkTokenExpiresAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }

    public void setSubscriptionActive(Boolean subscriptionActive) {
        this.subscriptionActive = subscriptionActive;
    }

    public void setPlanId(Long planId) {
        this.planId = planId;
    }

    public void setEmailVerifiedAt(LocalDate emailVerifiedAt) {
        this.emailVerifiedAt = emailVerifiedAt;
    }
}