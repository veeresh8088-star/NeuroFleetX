package com.neurofleetx.repository;

import com.neurofleetx.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
    List<Route> findByDriverId(String driverId);
    List<Route> findByDriverIdAndStatus(String driverId, String status);
    List<Route> findByStatus(String status);
    Optional<Route> findFirstByDriverIdAndStatus(String driverId, String status);
    List<Route> findByDriverIdOrderByAssignedAtDesc(String driverId);
}