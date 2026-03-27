package com.ecom.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.project.entity.LikedProduct;

public interface LikedProductRepository extends JpaRepository<LikedProduct, Long> {
    List<LikedProduct> findByUserId(Long userId);
}