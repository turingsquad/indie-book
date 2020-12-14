package com.dream.team.indiebook.service.impl

import com.dream.team.indiebook.entity.UserBookLog
import com.dream.team.indiebook.repository.UserBookLogRepository
import com.dream.team.indiebook.service.BookService
import com.dream.team.indiebook.service.UserBookLogService
import com.dream.team.indiebook.vo.BookVo
import com.dream.team.indiebook.vo.UserBookLogVo
import org.springframework.stereotype.Service
import java.time.LocalDateTime

/**
 * @author Alexander Kostyurenko
 */
@Service
class UserBookLogServiceImpl(
    val bookService: BookService,
    val userBookLogRepository: UserBookLogRepository
) : UserBookLogService {
    override fun findLastByUserId(userId: Long): BookVo {
        val userBookLog = userBookLogRepository.findLast(userId)
        return bookService.findById(userBookLog?.bookId ?: 1)
    }

    override fun registerBookLogEvent(userBookLogVo: UserBookLogVo) {
        val log = UserBookLog(null, userBookLogVo.userId, userBookLogVo.bookId, LocalDateTime.now())
        userBookLogRepository.save(log)
    }
}