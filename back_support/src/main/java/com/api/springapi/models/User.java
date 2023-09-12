package com.api.springapi.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "page")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(unique = true)
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Product> products; // Nouveau champ pour la liste des produits

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Order> orders;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "email_verified_at")
    private LocalDateTime emailVerifiedAt;

    @Column(name = "subscription_active", nullable = false)
    private Boolean subscriptionActive = false;

    @Column(name = "magic_link_token")
    private String magicLinkToken;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "magic_link_token_expires_at")
    private LocalDateTime magicLinkTokenExpiresAt;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id")
    private Plan plan;

    @Column(name = "plan_id", insertable = false, updatable = false)
    private Long planId;

    @Column(name = "remember_token", length = 100)
    private String rememberToken;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;


    // Constructeurs
    public User() {}

    public User(String email) {
        this.email = email;
    }

    public User(String email, String magicLinkToken, LocalDateTime magicLinkTokenExpiresAt) {
        this.email = email;
        this.magicLinkToken = magicLinkToken;
        this.magicLinkTokenExpiresAt = magicLinkTokenExpiresAt;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getMagicLinkToken() {
        return magicLinkToken;
    }

    public LocalDateTime getMagicLinkTokenExpiresAt() {
        return magicLinkTokenExpiresAt;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public Plan getPlan() { return plan;
    }

    public Long getPlanId() { return planId;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
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


    public LocalDateTime getEmailVerifiedAt() {
        return emailVerifiedAt;
    }

    public void setEmailVerifiedAt(LocalDateTime emailVerifiedAt) {
        this.emailVerifiedAt = emailVerifiedAt;
    }

    public Boolean getSubscriptionActive() {
        return subscriptionActive;
    }

    public void setSubscriptionActive(Boolean subscriptionActive) {
        this.subscriptionActive = subscriptionActive;
    }

    public void setPlan(Plan plan) {
        this.plan = plan;
    }

    public void setPlanId(Long planId) {
        this.planId = planId;
    }

    public String getRememberToken() {
        return rememberToken;
    }

    public void setRememberToken(String rememberToken) {
        this.rememberToken = rememberToken;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
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
