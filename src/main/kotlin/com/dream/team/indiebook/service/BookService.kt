package com.dream.team.indiebook.service

import com.dream.team.indiebook.vo.BookVo

/**
 * @author Alexander Kostyurenko
 */
interface BookService {
    fun getAllByUser(userId: Long): List<BookVo>
    fun createBook(bookVo: BookVo)
}