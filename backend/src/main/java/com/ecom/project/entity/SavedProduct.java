package com.ecom.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "saved_products")
public class SavedProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long productId;

    public SavedProduct() {}

    public SavedProduct(Long userId, Long productId) {
        this.userId = userId;
        this.productId = productId;
    }

    public Long getId() 
    {
    	return id; 
    }
    public Long getUserId() 
    {
    	return userId;
    }
    public Long getProductId()
    {
    	return productId;
    }

    public void setId(Long id) 
    {
    	this.id = id;
    }
    public void setUserId(Long userId) 
    {
    	this.userId = userId; 
    }
    public void setProductId(Long productId) 
    {
    	this.productId = productId;
    }
}