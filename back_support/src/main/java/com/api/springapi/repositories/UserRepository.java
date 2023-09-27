package com.api.springapi.repositories;

import com.api.springapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;
@Repository
public interface UserRepository  extends JpaRepository<User, Long> {
        Optional<User> findByEmail(String email);
        Optional<User> findByMagicLinkTokenAndMagicLinkTokenExpiresAtAfter(String token, LocalDateTime time);
        User findByMagicLinkToken(String magicLinkToken);

        //Requête pour calculer le cnombre total de client
        @Query("SELECT COUNT(u) FROM User u")
        Long countUsers();
}
