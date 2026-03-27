package com.ecom.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.project.entity.Users;
import com.ecom.project.request.LoginRequest;
import com.ecom.project.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin( origins = "http://localhost:5173")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/addUser")
	public Users addUser(@RequestBody Users user)
	{
		return userService.addUser(user);
	}
	
	@PostMapping("/loginUser")
	public Boolean loginUser(@RequestBody LoginRequest loginRequest) 
	{
		return userService.loginUser(loginRequest);
		
	}
	
	 @PostMapping("/logout")
	    public String logout(HttpSession session) {
	        session.invalidate();
	        return "Logout Successful";
	    }

}
