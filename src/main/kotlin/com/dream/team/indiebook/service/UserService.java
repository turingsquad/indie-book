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
import com.dream.team.indiebook.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

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
    public void setUserRepository(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setRoleRepository(final RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Autowired
    public void setPasswordEncoder(final PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Autowired
    public void setJwtProvider(final JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    @Autowired
    public void setAuthenticationManager(final AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Transactional
    public String saveUser(final SignUpRequestVO signupRequestVO) {
        final User user = new User(signupRequestVO.getUsername(),
                passwordEncoder.encode(signupRequestVO.getPassword()));

        final Set<RoleName> roleNames = signupRequestVO.getRole()
                .stream()
                .map(it -> RoleName.valueOf("ROLE_" + it.toUpperCase()))
                .collect(Collectors.toSet());
        final Set<Role> roles = new HashSet<>();

        if (roleNames == null) {
            final Role userRole = roleRepository.findByName(RoleName.ROLE_USER);
            roles.add(userRole);
        } else {
            for (final RoleName role : roleNames) {
                roles.add(roleRepository.findByName(role));
            }
        }
        user.setRoles(roles);
        userRepository.save(user);
        return "User registered successfully!";
    }

    @Transactional
    public Boolean existsByUsername(final String username) {
        return userRepository.existsByUsername(username);
    }

    public JwtResponseVO authenticateUser(final SignInRequestVO signinRequestVO) {
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signinRequestVO.getUsername(), signinRequestVO.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String jwt = jwtProvider.generateJwtToken(authentication);

        final UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        final List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return new JwtResponseVO(jwt, userDetails.getId(), userDetails.getUsername(), roles);
    }

    public UserVo findUserById(final Long id) {
        final var entity = userRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return new UserVo(entity.getId(), entity.getUsername());
    }
}
