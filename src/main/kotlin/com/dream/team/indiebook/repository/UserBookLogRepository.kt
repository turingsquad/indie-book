package com.dream.team.indiebook.repository

import com.dream.team.indiebook.entity.UserBookLog
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

/**
 * @author Alexander Kostyurenko
 */
@Repository
interface UserBookLogRepository : CrudRepository<UserBookLog, Long?> {
    fun findTop1ByUserId(userId: Long): UserBookLog?
}