package com.api.springapi.dto;

import java.time.LocalDate;

public class ProductDTO {

    private Long id;
    private Long userId;
    private String title;
    private String domain;
    private String fullUrl;
    private LocalDate publishDate;

    private LocalDate updatedDate;
    private String vendor;
    private String productType;
    private LocalDate createdAt;
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