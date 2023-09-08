package com.api.springapi.services;

import com.api.springapi.dto.UserDTO;
import com.api.springapi.models.User;
import com.api.springapi.repositories.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User save(UserDTO userDTO) {
        User user = new User();
        BeanUtils.copyProperties(userDTO, user, "id");
        return userRepository.save(user);
    }

    public User update(Long id, UserDTO userDTO) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        BeanUtils.copyProperties(userDTO, user, "id");
        return userRepository.save(user);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}