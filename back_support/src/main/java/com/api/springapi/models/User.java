package com.api.springapi.models;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(unique = true)
    private String email;

    @Column(name = "remember_token")
    private String rememberToken;

    @Column(name = "magic_link_token")
    private String magicLinkToken;

    @Column(name = "magic_link_token_expires_at")
    private LocalDate magicLinkTokenExpiresAt;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "updated_at")
    private LocalDate updatedAt;

    @Column(name = "subscription_active")
    private Boolean subscriptionActive;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id")
    private Plan plan;

    @Column(name = "email_verified_at")
    private LocalDate emailVerifiedAt;

    // Constructeurs
    public User() {}

    public User(String email) {
        this.email = email;
    }

    public User(String email, String magicLinkToken, LocalDate magicLinkTokenExpiresAt) {
        this.email = email;
        this.magicLinkToken = magicLinkToken;
        this.magicLinkTokenExpiresAt = magicLinkTokenExpiresAt;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getRememberToken() {return rememberToken;}

    public LocalDate getUpdatedAt() {return updatedAt;}

    public Boolean getSubscriptionActive() {return subscriptionActive;}

    public LocalDate getEmailVerifiedAt() {return emailVerifiedAt;}

    public String getEmail() {
        return email;
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

    public Plan getPlan() { return plan;
    }
    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setEmailVerifiedAt(LocalDate emailVerifiedAt) {this.emailVerifiedAt = emailVerifiedAt;}

    public void setPlan(Plan plan) {this.plan = plan;}

    public void setSubscriptionActive(Boolean subscriptionActive) {this.subscriptionActive = subscriptionActive;}

    public void setUpdatedAt(LocalDate updatedAt) {this.updatedAt = updatedAt;}

    public void setRememberToken(String rememberToken) {this.rememberToken = rememberToken;}

    public void setEmail(String email) {
        this.email = email;
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

    // Autres méthodes
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id.equals(user.id) &&
                email.equals(user.email) &&
                Objects.equals(magicLinkToken, user.magicLinkToken) &&
                Objects.equals(magicLinkTokenExpiresAt, user.magicLinkTokenExpiresAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, magicLinkToken, magicLinkTokenExpiresAt);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", magicLinkToken='" + magicLinkToken + '\'' +
                ", magicLinkTokenExpiresAt=" + magicLinkTokenExpiresAt +
                ", createdAt=" + createdAt +
                '}';
    }
}
