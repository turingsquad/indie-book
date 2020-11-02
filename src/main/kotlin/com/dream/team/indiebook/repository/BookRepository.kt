package com.dream.team.indiebook.repository

import com.dream.team.indiebook.entity.Book
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface BookRepository : CrudRepository<Book, Long?> {
    fun findByAuthorId(authorId: Long): List<Book>
}