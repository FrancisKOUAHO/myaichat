package com.api.springapi.controllers;


import com.api.springapi.dto.ClientOverviewDTO;
import com.api.springapi.dto.SubscriptionDetailDTO;
import com.api.springapi.services.StatistiquesAgregeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/stats")
public class StatistiquesAgregeesControllers {

    private final StatistiquesAgregeesService statistiquesAgregeesService;

    @Autowired
    public StatistiquesAgregeesControllers(StatistiquesAgregeesService statistiquesAgregeesService) {
        this.statistiquesAgregeesService = statistiquesAgregeesService;
    }

    @GetMapping("/total-chatbots")
    public ResponseEntity<Long> getTotalChatbots() {
        return ResponseEntity.ok(statistiquesAgregeesService.getTotalChatbots());
    }

    @GetMapping("/total-users")
    public ResponseEntity<Long> getTotalUsers() {
        return ResponseEntity.ok(statistiquesAgregeesService.getTotalUsers());
    }

    @GetMapping("/overview")
    public ResponseEntity<List<ClientOverviewDTO>> getClientsOverview() {
        return ResponseEntity.ok(statistiquesAgregeesService.getClientsOverview());
    }

    @GetMapping("/subscriptions")
    public ResponseEntity<List<SubscriptionDetailDTO>> getSubscriptionDetails() {
        return ResponseEntity.ok(statistiquesAgregeesService.getSubscriptionDetails());
    }
}
