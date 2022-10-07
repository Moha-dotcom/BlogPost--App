package com.example.blogpost.Controller;

import com.example.blogpost.Entity.BlogPost;
import com.example.blogpost.Service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/post")
public class BlogPostController {
    
    @Autowired
    BlogPostService postservice;

    @GetMapping()
    @CrossOrigin("http://localhost:64596")
    public List<BlogPost> getListofPosts(){
        return postservice.getListOfPost();
    }
    @PostMapping()
    @CrossOrigin("http://localhost:64596")
    public void savePost(@RequestBody BlogPost post){
        postservice.addPost(post);
    }


    @DeleteMapping("/{id}")
    @CrossOrigin("http://localhost:64596")
    public void deletePost(@PathVariable int id){
         postservice.deletePost(id);
    }
}
