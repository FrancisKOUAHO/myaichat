package com.api.springapi.dto;

import java.math.BigDecimal;

public class MonthlyRevenueDTO {
    private BigDecimal monthlyRevenue;

    public BigDecimal getMonthlyRevenue() {
        return monthlyRevenue;
    }

    public void setMonthlyRevenue(BigDecimal monthlyRevenue) {
        this.monthlyRevenue = monthlyRevenue;
    }
}
