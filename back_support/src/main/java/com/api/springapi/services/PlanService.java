package com.api.springapi.services;

import com.api.springapi.dto.PlanDTO;
import com.api.springapi.models.Plan;
import com.api.springapi.repositories.PlanRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlanService {

    @Autowired
    private PlanRepository planRepository;

    public List<Plan> findAll() {
        return planRepository.findAll();
    }

    public Optional<Plan> findById(Long id) {
        return planRepository.findById(id);
    }

    public Plan save(PlanDTO planDTO) {
        Plan plan = new Plan();
        BeanUtils.copyProperties(planDTO, plan);
        return planRepository.save(plan);
    }

    public Plan update(Long id, PlanDTO planDTO) {
        Plan plan = planRepository.findById(id).orElseThrow(() -> new RuntimeException("Plan not found"));
        BeanUtils.copyProperties(planDTO, plan);
        return planRepository.save(plan);
    }

}
