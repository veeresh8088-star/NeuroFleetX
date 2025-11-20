package com.neurofleetx.backend.controller;
import com.neurofleetx.backend.model.MaintenanceRecord;
import com.neurofleetx.backend.repository.MaintenanceRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/maintenance") @CrossOrigin(origins="*")
public class MaintenanceController {
    private final MaintenanceRepository repo;
    public MaintenanceController(MaintenanceRepository repo){this.repo=repo;}
    @GetMapping public List<MaintenanceRecord> all(){ return repo.findAll(); }
    @PostMapping public MaintenanceRecord create(@RequestBody MaintenanceRecord m){ return repo.save(m); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id){ repo.deleteById(id); }
}
