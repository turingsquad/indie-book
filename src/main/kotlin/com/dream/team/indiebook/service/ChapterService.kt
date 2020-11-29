package com.dream.team.indiebook.service

import com.dream.team.indiebook.vo.ChapterVo

/**
 * @author Alexander Kostyurenko
 */
interface ChapterService {
    fun findByBook(bookId: Long): List<ChapterVo>
    fun findById(id: Long): ChapterVo
    fun countByBook(bookId: Long): Int
    fun createChapter(chapterVo: ChapterVo)
}