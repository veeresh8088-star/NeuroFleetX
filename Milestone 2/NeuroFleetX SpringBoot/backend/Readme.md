# NeuroFleetX Backend (Spring Boot)

## Run with H2 (dev quick start)
1. cd backend
2. mvn clean package
3. mvn spring-boot:run
- Backend: http://localhost:8080
- H2 console: http://localhost:8080/h2-console (JDBC: jdbc:h2:mem:neurofleetxdb)

## Run with PostgreSQL (recommended)
1. Start PostgreSQL and create DB `neurofleetx`
2. Set env vars (Windows PowerShell):
   $env:SPRING_DATASOURCE_URL="jdbc:postgresql://localhost:5432/neurofleetx"
   $env:SPRING_DATASOURCE_USERNAME="your_pg_user"
   $env:SPRING_DATASOURCE_PASSWORD="your_pg_password"
   $env:JWT_SECRET="ReplaceWithAStrongSecretKey"
3. mvn spring-boot:run
Flyway will run migrations on start.

## API basics
- POST /api/auth/register
- POST /api/auth/login
- GET /api/vehicles
- POST /api/vehicles
- GET /api/bookings
- POST /api/bookings/create
- GET /api/maintenance
- POST /api/maintenance
