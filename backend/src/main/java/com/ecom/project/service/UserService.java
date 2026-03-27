package com.ecom.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecom.project.entity.Users;
import com.ecom.project.repository.UserRepository;
import com.ecom.project.request.LoginRequest;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public Users addUser(Users user) 
	{
		return userRepository.save(user);
	}
	
	public Boolean loginUser(LoginRequest loginRequest) 
	{
	    Optional<Users> user = userRepository.findById(loginRequest.getEmail());
	    
	    if(!user.isPresent())
	    {
	        return false;
	    }
	    
	    Users user1 = user.get();
	    
	    if(!user1.getPassword().equals(loginRequest.getPassword()))
	    {
	        return false;
	    }
	    
	    return true;
	}

}

