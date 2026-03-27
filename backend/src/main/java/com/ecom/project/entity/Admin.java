package com.ecom.project.entity;

import jakarta.persistence.*;

@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;

   
    public String getEmail() 
    {
        return email;
    }

    public String getPassword()
    {
        return password;
    }

    public void setEmail(String email) 
    {
        this.email = email;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }
}