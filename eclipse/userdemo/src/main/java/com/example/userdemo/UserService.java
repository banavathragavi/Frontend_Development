package com.example.userdemo;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Save User
    public void save(User user) {
        userRepository.save(user);
    }

    // Find User By ID
    public Optional<User> findById(int id) {
        return userRepository.findById(id);
    }

    // Delete User By ID
    public String deleteById(int id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return "User deleted successfully";
        } else {
            return "User not found";
        }
    }

    // Find All Users
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
