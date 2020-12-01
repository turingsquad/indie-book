package com.dream.team.indiebook.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class JwtResponseVO {
    private String token;
    private final String type = "Bearer";
    private Long id;
    private String username;
    private List<String> roles;

    public JwtResponseVO(String accessToken, Long id, String username, List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.roles = roles;
    }
}
