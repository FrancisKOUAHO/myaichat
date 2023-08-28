package com.api.springapi.controllers;

import com.api.springapi.dto.AnnualRevenueDTO;
import com.api.springapi.dto.MonthlyRevenueDTO;
import com.api.springapi.dto.OrderDTO;
import com.api.springapi.dto.RevenueDTO;
import com.api.springapi.services.RevenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/payments")
public class PaymentControllers {
    private final RevenueService revenueService;

    @Autowired
    public PaymentControllers(RevenueService revenueService) {
        this.revenueService = revenueService;
    }

    @GetMapping("/total-revenue")
    public ResponseEntity<RevenueDTO> getTotalRevenue(){

        return  ResponseEntity.ok(revenueService.getRevenueTotal());
    }

    @GetMapping("/monthly-revenue")
    public ResponseEntity<MonthlyRevenueDTO> getMonthlyRevenue() {
        return ResponseEntity.ok(revenueService.getRevenueMonthly());
    }

    @GetMapping("/annual-revenue")
    public ResponseEntity<AnnualRevenueDTO> getAnnualRevenue() {
        return ResponseEntity.ok(revenueService.getRevenueAnnual());
    }

    @GetMapping("/total-orders")
    public ResponseEntity<Long> getTotalUsers() {
        return ResponseEntity.ok(revenueService.getTotalOrders());
    }

}
