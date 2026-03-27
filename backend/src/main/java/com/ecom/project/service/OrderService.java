package com.ecom.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.project.entity.Order;
import com.ecom.project.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	    private final OrderRepository orderRepository;

	    public OrderService(OrderRepository orderRepository) 
	    {
	        this.orderRepository = orderRepository;
	    }

	    public Order createOrder(String productName, double price) 
	    {
	        Order order = new Order(productName, price, "CREATED");
	        return orderRepository.save(order);
	    }

	    
	    public Order markAsPaid(Long orderId) 
	    {
	        Order order = orderRepository.findById(orderId).orElseThrow();
	        order.setStatus("PAID");
	        return orderRepository.save(order);
	    }

	    
	    public Order cancelOrder(Long orderId) 
	    {
	        Order order = orderRepository.findById(orderId).orElseThrow();
	        order.setStatus("CANCELLED");
	        return orderRepository.save(order);
	    }

	    public List<Order> getAllOrders() 
	    {
	        return orderRepository.findAll();
	    }
}