package com.neurofleetx.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "notification_preferences")
public class NotificationPreference {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userId;
    private boolean emailAlerts;
    private boolean smsNotifications;
    private boolean pushNotifications;
    
    // Email settings
    private String emailAddress;
    
    // SMS settings
    private String phoneNumber;
    
    // Push notification settings
    private String deviceToken;
    
    // Constructors
    public NotificationPreference() {}
    
    public NotificationPreference(String userId, boolean emailAlerts, 
                                  boolean smsNotifications, boolean pushNotifications) {
        this.userId = userId;
        this.emailAlerts = emailAlerts;
        this.smsNotifications = smsNotifications;
        this.pushNotifications = pushNotifications;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getUserId() {
        return userId;
    }
    
    public void setUserId(String userId) {
        this.userId = userId;
    }
    
    public boolean isEmailAlerts() {
        return emailAlerts;
    }
    
    public void setEmailAlerts(boolean emailAlerts) {
        this.emailAlerts = emailAlerts;
    }
    
    public boolean isSmsNotifications() {
        return smsNotifications;
    }
    
    public void setSmsNotifications(boolean smsNotifications) {
        this.smsNotifications = smsNotifications;
    }
    
    public boolean isPushNotifications() {
        return pushNotifications;
    }
    
    public void setPushNotifications(boolean pushNotifications) {
        this.pushNotifications = pushNotifications;
    }
    
    public String getEmailAddress() {
        return emailAddress;
    }
    
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
    
    public String getPhoneNumber() {
        return phoneNumber;
    }
    
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    
    public String getDeviceToken() {
        return deviceToken;
    }
    
    public void setDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
    }
}
