package com.ecom.project.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.project.entity.Category;
import com.ecom.project.service.CategoryService;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoryController {

    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) 
    {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> getAllCategories() 
    {
        return categoryService.getAllCategories();
    }
}

