package com.ecom.project.service;

import org.springframework.stereotype.Service;
import com.ecom.project.entity.Admin;
import com.ecom.project.repository.AdminRepository;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public boolean login(String email, String password) {

        Admin admin = adminRepository.findByEmail(email);

     
        if (admin == null) 
        {
            return false;
        }

        
        if (admin.getPassword() != null && admin.getPassword().equals(password)) 
        {
            return true;
        }

        return false;
    }
}