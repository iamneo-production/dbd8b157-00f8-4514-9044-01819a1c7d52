package com.iamneo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.User;
import com.iamneo.security.repository.UserRepository;

import java.util.List;

@Service
public class UsersService {

    private final UserRepository usersRepository;

    @Autowired
    public UsersService(UserRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<User> getAllUsers() {
        return usersRepository.findAll();
    }

    public User getUserById(Long id) {
        return usersRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        return usersRepository.save(user);
    }

    public User updateUser(Long id, User user) {
        User existingUser = usersRepository.findById(id).orElse(null);
        if (existingUser != null) {
            user.setChef_id(existingUser.getChef_id());
            return usersRepository.save(user);
        }
        return null;
    }

    public boolean deleteUser(Long id) {
        if (usersRepository.existsById(id)) {
            usersRepository.deleteById(id);
            return true;
        }
        return false;
    }
}