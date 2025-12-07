package com.neurofleetx.repository;

import com.neurofleetx.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {
    Optional<Driver> findByUsername(String username);
    Optional<Driver> findByUsernameAndLicenseNumber(String username, String licenseNumber);
    Optional<Driver> findByLicenseNumber(String licenseNumber);
}
