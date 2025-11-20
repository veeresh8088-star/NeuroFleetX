package com.neurofleetx.backend.model;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "vehicle_locations")
public class VehicleLocation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String vehicleNumber;
    private double lat;
    private double lng;
    private LocalDateTime timestamp;
    public VehicleLocation(){}
    // getters/setters
    public Long getId(){return id;} public void setId(Long id){this.id=id;}
    public String getVehicleNumber(){return vehicleNumber;} public void setVehicleNumber(String s){this.vehicleNumber=s;}
    public double getLat(){return lat;} public void setLat(double l){this.lat=l;}
    public double getLng(){return lng;} public void setLng(double l){this.lng=l;}
    public LocalDateTime getTimestamp(){return timestamp;} public void setTimestamp(LocalDateTime t){this.timestamp=t;}
}
