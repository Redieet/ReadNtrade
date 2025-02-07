package com.example.BookExchange.app.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.BookExchange.app.model.SignupRequest;

@RestController
@RequestMapping("/signup")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class SignupController {

    @PostMapping
    public ResponseEntity<String> signup(@RequestBody SignupRequest request) {
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }

        System.out.println("User signed up: " + request);
        return ResponseEntity.ok("Signup successful!");
    }
}
