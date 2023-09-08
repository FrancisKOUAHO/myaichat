package com.api.springapi.dto;

import java.math.BigDecimal;

public class PlanDTO {

    private String name;
    private BigDecimal price;
    private String interval;
    private Integer trialPeriodDays;
    private String lookupKey;
    private String stPlanId;

    //Getters
    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getInterval() {
        return interval;
    }

    public Integer getTrialPeriodDays() {
        return trialPeriodDays;
    }

    public String getLookupKey() {
        return lookupKey;
    }

    public String getStPlanId() {
        return stPlanId;
    }

    //Setters

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void setInterval(String interval) {
        this.interval = interval;
    }

    public void setTrialPeriodDays(Integer trialPeriodDays) {
        this.trialPeriodDays = trialPeriodDays;
    }


    public void setLookupKey(String lookupKey) {
        this.lookupKey = lookupKey;
    }

    public void setStPlanId(String stPlanId) {
        this.stPlanId = stPlanId;
    }
}
