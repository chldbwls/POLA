package com.pola.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pola.backend.repository.UserRepository;
import com.pola.backend.dto.SignupRequest;
import com.pola.backend.entity.User;
import com.pola.backend.dto.LoginRequest;
import com.pola.backend.jwt.JwtUtil;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public String register(SignupRequest request){
        if(userRepository.existsById(request.getId())){
            return "이미 사용중인 아이디입니다.";
        }
        if(userRepository.existsByEmail(request.getEmail())){
            return "이미 존재하는 이메일입니다.";
        }

        User user = new User();
        user.setId(request.getId());
        user.setPw(request.getPw());
        user.setEmail(request.getEmail());
        user.setNickname(request.getNickname());
        userRepository.save(user);
        
        return "회원가입 성공";
    }

    public String login(LoginRequest request){
        User user = userRepository.findById(request.getId())
            .orElseThrow(()-> new RuntimeException("아이디가 올바르지 않습니다."));
        if(!user.getPw().equals(request.getPw())){
            throw new RuntimeException("비밀번호가 일치하지 않습니다.");
        }
        
        return jwtUtil.generateToken(request.getId());
    }
}
