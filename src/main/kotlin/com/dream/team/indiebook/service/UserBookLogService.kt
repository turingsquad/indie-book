package com.dream.team.indiebook.service

import com.dream.team.indiebook.vo.BookVo
import com.dream.team.indiebook.vo.UserBookLogVo

/**
 * @author Alexander Kostyurenko
 */
interface UserBookLogService {
    fun findLastByUserId(userId: Long?): BookVo
    fun registerBookLogEvent(userBookLogVo: UserBookLogVo)
}