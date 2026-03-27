package com.ecom.project.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.project.entity.LikedProduct;
import com.ecom.project.entity.SavedProduct;
import com.ecom.project.service.UserProductService;

@RestController
@RequestMapping("/api/user/products")
@CrossOrigin(origins = "http://localhost:5173")
public class UserProductController {

    private final UserProductService service;

    public UserProductController(UserProductService service) {
        this.service = service;
    }

    
    @PostMapping("/like")
    public LikedProduct likeProduct(@RequestParam Long userId, @RequestParam Long productId) 
    {
        return service.likeProduct(userId, productId);
    }

    
    @PostMapping("/save")
    public SavedProduct saveProduct(@RequestParam Long userId, @RequestParam Long productId) 
    {
        return service.saveProduct(userId, productId);
    }

    
    @GetMapping("/liked/{userId}")
    public List<LikedProduct> getLiked(@PathVariable Long userId) 
    {
        return service.getLikedProducts(userId);
    }

    
    @GetMapping("/saved/{userId}")
    public List<SavedProduct> getSaved(@PathVariable Long userId) 
    {
        return service.getSavedProducts(userId);
    }
}