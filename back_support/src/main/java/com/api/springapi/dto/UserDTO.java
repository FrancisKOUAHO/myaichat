package com.api.springapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class UserDTO {
    private Long id;
    private String email;
    private String rememberToken;
    private String magicLinkToken;
    private LocalDateTime magicLinkTokenExpiresAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Boolean subscriptionActive;
    private Long planId; // Assuming Plan ID is of type Long
    private LocalDateTime emailVerifiedAt;

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

    @JsonFormat(pattern = "yyyy-MM-dd")
    public LocalDateTime getMagicLinkTokenExpiresAt() {
        return magicLinkTokenExpiresAt;
    }

    @JsonFormat(pattern = "yyyy-MM-dd")
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    @JsonFormat(pattern = "yyyy-MM-dd")
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public Boolean getSubscriptionActive() {
        return subscriptionActive;
    }

    public Long getPlanId() {
        return planId;
    }

    @JsonFormat(pattern = "yyyy-MM-dd")
    public LocalDateTime getEmailVerifiedAt() {
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

    public void setMagicLinkTokenExpiresAt(LocalDateTime magicLinkTokenExpiresAt) {
        this.magicLinkTokenExpiresAt = magicLinkTokenExpiresAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public void setSubscriptionActive(Boolean subscriptionActive) {
        this.subscriptionActive = subscriptionActive;
    }

    public void setPlanId(Long planId) {
        this.planId = planId;
    }

    public void setEmailVerifiedAt(LocalDateTime emailVerifiedAt) {
        this.emailVerifiedAt = emailVerifiedAt;
    }
}