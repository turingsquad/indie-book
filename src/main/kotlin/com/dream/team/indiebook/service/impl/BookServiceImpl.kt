package com.dream.team.indiebook.service.impl

import com.dream.team.indiebook.entity.Book
import com.dream.team.indiebook.repository.BookRepository
import com.dream.team.indiebook.request.SearchRequest
import com.dream.team.indiebook.service.BookService
import com.dream.team.indiebook.service.ChapterService
import com.dream.team.indiebook.service.RateService
import com.dream.team.indiebook.service.TagService
import com.dream.team.indiebook.vo.BookVo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.time.LocalDateTime

/**
 * @author Alexander Kostyurenko
 */
@Service
class BookServiceImpl : BookService {
    @set:Autowired
    lateinit var bookRepository: BookRepository

    @set:Autowired
    lateinit var rateService: RateService

    @set:Autowired
    lateinit var chapterService: ChapterService

    @set:Autowired
    lateinit var tagService: TagService

    override fun getAllByUser(userId: Long): List<BookVo> {
        val domainEntities = bookRepository.findByAuthorId(userId)
        return entitiesToViews(domainEntities)
    }

    override fun findById(id: Long): BookVo {
        val entity = bookRepository.findById(id).orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND) }
        return entitiesToViews(listOf(entity))[0]
    }

    override fun createBook(bookVo: BookVo) {
        val domainEntity = Book(
            null,
            bookVo.authorId,
            bookVo.name,
            LocalDateTime.now(),
            tagService.viewsToEntities(bookVo.tags ?: emptyList())
        )
        bookRepository.save(domainEntity)
    }

    override fun searchBooks(request: SearchRequest): List<BookVo> {
        val byTags: List<Book> = tagService.viewsToEntities(
            tagService.findByIds(request.tagIds ?: emptyList())
        ).map {
            bookRepository.findAllByTagsContains(it)
        }.flatten()
        val byNamePatterns = bookRepository.findByNameContaining(request.namePart ?: "")
        return entitiesToViews(byTags.union(byNamePatterns).toList())
    }

    override fun findRandomBooks(limit: Int): List<BookVo> {
        val entities = bookRepository.findRandom(limit)
        return entitiesToViews(entities)
    }

    private fun entitiesToViews(entities: List<Book>): List<BookVo> {
        return entities.map {
            val id = it.id!!
            val chapterCount = chapterService.countByBook(id)
            val likeCount = rateService.countLikesByBook(id)
            val dislikeCount = rateService.countDislikesByBook(id)
            BookVo(
                it.id,
                it.authorId,
                it.name,
                it.creationDate,
                chapterCount,
                likeCount,
                dislikeCount,
                tagService.entitiesToViews(it.tags ?: emptyList())
            )
        }
    }
}