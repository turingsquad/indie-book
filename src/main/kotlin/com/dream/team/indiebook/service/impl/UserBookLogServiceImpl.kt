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
    override fun findLastByUserId(userId: Long?): BookVo {
        if (userId == null) {
            return DEFAULT_ANSWER
        }
        val userBookLog = userBookLogRepository.findTop1ByUserId(userId)
        return if (userBookLog != null) {
            bookService.findById(userBookLog.bookId!!)
        } else {
            DEFAULT_ANSWER
        }
    }

    override fun registerBookLogEvent(userBookLogVo: UserBookLogVo) {
        val log = UserBookLog(null, userBookLogVo.userId, userBookLogVo.bookId, LocalDateTime.now())
        userBookLogRepository.save(log)
    }

    companion object {
        val DEFAULT_ANSWER = BookVo(
            null,
            1,
            "Здесь будет рекомендация для вас",
            LocalDateTime.now(),
            0,
            42,
            0,
            emptyList(),
            "Описание"
        )
    }
}