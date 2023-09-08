package com.api.springapi.services;

import com.api.springapi.dto.ClientOverviewDTO;
import com.api.springapi.dto.SubscriptionDetailDTO;
import com.api.springapi.models.Plan;
import com.api.springapi.models.User;
import com.api.springapi.repositories.ChatbotRepository;
import com.api.springapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class StatistiquesAgregeesService {

    @Autowired
    private ChatbotRepository chatbotRepository;

    @Autowired
    private UserRepository userRepository;

    public Long getTotalChatbots() {
        return chatbotRepository.countChatbots();
    }

    public Long getTotalUsers() {
        return userRepository.countUsers();
    }

    public List<ClientOverviewDTO> getClientsOverview() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> {
                    Long chatbotsCount = chatbotRepository.countChatbotsByUserId(user.getId());
                    List<String> urls = chatbotRepository.findByUserId(user.getId()).stream()
                            .map(chatbot -> chatbot.getUrl())  // Changed this line
                            .collect(Collectors.toList());

                    Map<String, String> chatbotUrlsMap = new HashMap<>();
                    for (int i = 0; i < urls.size(); i++) {
                        chatbotUrlsMap.put("url " + (i + 1), urls.get(i));
                    }

                    return new ClientOverviewDTO(user.getEmail(), user.getCreatedAt().atStartOfDay(), chatbotsCount, chatbotUrlsMap);
                })
                .collect(Collectors.toList());
    }

    public List<SubscriptionDetailDTO> getSubscriptionDetails() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> {
                    Plan plan = user.getPlan();
                    String planName = plan != null ? plan.getName() : "No Plan";
                    BigDecimal planPrice = plan != null ? plan.getPrice() : BigDecimal.ZERO;
                    String planInterval = plan != null ? plan.getInterval() : "No Interval";
                    return new SubscriptionDetailDTO(user.getEmail(), planName, planPrice, planInterval, user.getCreatedAt().atStartOfDay());
                })
                .collect(Collectors.toList());
    }
}
