package com.ecom.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecom.project.entity.Product;
import com.ecom.project.repository.ProductRepository;

@Service
public class ProductService {
	
	private ProductRepository productRepository;

	public ProductService(ProductRepository productRepository) {
		super();
		this.productRepository = productRepository;
	}
	
	public List<Product> getAllProducts()
	{
		return productRepository.findAll();
	}
	
	public List<Product> getProductByCategory(Long categoryId)
	{
		return productRepository.findCategoryById(categoryId);
		
	}
	
	public Product getProductById(Long id) {
	    return productRepository.findById(id).orElseThrow();
	}
	
	 public List<Product> searchProducts(String keyword) {
	        return productRepository.findByNameContainingIgnoreCase(keyword);
	    }
	 
	 public Product saveProduct(Product product) {
		    return productRepository.save(product);
		}
}
