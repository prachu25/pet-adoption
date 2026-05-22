package com.petadoption.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petadoption.backend.entity.User;
import com.petadoption.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    // Register User
    public String registerUser(User user) {

        // check duplicate email
        if (userRepo.existsByEmail(user.getEmail())) {
            return "Email already exists";
        }

        // Passsword Validation
        if (user.getPassword().length() < 6) {
            return "Password too short";
        }

        if (user.getPhoneNumber().length() != 10) {
            return "Phone Number must be 10 digits";
        }

        // Save user
        userRepo.save(user);

        return "User Register Successfully";
    }

    // Login User
    public String loginUser(User user) {

        User existingUser = userRepo.findByEmail(user.getEmail());

        // check user exists
        if (existingUser == null) {
            return "User not found";
        }

        // check Password
        if (!existingUser.getPassword().equals(user.getPassword())) {
            return "Invalid Password";
        }

        return "Login Successfully";
    }

}
