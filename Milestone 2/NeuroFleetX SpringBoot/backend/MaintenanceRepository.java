package com.neurofleetx.backend.repository;
import com.neurofleetx.backend.model.MaintenanceRecord;
import org.springframework.data.jpa.repository.JpaRepository;
public interface MaintenanceRepository extends JpaRepository<MaintenanceRecord, Long> {}
