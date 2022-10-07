package com.example.blogpost.Dao;

import com.example.blogpost.Entity.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BlogPostRepository  extends JpaRepository<BlogPost, UUID> {






}
