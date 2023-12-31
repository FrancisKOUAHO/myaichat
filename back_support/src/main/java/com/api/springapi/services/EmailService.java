package com.api.springapi.services;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import com.api.springapi.models.User;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${DASHBOARD_URL}")
    private String dashboardUrl;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendLoginEmail(User user) {
        String magicLinkToken = dashboardUrl + "/verify?magic_link_token=" + user.getMagicLinkToken();
        String messageBody = "Cliquez sur le lien ci-dessous pour vous connecter :\n\n" + magicLinkToken;

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("contact@myaichat.io");
        message.setTo(user.getEmail());
        message.setSubject("Connexion");
        message.setText(messageBody);
        mailSender.send(message);
    }
}