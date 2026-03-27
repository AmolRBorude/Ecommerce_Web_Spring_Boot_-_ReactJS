package com.ecom.project.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.ecom.project.entity.Product;
import com.ecom.project.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/category/{categoryId}")
    public List<Product> getAllProductByCategory(@PathVariable Long categoryId) {
        return productService.getProductByCategory(categoryId);
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String keyword) {
        return productService.searchProducts(keyword);
    }

    
    @PostMapping("/add")
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }
    
    @GetMapping("/suggest")
    public List<Product> suggestProducts(@RequestParam String keyword) {
        return productService.searchProducts(keyword);
    }
}