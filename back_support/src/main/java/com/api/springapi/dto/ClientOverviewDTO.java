package com.api.springapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;
import java.util.Map;

public class ClientOverviewDTO {
    private String email;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime dateJoined;
    private Long chatbotsCount;
    private Map<String, String> chatbotUrls;

    public ClientOverviewDTO(String email, LocalDateTime createdAt, Long chatbotsCount, Map<String, String> chatbotUrls) {
        this.email = email;
        this.dateJoined = createdAt;
        this.chatbotsCount = chatbotsCount;
        this.chatbotUrls = chatbotUrls;
    }

    // getters
    public String getEmail() {
        return email;
    }

    public LocalDateTime getDateJoined() {
        return dateJoined;
    }

    public Long getChatbotsCount() {
        return chatbotsCount;
    }

    public Map<String, String> getChatbotUrls() {
        return chatbotUrls;
    }

}

