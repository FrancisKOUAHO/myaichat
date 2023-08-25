package com.api.springapi.dto;

import java.math.BigDecimal;

public class AnnualRevenueDTO {
    private BigDecimal annualRevenue;

    public BigDecimal getAnnualRevenue() {
        return annualRevenue;
    }

    public void setAnnualRevenue(BigDecimal annualRevenue) {
        this.annualRevenue = annualRevenue;
    }
}
