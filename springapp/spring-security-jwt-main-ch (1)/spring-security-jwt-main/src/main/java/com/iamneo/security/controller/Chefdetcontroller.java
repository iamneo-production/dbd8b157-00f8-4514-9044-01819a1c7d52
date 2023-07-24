package com.iamneo.security.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import lombok.RequiredArgsConstructor;
import com.iamneo.security.entity.Chefdet;
import com.iamneo.security.service.Chefdetservice;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth/chefdet")
@RequiredArgsConstructor
public class Chefdetcontroller {

	 private final Chefdetservice u;

    @GetMapping("/")
    	public String get() {
    		return "Hello dfghjhg";
    	}
    
    @PostMapping("/post")
    public Chefdet addUser(@RequestBody Chefdet us) {
    	return u.addUser(us);
    }
//    @GetMapping("/")
//    public ResponseEntity<List<User>> getAllUsers() {
//        List<User> users = u.getAllUsers();
//        return ResponseEntity.ok(users);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<User> getUserById(@PathVariable Long id) {
//        User user = u.getUserById(id);
//        if (user != null) {
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
}
