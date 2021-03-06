package com.dream.team.indiebook.controller

import com.dream.team.indiebook.request.SearchRequest
import com.dream.team.indiebook.service.BookService
import com.dream.team.indiebook.service.ChapterService
import com.dream.team.indiebook.service.TagService
import com.dream.team.indiebook.service.UserService
import com.dream.team.indiebook.vo.BookVo
import com.dream.team.indiebook.vo.ChapterVo
import com.dream.team.indiebook.vo.TagVo
import com.dream.team.indiebook.vo.UserVo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.Authentication
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.*

/**
 * @author Alexander Kostyurenko
 */
@CrossOrigin
@RestController
class BookApiController {
    @set:Autowired
    lateinit var bookService: BookService

    @set:Autowired
    lateinit var chapterService: ChapterService

    @set:Autowired
    lateinit var tagService: TagService

    @set:Autowired
    lateinit var userService: UserService

    @GetMapping("/api/v1/books/{userId}")
    fun getBooksByUser(@PathVariable userId: Long): List<BookVo> {
        return bookService.getAllByUser(userId)
    }

    @PostMapping(value = ["/api/v1/books/new"], consumes=["application/json"])
    fun createBook(@RequestBody bookVo: BookVo, auth: Authentication) : BookVo {
        val principal = auth.principal as UserDetails
        val username = principal.username
        val user = userService.findUserByName(username)
        val transformedVo = BookVo(
            null,
            user.id,
            bookVo.name,
            null,
            0,
            0,
            0,
            null,
            bookVo.description,
            bookVo.tagIds
        )
        return bookService.createBook(transformedVo)
    }

    @GetMapping("/api/v1/books/chapters/{bookId}")
    fun getChapterByBook(@PathVariable bookId: Long): List<ChapterVo> {
        return chapterService.findByBook(bookId)
    }

    @GetMapping("/api/v1/chapter/{chapterId}")
    fun getChapterById(@PathVariable chapterId: Long): ChapterVo {
        return chapterService.findById(chapterId)
    }

    @PostMapping("/api/v1/books/chapters/new")
    fun createChapter(@RequestBody chapterVo: ChapterVo) {
        chapterService.createChapter(chapterVo)
    }

    @GetMapping("/api/v1/book/{bookId}")
    fun findBookById(@PathVariable bookId: Long) : BookVo {
        return bookService.findById(bookId)
    }

    @GetMapping("/api/v1/tags")
    fun findAllTags(): List<TagVo> {
        return tagService.findAllTags()
    }

    @GetMapping("/api/v1/tags/{tagId}")
    fun findTagById(@PathVariable tagId: Long): TagVo {
        return tagService.findById(tagId)
    }

    @PostMapping("/api/v1/pages")
    fun pageCount(@RequestBody searchRequest: SearchRequest): Int {
        return bookService.pageCount(searchRequest)
    }

    @PostMapping("/api/v1/search")
    fun searchBooks(@RequestBody searchRequest: SearchRequest): List<BookVo> {
        return bookService.searchBooks(searchRequest)
    }

    @GetMapping("/api/v1/books/random/{limit}")
    fun findRandomBooks(@PathVariable limit: Int): List<BookVo> {
        return bookService.findRandomBooks(limit)
    }

    @GetMapping("/api/v1/users/{id}")
    fun findUser(@PathVariable id: Long): UserVo {
        return userService.findUserById(id)
    }

    @GetMapping("/api/v1/book/isAuthor/{userId}")
    fun isBookAuthor(auth: Authentication, @PathVariable userId: Long) : Boolean {
        val principal = auth.principal as UserDetails
        val username = principal.username
        val user = userService.findUserByName(username)
        return userId == user.id
    }
}