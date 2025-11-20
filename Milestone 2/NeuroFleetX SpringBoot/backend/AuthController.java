package com.neurofleetx.backend.controller;

import com.neurofleetx.backend.model.User;
import com.neurofleetx.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173, http://localhost:5174, http://localhost:5175", allowCredentials = "true")
public class AuthController {

    @Autowired
    private AuthService authService;

    // SIMPLE REGISTER - returns JSON with token on success
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody User user) {
        return authService.register(user.getEmail(), user.getPassword(), user.getName())
                .map(u -> {
                    Map<String, String> body = new HashMap<>();
                    body.put("token", UUID.randomUUID().toString());
                    body.put("message", "Registered successfully");
                    return ResponseEntity.ok(body);
                })
                .orElseGet(() -> {
                    Map<String, String> err = new HashMap<>();
                    err.put("error", "Email already exists");
                    return ResponseEntity.status(HttpStatus.CONFLICT).body(err);
                });
    }

    // SIMPLE LOGIN - returns JSON with token on success
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User request) {
        return authService.login(request.getEmail(), request.getPassword())
                .map(u -> {
                    Map<String, String> body = new HashMap<>();
                    body.put("token", UUID.randomUUID().toString());
                    body.put("message", "Login successful");
                    return ResponseEntity.ok(body);
                })
                .orElseGet(() -> {
                    Map<String, String> err = new HashMap<>();
                    err.put("error", "Invalid email or password");
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(err);
                });
    }
}
