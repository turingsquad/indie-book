package com.dream.team.indiebook.vo

import com.fasterxml.jackson.annotation.JsonInclude
import java.time.LocalDateTime

/**
 * @author Alexander Kostyurenko
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
data class ChapterVo(
    val id: Long?,
    val bookId: Long?,
    val name: String?,
    val creationDate: LocalDateTime?,
    val text: String?,
    val commentCount: Int
)