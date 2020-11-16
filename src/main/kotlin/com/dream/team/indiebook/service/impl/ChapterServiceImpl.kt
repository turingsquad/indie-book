package com.dream.team.indiebook.service.impl

import com.dream.team.indiebook.entity.Chapter
import com.dream.team.indiebook.entity.Text
import com.dream.team.indiebook.mongo.TextMongoRepository
import com.dream.team.indiebook.repository.ChapterRepository
import com.dream.team.indiebook.service.ChapterService
import com.dream.team.indiebook.service.CommentService
import com.dream.team.indiebook.vo.ChapterVo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDateTime

/**
 * @author Alexander Kostyurenko
 */
@Service
class ChapterServiceImpl : ChapterService {

    @set:Autowired
    lateinit var chapterRepository: ChapterRepository

    @set:Autowired
    lateinit var textMongoRepository: TextMongoRepository

    @set:Autowired
    lateinit var commentService: CommentService

    override fun findByBook(bookId: Long): List<ChapterVo> {
        val result = mutableListOf<ChapterVo>()
        val domainEntities = chapterRepository.findByBookId(bookId)
        domainEntities.forEach {
            val text = textMongoRepository.findByChapterId(it.id ?: error("Chapter ID cannot be null")).orElse(null)
            val commentCount = commentService.countCommentsByChapter(it.id)
            result.add(ChapterVo(
                    it.id,
                    it.bookId,
                    it.creationDate,
                    text?.text,
                    commentCount

            ))
        }
        return result
    }

    override fun countByBook(bookId: Long): Int {
        return chapterRepository.countByBookId(bookId)
    }

    override fun createChapter(chapterVo: ChapterVo) {
        val domainEntity = Chapter(null, chapterVo.bookId, LocalDateTime.now())
        val saved = chapterRepository.save(domainEntity)
        textMongoRepository.save(Text(saved.id, chapterVo.text ?: ""))
    }
}