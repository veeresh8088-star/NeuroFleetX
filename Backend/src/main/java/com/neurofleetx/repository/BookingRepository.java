package com.neurofleetx.repository;

import com.neurofleetx.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    
    List<Booking> findByUserId(String userId);
    
    List<Booking> findByVehicleId(String vehicleId);
    
    List<Booking> findByStatus(String status);
    
    List<Booking> findByUserIdAndStatus(String userId, String status);
    
    List<Booking> findByVehicleIdAndStatus(String vehicleId, String status);
    
    List<Booking> findByAssignedDriverId(String driverId);
    
    @Query("SELECT b FROM Booking b WHERE b.vehicleId = ?1 AND b.status IN ('pending', 'confirmed', 'active') AND b.startDate < ?3 AND b.endDate > ?2")
    List<Booking> findConflictingBookings(String vehicleId, LocalDateTime startDate, LocalDateTime endDate);
    
    @Query("SELECT b FROM Booking b WHERE b.userId = ?1 AND b.startDate >= ?2 AND b.status IN ('pending', 'confirmed')")
    List<Booking> findUpcomingBookings(String userId, LocalDateTime now);
}
