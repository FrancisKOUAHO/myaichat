package com.api.springapi.services;

import com.api.springapi.repositories.UserRepository;
import com.api.springapi.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;
import java.time.LocalDateTime;
@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private com.api.springapi.services.EmailService emailService;

    public void handleMagicLinkRequest(String email) {
        Optional<User> existingUser = userRepository.findByEmail(email);

        User user;
        if (existingUser.isPresent()) {
            user = existingUser.get();
        } else {
            user = new User();
            user.setEmail(email);
        }

        String magicLinkToken = UUID.randomUUID().toString();
        user.setMagicLinkToken(magicLinkToken);
        LocalDateTime expiry = LocalDateTime.now().plusHours(1);
        user.setMagicLinkTokenExpiresAt(expiry);

        userRepository.save(user);
        emailService.sendLoginEmail(user);
    }

    public boolean verifyMagicLink(String token) {
        Optional<User> userOptional = userRepository.findByMagicLinkTokenAndMagicLinkTokenExpiresAtAfter(token, LocalDateTime.now());
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            user.setMagicLinkToken(null);
            user.setMagicLinkTokenExpiresAt(null);
            userRepository.save(user);
            return true;
        }

        return false;
    }

    public boolean updateMagicLinkExpiration(String token, LocalDateTime newExpirationTime) {
        User user = userRepository.findByMagicLinkToken(token);

        if (user != null) {
            user.setMagicLinkTokenExpiresAt(newExpirationTime);
            userRepository.save(user);
            return true;
        }

        return false;
    }


}
