package com.neurofleetx.repository;

import com.neurofleetx.entity.FleetManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FleetManagerRepository extends JpaRepository<FleetManager, Long> {
    Optional<FleetManager> findByUsername(String username);
    Optional<FleetManager> findByEmail(String email);
    Optional<FleetManager> findByUsernameAndFleetId(String username, String fleetId);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}