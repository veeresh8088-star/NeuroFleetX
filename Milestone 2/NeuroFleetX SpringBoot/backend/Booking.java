package com.neurofleetx.backend.model;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String customerName;
    private String customerEmail;
    private String customerPhone;
    private String pickupLocation;
    private String dropLocation;
    private String vehicleNumber;
    private String vehicleType;
    private Double fare;
    private String status;
    private LocalDateTime bookingTime;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; // link to registered user when available
        public User getUser(){return user;} public void setUser(User u){this.user=u;}
    public Booking(){}
    // getters/setters
    public Long getId(){return id;} public void setId(Long id){this.id=id;}
    public String getCustomerName(){return customerName;} public void setCustomerName(String s){this.customerName=s;}
    public String getCustomerEmail(){return customerEmail;} public void setCustomerEmail(String s){this.customerEmail=s;}
    public String getPickupLocation(){return pickupLocation;} public void setPickupLocation(String s){this.pickupLocation=s;}
    public String getDropLocation(){return dropLocation;} public void setDropLocation(String s){this.dropLocation=s;}
    public String getVehicleNumber(){return vehicleNumber;} public void setVehicleNumber(String s){this.vehicleNumber=s;}
    public String getVehicleType(){return vehicleType;} public void setVehicleType(String s){this.vehicleType=s;}
    public Double getFare(){return fare;} public void setFare(Double f){this.fare=f;}
    public String getStatus(){return status;} public void setStatus(String s){this.status=s;}
    public LocalDateTime getBookingTime(){return bookingTime;} public void setBookingTime(LocalDateTime t){this.bookingTime=t;}
}
