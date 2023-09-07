package com.api.springapi.services;

import com.api.springapi.dto.AnnualRevenueDTO;
import com.api.springapi.dto.MonthlyRevenueDTO;
import com.api.springapi.dto.OrderDTO;
import com.api.springapi.dto.RevenueDTO;
import com.api.springapi.repositories.PaymentRepository;
import org.antlr.v4.runtime.atn.SemanticContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class RevenueService {
    @Autowired
    private PaymentRepository paymentRepository;
    public RevenueDTO getRevenueTotal() {
        RevenueDTO revenueDTO = new RevenueDTO();
        BigDecimal totalRevenue = paymentRepository.calculatedTotalRevenue();
        revenueDTO.setTotalRevenue(totalRevenue);
        return revenueDTO;
    }
//    public MonthlyRevenueDTO getRevenueMonthly() {
//        MonthlyRevenueDTO revenueDTO = new MonthlyRevenueDTO();
//        Object[] result = paymentRepository.calculateMonthlyRevenue();
//        if (result != null) {
//            revenueDTO.setMonthlyRevenue((BigDecimal) result[0]);
//            revenueDTO.setCurrentMonth((String) result[1]);
//        }
//        return revenueDTO;
//    }

    public MonthlyRevenueDTO getRevenueMonthly() {
        MonthlyRevenueDTO revenueDTO = new MonthlyRevenueDTO();
        Object[] result = paymentRepository.calculateMonthlyRevenue();

        if (result != null && result.length == 2) {
            revenueDTO.setMonthlyRevenue((BigDecimal) result[0]);
            revenueDTO.setCurrentMonth((String) result[1]);
        }

        return revenueDTO;
    }



    public AnnualRevenueDTO getRevenueAnnual() {
        AnnualRevenueDTO revenueDTO = new AnnualRevenueDTO();
        BigDecimal annualRevenue = paymentRepository.calculateAnnualRevenue();
        revenueDTO.setAnnualRevenue(annualRevenue);
        return revenueDTO;
    }

    public Long getTotalOrders() {
        return paymentRepository.countOrders();
    }

}
