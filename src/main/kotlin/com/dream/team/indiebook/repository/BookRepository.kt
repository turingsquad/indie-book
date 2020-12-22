package com.dream.team.indiebook.repository

import com.dream.team.indiebook.entity.Book
import com.dream.team.indiebook.entity.Tag
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface BookRepository : PagingAndSortingRepository<Book, Long?> {
    fun findByAuthorId(authorId: Long): List<Book>
    fun findAllByTagsContainsAndNameContaining(tags: Tag, name: String, pageable: Pageable): Page<Book>
    fun findByNameContaining(name: String, pageable: Pageable): Page<Book>

    @Query(nativeQuery = true, value = "SELECT *  FROM books ORDER BY random() LIMIT ?1")
    fun findRandom(limit: Int): List<Book>
}