package com.dream.team.indiebook.repository

import com.dream.team.indiebook.entity.Tag
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

/**
 * @author Alexander Kostyurenko
 */
@Repository
interface TagRepository : CrudRepository<Tag, Long?> {
    fun findByIdIn(ids: List<Long>): List<Tag>
}