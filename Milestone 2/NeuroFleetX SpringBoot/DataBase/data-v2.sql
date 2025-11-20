-- Add missing columns to vehicles table (safe: only adds if not exists)
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS owner_id BIGINT;
ALTER TABLE vehicles ADD COLUMN IF NOT EXISTS registration_owner VARCHAR(255);

-- Add missing columns to bookings table (safe: only adds if not exists)
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS customer_phone VARCHAR(50);
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS user_id BIGINT;

-- Add missing columns to maintenance_records table (safe: only adds if not exists)
ALTER TABLE maintenance_records ADD COLUMN IF NOT EXISTS cost NUMERIC(10,2);
ALTER TABLE maintenance_records ADD COLUMN IF NOT EXISTS performed_by VARCHAR(255);
ALTER TABLE maintenance_records ADD COLUMN IF NOT EXISTS user_id BIGINT;
