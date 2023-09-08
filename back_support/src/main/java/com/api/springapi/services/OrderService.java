package com.api.springapi.services;

import com.api.springapi.dto.OrderDTO;
import com.api.springapi.models.Order;
import com.api.springapi.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public ResponseEntity<List<Order>> findAll() {
        List<Order> orders = orderRepository.findAll();
        return ResponseEntity.ok(orders);
    }
}
