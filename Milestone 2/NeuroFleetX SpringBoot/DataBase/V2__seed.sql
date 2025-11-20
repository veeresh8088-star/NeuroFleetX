-- create some users
INSERT INTO users (email, password_hash, full_name, phone, role) VALUES
('admin@neuro.com','$2a$10$7q0J7uYBqv8Qj1vK1qf3EO3zKZQ6aYQ6cP8OqXv1c8W8a0xYq5bG6','Admin User','+911234567890','ROLE_ADMIN'),
('alice@example.com','$2a$10$abcdefghijklmnopqrstuv','Alice Johnson','+919876543210','ROLE_USER'),
('bob@example.com','$2a$10$zyxwvutsrqponmlkjihg','Bob Kumar','+919812345678','ROLE_USER');

-- vehicles linked to owners
INSERT INTO vehicles (vehicle_number, model, status, lat, lng, registration_owner, owner_id) VALUES
('NF-1001','Toyota Prius','ACTIVE',12.9716,77.5946,'Alice Johnson', 2),
('NF-1002','Hyundai i20','IN_SERVICE',12.9750,77.5990,'Bob Kumar', 3);

-- bookings with user reference and phone
INSERT INTO bookings (customer_name, customer_email, customer_phone, pickup_location, drop_location, vehicle_number, vehicle_type, fare, status, booking_time, user_id) VALUES
('Alice Johnson','alice@example.com','+919876543210','MG Road','Indiranagar','NF-1001','Sedan',250.0,'COMPLETED', now(), 2),
('Bob Kumar','bob@example.com','+919812345678','Koramangala','Whitefield','NF-1002','Hatchback',180.0,'SCHEDULED', now()+ interval '1 day',3);

-- maintenance records with cost and assigned user
INSERT INTO maintenance_records (vehicle_number, type, scheduled_date, notes, cost, performed_by, user_id) VALUES
('NF-1002','Oil Change','2025-12-01','Quarterly oil change',1200.00,'QuickFix Garage',3);
