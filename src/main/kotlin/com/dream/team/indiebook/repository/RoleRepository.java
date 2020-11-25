package com.dream.team.indiebook.repository;

import com.dream.team.indiebook.entity.Role;
import com.dream.team.indiebook.enums.RoleName;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findByName(RoleName name);
}