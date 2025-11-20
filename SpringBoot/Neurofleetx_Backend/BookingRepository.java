package com.neurofleetx.backend.repository;
import com.neurofleetx.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
public interface BookingRepository extends JpaRepository<Booking, Long> {}
