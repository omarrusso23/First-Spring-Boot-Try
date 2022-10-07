package com.flights.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flights.model.Text;

@Repository
public interface PostRepository extends JpaRepository <Text, Integer>{
    

}
