package com.dream.team.indiebook.vo

import com.fasterxml.jackson.annotation.JsonInclude
import java.time.LocalDateTime

/**
 * @author Alexander Kostyurenko
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
data class BookVo(
    val id: Long?,
    val authorId: Long?,
    val name: String?,
    val creationDate: LocalDateTime?,
    val chapterCount: Int?,
    val likeCount: Int?,
    val dislikeCount: Int?,
    val tags: List<TagVo>?
)