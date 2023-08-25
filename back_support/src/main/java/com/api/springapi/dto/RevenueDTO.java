package com.api.springapi.dto;

import java.math.BigDecimal;

public class RevenueDTO {
    private BigDecimal totalRevenue;

    public BigDecimal getTotalRevenue() {
        return totalRevenue;
    }

    public void setTotalRevenue(BigDecimal totalRevenue) {
        this.totalRevenue = totalRevenue;
    }
}
