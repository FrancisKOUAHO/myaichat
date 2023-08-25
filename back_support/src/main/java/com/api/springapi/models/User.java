package com.api.springapi.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String email;
    private String magicLinkToken;
    private LocalDateTime magicLinkTokenExpiresAt;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id")
    private Plan plan;

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
