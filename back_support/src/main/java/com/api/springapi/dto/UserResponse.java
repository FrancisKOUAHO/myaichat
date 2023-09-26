package com.api.springapi.dto;

public class UserResponse {
    private String access_token;
    private String user;

    // Constructeur par défaut
    public UserResponse() {}

    // Constructeur avec les champs
    public UserResponse(String access_token, String user) {
        this.access_token = access_token;
        this.user = user;
    }

    // Getters et setters
    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
