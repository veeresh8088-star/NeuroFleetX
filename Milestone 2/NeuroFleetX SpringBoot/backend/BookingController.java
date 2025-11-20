package com.neurofleetx.backend.controller;
import com.neurofleetx.backend.model.Booking;
import com.neurofleetx.backend.repository.BookingRepository;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@RestController @RequestMapping("/api/bookings") @CrossOrigin(origins="*")
public class BookingController {
    private final BookingRepository repo;
    public BookingController(BookingRepository repo){this.repo=repo;}
    @GetMapping public List<Booking> all(){ return repo.findAll(); }
    @PostMapping("/create") public Booking create(@RequestBody Booking b){ b.setBookingTime(LocalDateTime.now()); b.setStatus("BOOKED"); return repo.save(b); }
    @GetMapping("/{id}") public Booking get(@PathVariable Long id){ return repo.findById(id).orElse(null); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id){ repo.deleteById(id); }
}
