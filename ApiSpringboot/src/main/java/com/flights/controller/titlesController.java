package com.flights.controller;
import javax.persistence.*;

import com.flights.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties.Jdbc;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.flights.model.Text;
import com.flights.service.PostService;
@RestController
@CrossOrigin
public class titlesController {
    @Autowired
    private PostService PostService;

    @GetMapping(value = "/titles")
    public void getAndPostTitle(@RequestParam String title) {
        System.out.println("El título " +title+ " ha sido recibido");
    }
    @PostMapping("/add")
    public String add(@RequestBody Text post){
        PostService.savePost(post);
        return "New post is added";
    }

    @GetMapping("/getAll")
    public List<Text> list(){
        return PostService.getAllPosts();
    }
}