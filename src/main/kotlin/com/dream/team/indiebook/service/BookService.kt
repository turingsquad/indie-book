package com.dream.team.indiebook.service

import com.dream.team.indiebook.request.SearchRequest
import com.dream.team.indiebook.vo.BookVo

/**
 * @author Alexander Kostyurenko
 */
interface BookService {
    fun getAllByUser(userId: Long): List<BookVo>
    fun findById(id: Long): BookVo
    fun createBook(bookVo: BookVo)
    fun searchBooks(request: SearchRequest): List<BookVo>
    fun findRandomBooks(limit: Int): List<BookVo>
}