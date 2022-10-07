package com.flights.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flights.model.Text;
import com.flights.repository.PostRepository;

import java.util.List;

@Service
public class PostServicempl implements PostService {

    @Autowired
    private PostRepository postRepository;
    @Override
    public Text savePost(Text post) {
        return postRepository.save(post);
    }
    public List<Text> getAllPosts() {
        return postRepository.findAll();
    }


}
