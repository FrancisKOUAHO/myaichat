package com.api.springapi.controllers;

import com.api.springapi.dto.AnnualRevenueDTO;
import com.api.springapi.dto.MonthlyRevenueDTO;
import com.api.springapi.dto.RevenueDTO;
import com.api.springapi.models.Payment;
import com.api.springapi.services.PaymentService;
import com.api.springapi.services.RevenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000/", "https://admin.myaichat.io/", "https://www.myaichat.io/", "*"})
@RestController
@RequestMapping("/api/payments")
public class PaymentControllers {
    private final RevenueService revenueService;

    @Autowired
    private PaymentService paymentService;

    @GetMapping
    public ResponseEntity<List<Payment>> findAll() {
        List<Payment> payments = paymentService.findAll();
        return ResponseEntity.ok(payments);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment> findById(@PathVariable Long id) {
        Optional<Payment> paymentOptional = paymentService.findById(id);
        return paymentOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

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
