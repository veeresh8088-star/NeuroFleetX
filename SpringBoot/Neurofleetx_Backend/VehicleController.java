package com.neurofleetx.backend.controller;
import com.neurofleetx.backend.model.Vehicle;
import com.neurofleetx.backend.repository.VehicleRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/vehicles") @CrossOrigin(origins="*")
public class VehicleController {
    private final VehicleRepository repo;
    public VehicleController(VehicleRepository repo){this.repo=repo;}
    @GetMapping public List<Vehicle> all(){ return repo.findAll(); }
    @PostMapping public Vehicle create(@RequestBody Vehicle v){ return repo.save(v); }
    @GetMapping("/{id}") public Vehicle get(@PathVariable Long id){ return repo.findById(id).orElse(null); }
    @PutMapping("/{id}") public Vehicle update(@PathVariable Long id, @RequestBody Vehicle u){
        return repo.findById(id).map(x->{ x.setModel(u.getModel()); x.setStatus(u.getStatus()); x.setLat(u.getLat()); x.setLng(u.getLng()); return repo.save(x); }).orElse(null);
    }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id){ repo.deleteById(id); }
}
