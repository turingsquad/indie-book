package com.dream.team.indiebook.repository;

import com.dream.team.indiebook.entity.Like;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends CrudRepository<Like, Long> {
    List<Like> findByBookID(Long bookID);
    Integer countByBookID(Long bookID);
}