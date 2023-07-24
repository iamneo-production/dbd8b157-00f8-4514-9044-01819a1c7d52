
package com.iamneo.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.User;
import com.iamneo.security.entity.Userdetails;

public interface UserDetrepo extends JpaRepository<Userdetails, Integer> {

}
