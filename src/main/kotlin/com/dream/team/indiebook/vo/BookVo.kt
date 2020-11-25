package com.dream.team.indiebook.vo

import com.fasterxml.jackson.annotation.JsonInclude
import java.time.LocalDateTime

/**
 * @author Alexander Kostyurenko
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
data class BookVo(
        val id: Long?,
        val userId: Long?,
        val creationDate: LocalDateTime?,
        val chapterCount: Int?,
        val likeCount: Int?,
        val dislikeCount: Int?
)