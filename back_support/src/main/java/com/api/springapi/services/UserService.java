package com.api.springapi.services;

import com.api.springapi.dto.UserDTO;
import com.api.springapi.models.Order;
import com.api.springapi.models.User;
import com.api.springapi.repositories.OrderRepository;
import com.api.springapi.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository; // Injectez le dépôt OrderRepository

    public List<UserDTO> findAll() {
        List<User> page = userRepository.findAll();
        return page.stream()
                .map(user -> {
                    UserDTO userDTO = new UserDTO();
                    BeanUtils.copyProperties(user, userDTO);
                    return userDTO;
                })
                .collect(Collectors.toList());
    }

    public Optional<UserDTO> findById(Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    UserDTO userDTO = new UserDTO();
                    BeanUtils.copyProperties(user, userDTO);
                    return userDTO;
                });
    }

    public UserDTO update(Long id, UserDTO userDTO) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        BeanUtils.copyProperties(userDTO, user);
        User updatedUser = userRepository.save(user);

        UserDTO updatedUserDTO = new UserDTO();
        BeanUtils.copyProperties(updatedUser, updatedUserDTO);
        return updatedUserDTO;
    }


    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }


}