package com.ecom.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecom.project.entity.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, String>{

}

