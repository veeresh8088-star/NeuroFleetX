package com.neurofleetx.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "telemetry")
public class Telemetry {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String vehicleId;
    private String driverId;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private BigDecimal speed;
    private LocalDateTime recordedAt;
    
    // Constructors
    public Telemetry() {
        this.recordedAt = LocalDateTime.now();
    }
    
    public Telemetry(String vehicleId, String driverId, BigDecimal latitude, BigDecimal longitude, BigDecimal speed) {
        this.vehicleId = vehicleId;
        this.driverId = driverId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.speed = speed;
        this.recordedAt = LocalDateTime.now();
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getVehicleId() {
        return vehicleId;
    }
    
    public void setVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
    }
    
    public String getDriverId() {
        return driverId;
    }
    
    public void setDriverId(String driverId) {
        this.driverId = driverId;
    }
    
    public BigDecimal getLatitude() {
        return latitude;
    }
    
    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }
    
    public BigDecimal getLongitude() {
        return longitude;
    }
    
    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }
    
    public BigDecimal getSpeed() {
        return speed;
    }
    
    public void setSpeed(BigDecimal speed) {
        this.speed = speed;
    }
    
    public LocalDateTime getRecordedAt() {
        return recordedAt;
    }
    
    public void setRecordedAt(LocalDateTime recordedAt) {
        this.recordedAt = recordedAt;
    }
}
