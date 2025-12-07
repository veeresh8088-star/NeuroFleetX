package com.neurofleetx.repository;

import com.neurofleetx.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByUsername(String username);
    Optional<Customer> findByEmail(String email);
    Optional<Customer> findByUsernameOrEmail(String username, String email);
    List<Customer> findByStatus(String status);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
