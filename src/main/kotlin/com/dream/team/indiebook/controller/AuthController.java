package com.dream.team.indiebook.controller;

import com.dream.team.indiebook.request.SignInRequestVO;
import com.dream.team.indiebook.request.SignUpRequestVO;
import com.dream.team.indiebook.response.MessageResponseVO;
import com.dream.team.indiebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;


    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody SignInRequestVO signinRequestVO) {

        return ResponseEntity.ok(userService.authenticateUser(signinRequestVO));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequestVO signUpRequestVO) {

        if (userService.existsByUsername(signUpRequestVO.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponseVO("This username is already taken!"));
        }
        return ResponseEntity.ok(userService.saveUser(signUpRequestVO));
    }
}
