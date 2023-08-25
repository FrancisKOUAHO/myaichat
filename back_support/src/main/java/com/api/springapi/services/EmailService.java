package com.api.springapi.services;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.api.springapi.models.User;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendLoginEmail(User user) {
        String magicLinkToken = "https://app.myaichat.io/verify/?magic_link_token=" + user.getMagicLinkToken();
        String messageBody = "Cliquez sur le lien ci-dessous pour vous connecter :\n\n" + magicLinkToken;

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("contact@myaichat.io");  // Utilisez votre adresse par défaut ici
        message.setTo(user.getEmail());
        message.setSubject("Magic Link pour MyAiChat");
        message.setText(messageBody);
        mailSender.send(message);
    }
}
