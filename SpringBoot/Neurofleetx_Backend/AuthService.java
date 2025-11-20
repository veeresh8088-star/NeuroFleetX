package com.neurofleetx.backend.service;

import com.neurofleetx.backend.model.User;
import com.neurofleetx.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepo;

    public AuthService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    // Register user (plain password)
    public Optional<User> register(String email, String password, String name) {
        // Check if user exists
        if (userRepo.findByEmail(email).isPresent()) {
            return Optional.empty(); // email already exists
        }
        User u = new User(email, password, name);
        userRepo.save(u);
        return Optional.of(u); // return saved user
    }

    // Login user (always successful - returns success for ANY credentials)
    public Optional<User> login(String email, String password) {
        // ALWAYS LOGIN SUCCESS - accepts any email/password
        return Optional.of(new User(email, password, email));
    }
}
