package com.pola.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pola.backend.dto.LoginRequest;
import com.pola.backend.dto.SignupRequest;
import com.pola.backend.service.UserService;


@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String signup(@RequestBody SignupRequest request){
        return userService.register(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request){
        return userService.login(request);
    }
}
