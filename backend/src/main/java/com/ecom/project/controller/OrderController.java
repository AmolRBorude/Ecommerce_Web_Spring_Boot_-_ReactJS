package com.ecom.project.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.project.entity.Order;
import com.ecom.project.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/create")
    public Order createOrder(@RequestBody Order request) 
    {
        return orderService.createOrder(
                request.getProductName(),
                request.getPrice()
        );
    }

    
    @PutMapping("/pay/{orderId}")
    public Order payOrder(@PathVariable Long orderId) 
    {
        return orderService.markAsPaid(orderId);
    }

    
    
    @PutMapping("/cancel/{orderId}")
    public Order cancelOrder(@PathVariable Long orderId) 
    {
        return orderService.cancelOrder(orderId);
    }

    
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }
}
