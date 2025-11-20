CREATE TABLE users (
	id BIGSERIAL PRIMARY KEY,
	email VARCHAR(255) UNIQUE NOT NULL,
	password_hash VARCHAR(255) NOT NULL,
	full_name VARCHAR(255),
	phone VARCHAR(50),
	role VARCHAR(50)
);

CREATE TABLE vehicles (
	id BIGSERIAL PRIMARY KEY,
	vehicle_number VARCHAR(100) UNIQUE NOT NULL,
	model VARCHAR(100),
	status VARCHAR(50),
	lat DOUBLE PRECISION,
	lng DOUBLE PRECISION,
	registration_owner VARCHAR(255),
	owner_id BIGINT
);

CREATE TABLE bookings (
	id BIGSERIAL PRIMARY KEY,
	customer_name VARCHAR(255),
	customer_email VARCHAR(255),
	customer_phone VARCHAR(50),
	pickup_location TEXT,
	drop_location TEXT,
	vehicle_number VARCHAR(100),
	vehicle_type VARCHAR(100),
	fare NUMERIC(10,2),
	status VARCHAR(50),
	booking_time TIMESTAMP,
	user_id BIGINT
);

CREATE TABLE maintenance_records (
	id BIGSERIAL PRIMARY KEY,
	vehicle_number VARCHAR(100),
	type VARCHAR(100),
	scheduled_date DATE,
	notes TEXT,
	cost NUMERIC(10,2),
	performed_by VARCHAR(255),
	user_id BIGINT
);

CREATE TABLE vehicle_locations (
	id BIGSERIAL PRIMARY KEY,
	vehicle_number VARCHAR(100),
	lat DOUBLE PRECISION,
	lng DOUBLE PRECISION,
	timestamp TIMESTAMP
);

-- Foreign keys (optional, useful if DB enforces referential integrity)
ALTER TABLE vehicles ADD CONSTRAINT fk_vehicle_owner FOREIGN KEY (owner_id) REFERENCES users(id);
ALTER TABLE bookings ADD CONSTRAINT fk_booking_user FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE maintenance_records ADD CONSTRAINT fk_maintenance_user FOREIGN KEY (user_id) REFERENCES users(id);
