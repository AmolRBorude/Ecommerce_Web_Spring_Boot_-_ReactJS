package com.ecom.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecom.project.entity.Category;
import com.ecom.project.repository.CategoryRepository;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() 
    {   
        return categoryRepository.findAll();
    }
}
