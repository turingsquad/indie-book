package com.dream.team.indiebook.repository;

import com.dream.team.indiebook.entity.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {
    List<Comment> findByChapterId(Long chapter);
    Integer countByChapterId(Long chapterId);
}