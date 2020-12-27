package com.dream.team.indiebook.repository

import com.dream.team.indiebook.entity.Book
import com.dream.team.indiebook.entity.Tag
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface BookRepository : PagingAndSortingRepository<Book, Long?> {
    fun findByAuthorIdOrderByIdDesc(authorId: Long): List<Book>
    fun findByNameContaining(name: String, pageable: Pageable): Page<Book>
    fun findAllByTagsContains(tags: Tag, pageable: Pageable): Page<Book>

    @Query(nativeQuery = true, value = "SELECT *  FROM books ORDER BY random() LIMIT ?1")
    fun findRandom(limit: Int): List<Book>

    @Query(
        nativeQuery = true, value = """
                SELECT * FROM books
                    WHERE upper(name) LIKE upper(concat('%', :namePart, '%'))
                    AND id IN (
                        SELECT book_id FROM books_tags
                        WHERE tag_id IN (
                            :tagIds
                        )
                    )
                    ORDER BY id DESC
    """, countQuery = """
                SELECT count(*) FROM books
                    WHERE upper(name) LIKE upper(concat('%', :namePart, '%'))
                    AND id IN (
                        SELECT book_id FROM books_tags
                        WHERE tag_id IN (
                            :tagIds
                        )
                    )
    """
    )
    fun findByTagsAndName(
        @Param("namePart") namePart: String,
        @Param("tagIds") tagIds: List<Long>,
        pageable: Pageable
    ): Page<Book>
}