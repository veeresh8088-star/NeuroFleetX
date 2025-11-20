package com.neurofleetx.backend.model;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "maintenance_records")
public class MaintenanceRecord {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String vehicleNumber;
    private String type;
    private LocalDate scheduledDate;
    private String notes;
    private Double cost;
    private String performedBy; // technician name or vendor

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; // optional link to user who reported or owns vehicle
    public MaintenanceRecord(){}
    // getters/setters
    public Long getId(){return id;} public void setId(Long id){this.id=id;}
    public String getVehicleNumber(){return vehicleNumber;} public void setVehicleNumber(String s){this.vehicleNumber=s;}
    public String getType(){return type;} public void setType(String s){this.type=s;}
    public LocalDate getScheduledDate(){return scheduledDate;} public void setScheduledDate(LocalDate d){this.scheduledDate=d;}
    public String getNotes(){return notes;} public void setNotes(String s){this.notes=s;}
    public Double getCost(){return cost;} public void setCost(Double c){this.cost=c;}
    public String getPerformedBy(){return performedBy;} public void setPerformedBy(String s){this.performedBy=s;}
    public User getUser(){return user;} public void setUser(User u){this.user=u;}
}
