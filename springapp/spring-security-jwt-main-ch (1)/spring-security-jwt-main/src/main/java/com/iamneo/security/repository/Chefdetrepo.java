package com.iamneo.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Chefdet;

public interface Chefdetrepo extends JpaRepository<Chefdet, Integer> {


//    Optional<User> findByEmail(String email);
}
