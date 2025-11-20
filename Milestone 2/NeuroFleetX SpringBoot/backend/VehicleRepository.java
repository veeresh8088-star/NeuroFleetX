package com.neurofleetx.backend.repository;
import com.neurofleetx.backend.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
  Vehicle findByVehicleNumber(String vehicleNumber);
}
