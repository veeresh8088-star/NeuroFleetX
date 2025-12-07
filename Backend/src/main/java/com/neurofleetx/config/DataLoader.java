package com.neurofleetx.config;

import com.neurofleetx.entity.Booking;
import com.neurofleetx.entity.Customer;
import com.neurofleetx.repository.BookingRepository;
import com.neurofleetx.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public void run(String... args) throws Exception {
        // Check if sample data already exists
        if (customerRepository.count() == 0) {
            loadSampleCustomers();
        }
        
        if (bookingRepository.count() == 0) {
            loadSampleBookings();
        }
    }

    private void loadSampleCustomers() {
        // Create sample customers
        Customer customer1 = new Customer();
        customer1.setUsername("john_customer");
        customer1.setEmail("john@customer.com");
        customer1.setPassword("password123"); // In real app, this should be hashed
        customer1.setName("John Customer");
        customer1.setPhoneNumber("+1-555-0200");
        customer1.setAddress("123 Main St");
        customer1.setCity("San Francisco");
        customer1.setState("CA");
        customer1.setZipCode("94102");
        customer1.setCountry("USA");
        
        Customer customer2 = new Customer();
        customer2.setUsername("jane_customer");
        customer2.setEmail("jane@customer.com");
        customer2.setPassword("password123");
        customer2.setName("Jane Customer");
        customer2.setPhoneNumber("+1-555-0201");
        customer2.setAddress("456 Oak Ave");
        customer2.setCity("Los Angeles");
        customer2.setState("CA");
        customer2.setZipCode("90210");
        customer2.setCountry("USA");

        customerRepository.save(customer1);
        customerRepository.save(customer2);
        
        System.out.println("✓ Sample customers created");
    }

    private void loadSampleBookings() {
        // Get sample customers
        Customer customer1 = customerRepository.findByEmail("john@customer.com").orElse(null);
        Customer customer2 = customerRepository.findByEmail("jane@customer.com").orElse(null);
        
        if (customer1 != null) {
            // Create sample bookings for customer1
            Booking booking1 = new Booking();
            booking1.setUserId(customer1.getId().toString());
            booking1.setUserName(customer1.getName());
            booking1.setVehicleId("1");
            booking1.setVehicleName("Tesla Model 3");
            booking1.setVehicleRegistration("TES-001");
            booking1.setStartDate(LocalDateTime.now().plusDays(1));
            booking1.setEndDate(LocalDateTime.now().plusDays(2));
            booking1.setPurpose("Business Meeting");
            booking1.setPickupLocation("123 Main St, San Francisco, CA");
            booking1.setDropoffLocation("456 Business Plaza, San Francisco, CA");
            booking1.setContactNumber(customer1.getPhoneNumber());
            booking1.setStatus("confirmed");
            booking1.setEstimatedCost(150.0);
            booking1.setNotes("Need GPS navigation");
            
            Booking booking2 = new Booking();
            booking2.setUserId(customer1.getId().toString());
            booking2.setUserName(customer1.getName());
            booking2.setVehicleId("2");
            booking2.setVehicleName("Ford Transit");
            booking2.setVehicleRegistration("FOR-002");
            booking2.setStartDate(LocalDateTime.now().plusDays(5));
            booking2.setEndDate(LocalDateTime.now().plusDays(7));
            booking2.setPurpose("Family Trip");
            booking2.setPickupLocation("123 Main St, San Francisco, CA");
            booking2.setDropoffLocation("789 Beach Resort, Santa Cruz, CA");
            booking2.setContactNumber(customer1.getPhoneNumber());
            booking2.setStatus("pending");
            booking2.setEstimatedCost(300.0);
            booking2.setNotes("Weekend getaway");
            
            Booking booking3 = new Booking();
            booking3.setUserId(customer1.getId().toString());
            booking3.setUserName(customer1.getName());
            booking3.setVehicleId("1");
            booking3.setVehicleName("Tesla Model 3");
            booking3.setVehicleRegistration("TES-001");
            booking3.setStartDate(LocalDateTime.now().minusDays(5));
            booking3.setEndDate(LocalDateTime.now().minusDays(3));
            booking3.setPurpose("Airport Transfer");
            booking3.setPickupLocation("123 Main St, San Francisco, CA");
            booking3.setDropoffLocation("San Francisco International Airport");
            booking3.setContactNumber(customer1.getPhoneNumber());
            booking3.setStatus("completed");
            booking3.setEstimatedCost(75.0);
            
            bookingRepository.save(booking1);
            bookingRepository.save(booking2);
            bookingRepository.save(booking3);
        }
        
        if (customer2 != null) {
            // Create sample booking for customer2
            Booking booking4 = new Booking();
            booking4.setUserId(customer2.getId().toString());
            booking4.setUserName(customer2.getName());
            booking4.setVehicleId("3");
            booking4.setVehicleName("Mercedes Sprinter");
            booking4.setVehicleRegistration("MER-003");
            booking4.setStartDate(LocalDateTime.now().plusDays(3));
            booking4.setEndDate(LocalDateTime.now().plusDays(4));
            booking4.setPurpose("Corporate Event");
            booking4.setPickupLocation("456 Oak Ave, Los Angeles, CA");
            booking4.setDropoffLocation("Convention Center, Los Angeles, CA");
            booking4.setContactNumber(customer2.getPhoneNumber());
            booking4.setStatus("confirmed");
            booking4.setEstimatedCost(200.0);
            booking4.setNotes("Group transportation needed");
            
            bookingRepository.save(booking4);
        }
        
        System.out.println("✓ Sample bookings created");
    }
}