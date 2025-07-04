package com.pola.backend.jwt;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.Claims;

@Component
public class JwtUtil {
    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generateToken(String id){
        return Jwts.builder()
        .setSubject(id)
        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24))
        .signWith(key)
        .compact();
    }

    public String validateToken(String token){
        try{
            Claims claims = Jwts.parserBuilder()
            .setSigningKey(key)
            .build()
            .parseClaimsJws(token)
            .getBody();

            return claims.getSubject();
        }catch(Exception e){
            return null;
        }
    }
}
