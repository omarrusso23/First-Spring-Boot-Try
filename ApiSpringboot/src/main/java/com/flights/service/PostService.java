package com.flights.service;

import java.util.List;

import com.flights.model.Text;

public interface PostService {
    public Text savePost(Text post);

    public List<Text> getAllPosts();

}
