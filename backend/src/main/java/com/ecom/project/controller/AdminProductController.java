package com.ecom.project.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.project.entity.Category;
import com.ecom.project.entity.Product;
import com.ecom.project.repository.CategoryRepository;
import com.ecom.project.repository.ProductRepository;

@RestController
@RequestMapping("/api/admin/products")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminProductController {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public AdminProductController(ProductRepository productRepository,
                                  CategoryRepository categoryRepository) 
    {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    
    @GetMapping
    public List<Product> getAllProducts() 
    {
        return productRepository.findAll();
    }

    
    @PostMapping
    public Product addProduct(@RequestBody Product product) 
    {
        Long categoryId = product.getCategory().getId();
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        product.setCategory(category);
        return productRepository.save(product);
    }
}