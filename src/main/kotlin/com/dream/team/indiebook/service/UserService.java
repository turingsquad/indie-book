package com.dream.team.indiebook.service;

import com.dream.team.indiebook.component.JwtProvider;
import com.dream.team.indiebook.entity.Role;
import com.dream.team.indiebook.entity.User;
import com.dream.team.indiebook.enums.RoleName;
import com.dream.team.indiebook.repository.RoleRepository;
import com.dream.team.indiebook.repository.UserRepository;
import com.dream.team.indiebook.request.SignInRequestVO;
import com.dream.team.indiebook.request.SignUpRequestVO;
import com.dream.team.indiebook.response.JwtResponseVO;
import com.dream.team.indiebook.response.MessageResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JwtProvider jwtProvider;
    private AuthenticationManager authenticationManager;


    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Autowired
    public void setRoleRepository(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
    @Autowired
    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }
    @Autowired
    public void setJwtProvider(JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }
    @Autowired
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Transactional
    public MessageResponseVO saveUser(SignUpRequestVO signupRequestVO) {
        User user = new User(signupRequestVO.getUsername(),
                passwordEncoder.encode(signupRequestVO.getPassword()));

        Set<String> strRoles = signupRequestVO.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(RoleName.ROLE_USER);
            roles.add(userRole);
        } else {
            for (String role : strRoles) {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN);
                        roles.add(adminRole);
                        break;
                    case "user":
                        Role userRole = roleRepository.findByName(RoleName.ROLE_USER);
                        roles.add(userRole);
                        break;
                    default:
                        return new MessageResponseVO("Incorrect Role!");
                }
            }
        }
        user.setRoles(roles);
        userRepository.save(user);
        return new MessageResponseVO("User registered successfully!");
    }

    @Transactional
    public Boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public JwtResponseVO authenticateUser(SignInRequestVO signinRequestVO) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signinRequestVO.getUsername(), signinRequestVO.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return new JwtResponseVO(jwt, userDetails.getId(), userDetails.getUsername(), roles);
    }

}
