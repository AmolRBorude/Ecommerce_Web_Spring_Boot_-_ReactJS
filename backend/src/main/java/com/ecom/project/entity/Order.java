package com.ecom.project.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String productName;
	    private double price;
	    private String status; // PLACED

	    private LocalDateTime orderDate = LocalDateTime.now();

	    public Order() {}
	    
	    public Order(String productName, double price, String status) {
	        this.productName = productName;
	        this.price = price;
	        this.status = status;
	    }

	    // Getters & Setters
	    public Long getId() 
	    { 
	    	return id; 
	    }
	    public String getProductName() 
	    {
	    	return productName; 
	    }
	    public double getPrice() 
	    {
	    	return price; 
	    }
	    public String getStatus() 
	    { 
	    	return status; 
	    }
	    public LocalDateTime getOrderDate() 
	    {
	    	return orderDate; 
	    }

	    public void setId(Long id) 
	    { 
	    	this.id = id; 
	    }
	    public void setProductName(String productName) 
	    {
	    	this.productName = productName; 
	    	
	    }
	    public void setPrice(double price) 
	    {
	    	this.price = price; 
	    }
	    public void setStatus(String status) 
	    {
	    	this.status = status; 
	    }
	    
	    
}
