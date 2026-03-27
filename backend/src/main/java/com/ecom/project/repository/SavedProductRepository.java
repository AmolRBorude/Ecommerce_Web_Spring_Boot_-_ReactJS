package com.ecom.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.project.entity.SavedProduct;

public interface SavedProductRepository extends JpaRepository<SavedProduct, Long> {
    List<SavedProduct> findByUserId(Long userId);
}
