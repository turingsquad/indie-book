package com.dream.team.indiebook.repository;

import com.dream.team.indiebook.entity.Dislike;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DislikeRepository extends CrudRepository<Dislike, Long> {
    List<Dislike> findByBookID(Long bookID);
    Integer countByBookID(Long bookID);
}