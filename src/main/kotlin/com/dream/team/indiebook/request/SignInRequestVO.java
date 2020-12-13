package com.dream.team.indiebook.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SignInRequestVO {
    @NotBlank
    private String username;

    @NotBlank
    private String password;
}

