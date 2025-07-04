package com.pola.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import java.util.Map;

import com.pola.backend.dto.LoginRequest;
import com.pola.backend.dto.SignupRequest;
import com.pola.backend.service.UserService;
import com.pola.backend.jwt.JwtUtil;


@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public String signup(@RequestBody SignupRequest request){
        return userService.register(request);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        String token = jwtUtil.generateToken(request.getId());
        return ResponseEntity.ok().body(Map.of("token", token, "id", request.getId()));
    }
}
