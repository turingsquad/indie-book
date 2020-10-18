package com.dream.team.indiebook.repository

import com.dream.team.indiebook.entity.Chapter
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

/**
 * @author Alexander Kostyurenko
 */
@Repository
interface ChapterRepository : CrudRepository<Chapter, Long?> {
    fun findByBookId(bookId: Long): List<Chapter>
    fun countByBookId(bookId: Long): Int
}