package com.api.springapi.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "shopify_products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "user_id", nullable = true)
    private Long userId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false,  insertable = false, updatable = false)
    private User user; // Nouveau champ pour établir une relation avec User

    @Column(name = "title")
    private String title;

    @Column(name = "domain")
    private String domain;

    @Column(name = "full_url")
    private String fullUrl;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "publish_date")
    private LocalDate publishDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "updated_date")
    private LocalDate updatedDate;

    @Column(name = "vendor")
    private String vendor;

    @Column(name = "product_type")
    private String productType;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "created_at")
    private LocalDate createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "updated_at")
    private LocalDate updatedAt;

    // Getters
    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public String getTitle() {
        return title;
    }

    public String getDomain() {
        return domain;
    }

    public String getFullUrl() {
        return fullUrl;
    }

    public LocalDate getPublishDate() {
        return publishDate;
    }

    public LocalDate getUpdatedDate() {
        return updatedDate;
    }

    public String getVendor() {
        return vendor;
    }

    public String getProductType() {
        return productType;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public void setFullUrl(String fullUrl) {
        this.fullUrl = fullUrl;
    }

    public void setPublishDate(LocalDate publishDate) {
        this.publishDate = publishDate;
    }

    public void setUpdatedDate(LocalDate updatedDate) {
        this.updatedDate = updatedDate;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }
}
