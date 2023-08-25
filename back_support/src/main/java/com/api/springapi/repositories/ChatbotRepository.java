package com.api.springapi.repositories;

import com.api.springapi.models.Chatbot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface ChatbotRepository extends JpaRepository<Chatbot, Long> {

    //Requête pour calculer le cnombre total de chatbot
    @Query("SELECT COUNT(c) FROM Chatbot c")  // Assurez-vous que le nom du modèle corresponde à la table shopify_stores
    Long countChatbots();

    //Requête pour calculer le cnombre total de chatbot par client
    @Query("SELECT COUNT(c) FROM Chatbot c WHERE c.userId = :userId")  // Assurez-vous que "userId" est le nom du champ dans votre modèle Chatbot représentant l'utilisateur
    Long countChatbotsByUserId(Long userId);

    Collection<Chatbot> findByUserId(Long id);
}
