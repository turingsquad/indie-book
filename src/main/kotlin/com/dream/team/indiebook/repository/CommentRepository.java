package com.dream.team.indiebook.repository;

import com.dream.team.indiebook.entity.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Long> {
    List<Comment> findByBookID(Long bookID);
    Integer countByBookID(Long bookID);
}