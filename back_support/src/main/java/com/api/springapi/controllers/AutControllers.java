package com.api.springapi.controllers;

import com.api.springapi.dto.EmailRequest;
import com.api.springapi.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AutControllers {

    @Autowired
    private AuthService authService;

    @PostMapping("/requestLoginLink")
    public ResponseEntity<?> requestMagicLink(@RequestBody EmailRequest emailRequest) {
        String email = emailRequest.getEmail();

        if (!email.endsWith("@myaichat.io")) {
            return ResponseEntity.badRequest().body("L'email doit se terminer par @myaichat.io");
        }

        authService.handleMagicLinkRequest(email);
        return ResponseEntity.ok("Veuillez consulter votre boîte de réception pour vous connecter.");
    }

    @GetMapping("/login-with-token/{token}")
    public ResponseEntity<String> loginWithToken(@PathVariable String token) {
        boolean isValid = authService.verifyMagicLink(token);
        if (!isValid) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Jeton de connexion invalide ou expiré.");
        }

        // Générez un jeton d'accès API ici si nécessaire ou d'autres étapes post-connexion
        return ResponseEntity.ok("Connecté avec succès.");
    }

    @GetMapping("/helloWorld")
    public String helloWorld() {
        return "Hello, World!";
    }
}