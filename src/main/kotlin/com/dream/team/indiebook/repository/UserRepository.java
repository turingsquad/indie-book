package com.dream.team.indiebook.repository;

import com.dream.team.indiebook.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);

    Boolean existsByUsername(String username);
}
