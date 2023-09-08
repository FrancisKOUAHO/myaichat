package com.api.springapi.controllers;

import com.api.springapi.dto.PlanDTO;
import com.api.springapi.models.Plan;
import com.api.springapi.services.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000/", "https://admin.myaichat.io/", "https://www.myaichat.io/", "*"})
@RestController
@RequestMapping("/api/plans")
public class PlanControllers {

    @Autowired
    private PlanService planService;

    @GetMapping
    public ResponseEntity<List<Plan>> findAll() {
        List<Plan> plans = planService.findAll();
        return ResponseEntity.ok(plans);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Plan> findById(@PathVariable Long id) {
        Optional<Plan> planOptional = planService.findById(id);
        return planOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Plan> create(@RequestBody PlanDTO planDTO) {
        Plan plan = planService.save(planDTO);
        return ResponseEntity.ok(plan);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Plan> update(@PathVariable Long id, @RequestBody PlanDTO planDTO) {
        Plan plan = planService.update(id, planDTO);
        return ResponseEntity.ok(plan);
    }

}
