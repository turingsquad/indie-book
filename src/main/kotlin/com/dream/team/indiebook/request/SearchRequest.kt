package com.dream.team.indiebook.request

import com.fasterxml.jackson.annotation.JsonInclude

/**
 * @author Alexander Kostyurenko
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
data class SearchRequest(
    val tagIds: List<Long>?,
    val namePart: String?
)
