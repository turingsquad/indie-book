package com.dream.team.indiebook.controller;

import com.dream.team.indiebook.request.SignInRequestVO;
import com.dream.team.indiebook.request.SignUpRequestVO;
import com.dream.team.indiebook.response.JwtResponseVO;
import com.dream.team.indiebook.response.MessageResponseVO;
import com.dream.team.indiebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtResponseVO> authenticateUser(@Valid @RequestBody SignInRequestVO signinRequestVO) {

        return ResponseEntity.ok(userService.authenticateUser(signinRequestVO));
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@Valid @RequestBody SignUpRequestVO signUpRequestVO) {

        if (userService.existsByUsername(signUpRequestVO.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body("This username is already taken!");
        }

        String answer;

        try {
            answer = userService.saveUser(signUpRequestVO);
        }
        catch (IllegalArgumentException ex) {
            return ResponseEntity.ok("Incorrect role");
        }

        return ResponseEntity.ok(answer);
    }
}
