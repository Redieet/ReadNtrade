package com.example.BookExchange.app.model;

public class SignupRequest {
        private String email;
        private String username;
        private String password;
        private String confirmPassword;
    
        // Getters and Setters
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
    
        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }
    
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    
        public String getConfirmPassword() { return confirmPassword; }
        public void setConfirmPassword(String confirmPassword) { this.confirmPassword = confirmPassword; }
 }
