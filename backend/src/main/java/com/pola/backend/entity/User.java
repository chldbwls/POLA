package com.pola.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User{
    @Id
    @Column(name="user_id")
    private String id;

    @Column(name="pw")
    private String pw;

    @Column(name="email")
    private String email;

    @Column(name="nickname")
    private String nickname;
}