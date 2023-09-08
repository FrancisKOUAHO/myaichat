package com.api.springapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public class ChatbotDTO {
    private Long totalChatbot;
    private Long id;
    private String url;
    private Long userId;
    private String content;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate updatedAt;

    // Getters
    public Long getId() {
        return id;
    }

    public String getUrl() {
        return url;
    }

    public Long getUserId() {
        return userId;
    }

    public String getContent() {
        return content;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    public Long getTotalChatbots() {
        return totalChatbot;
    }


    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }

    public void setTotalChatbots(Long totalChatbot) {
        this.totalChatbot = totalChatbot;
    }
}
