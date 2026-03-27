package com.ecom.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecom.project.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> 
{

    Admin findByEmail(String email);
}