package com.dream.team.indiebook.repository

import com.dream.team.indiebook.entity.UserBookLog
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

/**
 * @author Alexander Kostyurenko
 */
@Repository
interface UserBookLogRepository : CrudRepository<UserBookLog, Long?> {
    @Query(nativeQuery = true, value = "SELECT * FROM user_book_log WHERE user_id = ?1 ORDER BY log_date DESC limit 1")
    fun findLast(userId: Long): UserBookLog?
}