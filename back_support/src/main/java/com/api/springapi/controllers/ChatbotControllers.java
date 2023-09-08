package com.api.springapi.controllers;

import com.api.springapi.dto.ChatbotDTO;
import com.api.springapi.models.Chatbot;
import com.api.springapi.services.ChatbotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/chatbots")
public class ChatbotControllers {
    @Autowired
    private ChatbotService chatbotService;

    @GetMapping
    public ResponseEntity<List<Chatbot>> findAll() {
        List<Chatbot> chatbots = chatbotService.findAll();
        return ResponseEntity.ok(chatbots);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chatbot> findById(@PathVariable Long id) {
        Optional<Chatbot> chatbotOptional = chatbotService.findById(id);
        return chatbotOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Chatbot> create(@RequestBody ChatbotDTO chatbotDTO) {
        Chatbot chatbot = chatbotService.save(chatbotDTO);
        return ResponseEntity.ok(chatbot);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Chatbot> update(@PathVariable Long id, @RequestBody ChatbotDTO chatbotDTO) {
        Chatbot chatbot = chatbotService.update(id, chatbotDTO);
        return ResponseEntity.ok(chatbot);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        chatbotService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
