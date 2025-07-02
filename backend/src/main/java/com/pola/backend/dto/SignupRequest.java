package com.pola.backend.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class SignupRequest {
    private String id;
    private String pw;
    private String email;
    private String nickname;
}
