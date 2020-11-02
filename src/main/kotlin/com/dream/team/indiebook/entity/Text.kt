package com.dream.team.indiebook.entity

import javax.persistence.Entity
import javax.persistence.Id

@Entity
class Text(
        @get:Id
        var chapterId: Long?,
        var text: String
) {
    constructor() : this(null, "")
}