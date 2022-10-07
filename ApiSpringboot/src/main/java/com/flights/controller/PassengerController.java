package com.flights.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.flights.model.Passenger;
import com.flights.service.PassengerService;

@RestController
@RequestMapping("/passenger")
@CrossOrigin

public class PassengerController {
    @Autowired
    private PassengerService passengerService;

    @PostMapping("/add")
    public String add(@RequestBody Passenger passenger){
        passengerService.savePassenger(passenger);
        return "New passenger is added";
    }

    @GetMapping("/getAll")
    public List<Passenger> list(){
        return passengerService.getAllPassengers();
    }
}
