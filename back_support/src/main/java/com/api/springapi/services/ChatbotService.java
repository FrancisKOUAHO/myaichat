package com.api.springapi.services;

import com.api.springapi.dto.ChatbotDTO;
import com.api.springapi.models.Chatbot;
import com.api.springapi.repositories.ChatbotRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ChatbotService {

    @Autowired
    private ChatbotRepository chatbotRepository;

    public List<Chatbot> findAll() {
        return chatbotRepository.findAll();
    }

    public Optional<Chatbot> findById(Long id) {
        return chatbotRepository.findById(id);
    }

    public Chatbot save(ChatbotDTO chatbotDTO) {
        Chatbot chatbot = new Chatbot();
        BeanUtils.copyProperties(chatbotDTO, chatbot, "id");

        return chatbotRepository.save(chatbot);
    }

    public Chatbot update(Long id, ChatbotDTO chatbotDTO) {
        Chatbot chatbot = chatbotRepository.findById(id).orElseThrow(() -> new RuntimeException("Chatbot not found"));
        BeanUtils.copyProperties(chatbotDTO, chatbot, "id");

        return chatbotRepository.save(chatbot);
    }

    public void deleteById(Long id) {
        chatbotRepository.deleteById(id);
    }

}
