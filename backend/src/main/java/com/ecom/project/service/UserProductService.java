package com.ecom.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecom.project.entity.LikedProduct;
import com.ecom.project.entity.SavedProduct;
import com.ecom.project.repository.LikedProductRepository;
import com.ecom.project.repository.SavedProductRepository;

@Service
public class UserProductService {

    private final LikedProductRepository likedRepo;
    private final SavedProductRepository savedRepo;

    public UserProductService(LikedProductRepository likedRepo, SavedProductRepository savedRepo) {
        this.likedRepo = likedRepo;
        this.savedRepo = savedRepo;
    }

    
    public LikedProduct likeProduct(Long userId, Long productId) 
    {
        return likedRepo.save(new LikedProduct(userId, productId));
    }

    
    public SavedProduct saveProduct(Long userId, Long productId) 
    {
        return savedRepo.save(new SavedProduct(userId, productId));
    }

    
    public List<LikedProduct> getLikedProducts(Long userId) 
    {
        return likedRepo.findByUserId(userId);
    }

    
    public List<SavedProduct> getSavedProducts(Long userId) 
    {
        return savedRepo.findByUserId(userId);
    }
}