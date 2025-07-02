package com.pola.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pola.backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
    boolean existsById(String id);
    boolean existsByEmail(String email);
}
