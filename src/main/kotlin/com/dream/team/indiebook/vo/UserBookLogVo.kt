package com.dream.team.indiebook.vo

import com.fasterxml.jackson.annotation.JsonInclude
import java.time.LocalDateTime

/**
 * @author Alexander Kostyurenko
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
class UserBookLogVo(
    val userId: Long?,
    val bookId: Long?,
    val logDate: LocalDateTime?
)