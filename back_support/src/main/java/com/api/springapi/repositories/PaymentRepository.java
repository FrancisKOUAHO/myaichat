package com.api.springapi.repositories;

import com.api.springapi.models.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

    //Requête pour calculer le chiffre d'affaires depuis la creation
    @Query("SELECT SUM(o.totalPrice) FROM Order o")
    BigDecimal calculatedTotalRevenue();

    // Requête pour calculer le chiffre d'affaires pour le mois en cours
    @Query("SELECT SUM(o.totalPrice) FROM Order o WHERE EXTRACT(MONTH FROM o.createdAt) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM o.createdAt) = EXTRACT(YEAR FROM CURRENT_DATE)")
    BigDecimal calculateMonthlyRevenue();

    // Requête pour calculer le chiffre d'affaires pour l'année en cours
    @Query("SELECT SUM(o.totalPrice) FROM Order o WHERE EXTRACT(YEAR FROM o.createdAt) = EXTRACT(YEAR FROM CURRENT_DATE)")
    BigDecimal calculateAnnualRevenue();

//    SELECT
//    EXTRACT(YEAR FROM created_at) AS year,
//    SUM(total_price) AS yearly_revenue
//    FROM "public"."orders"
//    GROUP BY
//    EXTRACT(YEAR FROM created_at)
//    ORDER BY
//    year;


    //last_month_revenue

//    SELECT SUM(total_price) AS last_month_revenue
//    FROM "public"."orders"
//    WHERE
//    EXTRACT(MONTH FROM created_at) = EXTRACT(MONTH FROM CURRENT_DATE - INTERVAL '1 month') AND
//    EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM CURRENT_DATE - INTERVAL '1 month');



}