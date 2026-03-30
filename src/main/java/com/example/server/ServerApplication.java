package com.example.server;

import java.sql.Connection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@SpringBootApplication
@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "http://localhost:8081"})
public class ServerApplication {

    @Autowired
    private StudentRepository repo;

    @Autowired
    private BookingRepository bookingRepository;

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @GetMapping("/home")
    public String home() {
        return "Backend Running ✅";
    }

    @PostMapping("/register")
    public String register(@RequestBody Student student) {
        repo.save(student);
        return "Student Saved Successfully ✅";
    }

    @PostMapping("/bookings")
    public String createBooking(@RequestBody BookingRequest bookingRequest) {
        Booking booking = new Booking();
        booking.setHotelId(bookingRequest.hotelId);
        booking.setHotelName(bookingRequest.hotelName);
        booking.setHotelLocation(bookingRequest.hotelLocation);
        booking.setHotelImage(bookingRequest.hotelImage);
        booking.setHotelPrice(bookingRequest.hotelPrice);
        booking.setHotelRating(bookingRequest.hotelRating);
        booking.setCheckIn(LocalDate.parse(bookingRequest.checkIn));
        booking.setCheckOut(LocalDate.parse(bookingRequest.checkOut));
        booking.setGuests(bookingRequest.guests);
        booking.setRooms(bookingRequest.rooms);
        booking.setFirstName(bookingRequest.firstName);
        booking.setLastName(bookingRequest.lastName);
        booking.setEmail(bookingRequest.email);
        booking.setPhone(bookingRequest.phone);
        booking.setSpecialRequests(bookingRequest.specialRequests);
        booking.setTotal(bookingRequest.total);
        bookingRepository.save(booking);
        return "Booking Saved Successfully ✅";
    }
}