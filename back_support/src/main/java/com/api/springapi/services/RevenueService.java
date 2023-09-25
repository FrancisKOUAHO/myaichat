package com.api.springapi.services;

import com.api.springapi.dto.AnnualRevenueDTO;
import com.api.springapi.dto.MonthlyRevenueDTO;
import com.api.springapi.dto.RevenueDTO;
import com.api.springapi.repositories.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.text.DateFormatSymbols;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Locale;

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
//        List<Object[]> results = paymentRepository.calculateMonthlyRevenue();
//        if (results != null && !results.isEmpty()) {
//            Object[] result = results.get(0);
//            System.out.println("zola :  " + Arrays.toString(result));
//            if (result[0] != null && result[1] != null) {
//                revenueDTO.setMonthlyRevenue((BigDecimal) result[0]);
//                revenueDTO.setCurrentMonth((String) result[1]);
//            }
//        }
//        return revenueDTO;
//    }

    public MonthlyRevenueDTO getRevenueMonthly() {
        MonthlyRevenueDTO revenueDTO = new MonthlyRevenueDTO();
        List<Object[]> results = paymentRepository.calculateMonthlyRevenue();
        if (results != null && !results.isEmpty()) {
            Object[] result = results.get(0);
            if (result[0] != null && result[1] != null) {
                revenueDTO.setMonthlyRevenue((BigDecimal) result[0]);

                // Convertir le nom du mois en français
                try {
                    DateFormatSymbols symbols = new DateFormatSymbols(Locale.FRENCH);
                    Date date = new SimpleDateFormat("MMMM", Locale.ENGLISH).parse((String) result[1]);
                    String frenchMonth = new SimpleDateFormat("MMMM", symbols).format(date);
                    revenueDTO.setCurrentMonth(frenchMonth);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
            }
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
