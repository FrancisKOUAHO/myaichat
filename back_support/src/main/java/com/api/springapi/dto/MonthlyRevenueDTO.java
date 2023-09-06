package com.api.springapi.dto;

import java.math.BigDecimal;

public class MonthlyRevenueDTO {
    private BigDecimal monthlyRevenue;
    private String currentMonth;

    public BigDecimal getMonthlyRevenue() {
        return monthlyRevenue;
    }

    public void setMonthlyRevenue(BigDecimal monthlyRevenue) {
        this.monthlyRevenue = monthlyRevenue;
    }

    public String getCurrentMonth() {return currentMonth;}

    public void setCurrentMonth(String currentMonth) {this.currentMonth = currentMonth;}
}
