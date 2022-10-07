package com.example.blogpost.Service;

import com.example.blogpost.Dao.BlogPostRepository;
import com.example.blogpost.Entity.BlogPost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogPostService {
    @Autowired
    BlogPostRepository postrepo;
    public List<BlogPost> getListOfPost(){
        return postrepo.findAll();
    }

    public void addPost(BlogPost post){
        postrepo.save(post);
    }

    public void deletePost(int id){
        BlogPost postneed = null ;
       for(BlogPost post : postrepo.findAll()){
           if(post.getId() == id){
               postneed = post;
           }
       }
         postrepo.delete(postneed);
    }


}
