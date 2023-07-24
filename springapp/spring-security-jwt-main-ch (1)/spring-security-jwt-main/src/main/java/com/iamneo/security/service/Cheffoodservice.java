package com.iamneo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Cheffood;
import com.iamneo.security.repository.Cheffoodrepo;

import java.util.List;

@Service
public class Cheffoodservice {
	
	@Autowired
    Cheffoodrepo u;

    public Cheffood addUser(Cheffood us) {
    	System.out.print("hi");
        return u.save(us);
    }
    
//    public Cheffood getfood(int chefid) {
//	      return u.findById((long) chefid).get();
//	   }
    public List<Cheffood> getfood(int s)
	{
		return u.getchefid(s);
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