package com.petadoption.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petadoption.backend.entity.User;
import com.petadoption.backend.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userServ;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userServ.getAllUsers();
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        return userServ.registerUser(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        return userServ.loginUser(user);
    }

}
