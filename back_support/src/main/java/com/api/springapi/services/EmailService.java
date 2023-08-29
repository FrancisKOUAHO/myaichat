package com.api.springapi.services;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.api.springapi.models.User;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    @Value("${APP_URL}")
    private String APP_URL;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendLoginEmail(User user) {
        String magicLinkToken = APP_URL + "/verify/?magic_link_token=" + user.getMagicLinkToken();
        String messageBody = "Cliquez sur le lien ci-dessous pour vous connecter :\n\n" + magicLinkToken;

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("contact@myaichat.io");
        message.setTo(user.getEmail());
        message.setSubject("Connexion");
        message.setText(messageBody);
        mailSender.send(message);
    }
}
