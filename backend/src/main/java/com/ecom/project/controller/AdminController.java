package com.ecom.project.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.ecom.project.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) 
    {
        this.adminService = adminService;
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> request) 
    {

        String email = request.get("email");
        String password = request.get("password");

        boolean success = adminService.login(email, password);

        Map<String, Object> response = new HashMap<>();
        response.put("success", success);

        return response;
    }
}