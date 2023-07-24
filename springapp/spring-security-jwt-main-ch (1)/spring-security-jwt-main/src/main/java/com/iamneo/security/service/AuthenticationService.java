package com.iamneo.security.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.iamneo.security.dto.request.AuthenticationRequest;
//import com.iamneo.security.dto.request.AuthenticationRequestc;
import com.iamneo.security.dto.request.Chefregister;
import com.iamneo.security.dto.request.RegisterRequest;
import com.iamneo.security.dto.response.AuthenticationResponse;
//import com.iamneo.security.dto.response.AuthenticationResponsec;
//import com.iamneo.security.entity.Chef;
import com.iamneo.security.entity.Role;
import com.iamneo.security.entity.User;
//import com.iamneo.security.repository.Chefrepo;
import com.iamneo.security.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
//    private final Chefrepo c;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
//    private final AuthenticationManager a;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User
                .builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .role(Role.CHEF)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    
//    public AuthenticationResponse registers(Chefregister request) {
//        var user1 = Chef
//                .builder()
//                .username(request.getUsername())
//                .email(request.getEmail())
//                .password(passwordEncoder.encode(request.getPassword()))
//                .phone(request.getPhone())
//                .role(Role.CHEF)
//                .build();
//        c.save(user1);
//        var jwtToken = jwtService.generateToken(user1);
//        return AuthenticationResponse.builder()
//                .token(jwtToken)
//                .build();
//    }

    public AuthenticationResponse authenticate(AuthenticationRequest crequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(crequest.getEmail(), crequest.getPassword()));
        var user = userRepository.findByEmail(crequest.getEmail()).orElseThrow();
        Long userId=user.getChef_id();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .chefid(userId)
                .build();
    }
//    public AuthenticationResponsec authenticates(AuthenticationRequestc crequest) {
//    	authenticationManager.authenticate(
//    			new UsernamePasswordAuthenticationToken(crequest.getEmail(), crequest.getPassword()));
//    	var user1 = c.findByEmail(crequest.getEmail()).orElseThrow();
//    	Long chefId=user1.getId();
//    	var jwtTokenc = jwtService.generateToken(user1);
//    	return AuthenticationResponsec.builder()
//    			.token(jwtTokenc)
//    			.chefid(chefId)
//    			.build();
//    }


//    public AuthenticationResponse authenticate(AuthenticationRequest request) {
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
//        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
//        var jwtToken = "";
//        if(user != null){
//            jwtToken = jwtService.generateToken(user);
//            Long userId=user.getId();
//        } else {
//            var user1 = c.findByEmail(request.getEmail()).orElseThrow();
//            jwtToken = jwtService.generateToken(user1);
//            Long chefId=user1.getId();
//
//        }
//        Long userId = null;
//        Long ChefId = null;
//        return AuthenticationResponse.builder()
//                .token(jwtToken)
//                .userid(userId)
//                .build();
//    }


}
