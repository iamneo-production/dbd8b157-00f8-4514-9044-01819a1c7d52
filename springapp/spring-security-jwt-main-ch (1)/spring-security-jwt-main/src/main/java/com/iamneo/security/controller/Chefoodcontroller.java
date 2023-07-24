package com.iamneo.security.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import lombok.RequiredArgsConstructor;
import com.iamneo.security.entity.Cheffood;
import com.iamneo.security.service.Cheffoodservice;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth/cheffood")
@RequiredArgsConstructor
public class Chefoodcontroller {

	 private final Cheffoodservice u;

    @GetMapping("/get/{chefid}")
	   public List<Cheffood> getmovie(@PathVariable("chefid") int chefid) {
	      return u.getfood(chefid);
	   }
    
    @PostMapping("/post")
    public Cheffood addUser(@RequestBody Cheffood us) {
    	return u.addUser(us);
    }
}