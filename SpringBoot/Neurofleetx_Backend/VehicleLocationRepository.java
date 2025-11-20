package com.neurofleetx.backend.repository;
import com.neurofleetx.backend.model.VehicleLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface VehicleLocationRepository extends JpaRepository<VehicleLocation, Long> {
  List<VehicleLocation> findTop50ByVehicleNumberOrderByTimestampDesc(String vehicleNumber);
}
