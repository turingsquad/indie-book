package com.dream.team.indiebook.service.impl

import com.dream.team.indiebook.entity.Book
import com.dream.team.indiebook.repository.BookRepository
import com.dream.team.indiebook.service.BookService
import com.dream.team.indiebook.service.ChapterService
import com.dream.team.indiebook.service.DislikeService
import com.dream.team.indiebook.service.LikeService
import com.dream.team.indiebook.vo.BookVo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDateTime

/**
 * @author Alexander Kostyurenko
 */
@Service
class BookServiceImpl : BookService {
    @set:Autowired
    lateinit var bookRepository: BookRepository

    @set:Autowired
    lateinit var likeService : LikeService

    @set:Autowired
    lateinit var dislikeService: DislikeService

    @set:Autowired
    lateinit var chapterService: ChapterService

    override fun getAllByUser(userId: Long): List<BookVo> {
        val result = mutableListOf<BookVo>()
        val domainEntities = bookRepository.findByAuthorId(userId)
        domainEntities.forEach {
            val chapterCount = chapterService.countByBook(userId)
            val likeCount = likeService.countByBook(it.id)
            val dislikeCount = dislikeService.countByBook(it.id)
            result.add(BookVo(
                    it.id,
                    it.authorId,
                    it.creationDate,
                    chapterCount,
                    likeCount,
                    dislikeCount
            ))
        }
        return result
    }

    override fun createBook(bookVo: BookVo) {
        val domainEntity = Book(null, bookVo.userId, LocalDateTime.now())
        bookRepository.save(domainEntity)
    }
}