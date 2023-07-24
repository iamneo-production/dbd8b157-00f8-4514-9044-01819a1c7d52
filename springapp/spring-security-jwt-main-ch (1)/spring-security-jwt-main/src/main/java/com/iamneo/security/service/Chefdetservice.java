
package com.iamneo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Chefdet;
import com.iamneo.security.repository.Chefdetrepo;

import java.util.List;

@Service
public class Chefdetservice {
	
	@Autowired
    Chefdetrepo u;

    public Chefdet addUser(Chefdet us) {
    	System.out.print("hi");
        return u.save(us);
    }
    

//    public List<User> getAllUsers() {
//        return usersRepository.findAll();
//    }
//
//    public User getUserById(Long id) {
//        return usersRepository.findById(id).orElse(null);
//    }
//    public User updateUser(Long id, User user) {
//        User existingUser = usersRepository.findById(id).orElse(null);
//        if (existingUser != null) {
//            user.setId(existingUser.getId());
//            return usersRepository.save(user);
//        }
//        return null;
//    }
//
//    public boolean deleteUser(Long id) {
//        if (usersRepository.existsById(id)) {
//            usersRepository.deleteById(id);
//            return true;
//        }
//        return false;
//    }
}