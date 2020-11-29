package com.dream.team.indiebook.vo

import com.fasterxml.jackson.annotation.JsonInclude

/**
 * @author Alexander Kostyurenko
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
data class UserVo(
    val id: Long?,
    val userName: String?
)
