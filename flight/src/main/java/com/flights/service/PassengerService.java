package com.flights.service;


import java.util.List;

import com.flights.model.Passenger;

public interface PassengerService {
    public Passenger savePassenger(Passenger passenger);
    public List<Passenger> getAllPassengers();
}
