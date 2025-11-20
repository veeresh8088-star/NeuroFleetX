package com.neurofleetx.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "vehicles")
public class Vehicle {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(name="vehicle_number", unique=true, nullable=false) private String vehicleNumber;
    private String model;
    private String status; // ACTIVE, IN_SERVICE, OFFLINE
    private double lat;
    private double lng;
    private String registrationOwner;

    @ManyToOne(optional = true)
    @JoinColumn(name = "owner_id", nullable = true)
    private User owner; // optional link to user who owns or is assigned this vehicle
    public Vehicle() {}
    public Vehicle(String vehicleNumber,String model,String status,double lat,double lng){
        this.vehicleNumber=vehicleNumber;this.model=model;this.status=status;this.lat=lat;this.lng=lng;
    }
    // getters & setters
    public Long getId(){return id;} public void setId(Long id){this.id=id;}
    public String getVehicleNumber(){return vehicleNumber;} public void setVehicleNumber(String v){this.vehicleNumber=v;}
    public String getModel(){return model;} public void setModel(String m){this.model=m;}
    public String getStatus(){return status;} public void setStatus(String s){this.status=s;}
    public double getLat(){return lat;} public void setLat(double l){this.lat=l;}
    public double getLng(){return lng;} public void setLng(double l){this.lng=l;}
    public String getRegistrationOwner(){return registrationOwner;} public void setRegistrationOwner(String s){this.registrationOwner=s;}
    public User getOwner(){return owner;} public void setOwner(User u){this.owner=u;}
}
