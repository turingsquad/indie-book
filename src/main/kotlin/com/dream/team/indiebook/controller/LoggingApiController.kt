package com.dream.team.indiebook.controller

import com.dream.team.indiebook.service.UserBookLogService
import com.dream.team.indiebook.service.UserService
import com.dream.team.indiebook.vo.BookVo
import com.dream.team.indiebook.vo.UserBookLogVo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.Authentication
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime

/**
 * @author Alexander Kostyurenko
 */
@RestController
class LoggingApiController {

    @set:Autowired
    lateinit var userBookLogService: UserBookLogService

    @set:Autowired
    lateinit var userService: UserService

    @GetMapping("/api/v1/book/log/latest")
    fun findLastBookByUser(auth: Authentication): BookVo {
        val principal = auth.principal as UserDetails
        val username = principal.username
        val user = userService.findUserByName(username)
        return userBookLogService.findLastByUserId(user.id)
    }

    @PostMapping("/api/v1/book/log/register")
    fun registerLogEvent(@RequestBody logVo: UserBookLogVo, auth: Authentication) {
        val principal = auth.principal as UserDetails
        val username = principal.username
        val user = userService.findUserByName(username)
        userBookLogService.registerBookLogEvent(UserBookLogVo(user.id, logVo.bookId, LocalDateTime.now()))
    }
}