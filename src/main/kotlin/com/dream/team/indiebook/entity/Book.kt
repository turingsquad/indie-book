package com.dream.team.indiebook.entity

import java.time.LocalDateTime
import javax.persistence.*

/**
 * @author Alexander Kostyurenko
 */
@Entity
@Table(name = "books")
class Book(
        @get:Id
        @get:GeneratedValue(strategy = GenerationType.AUTO, generator = "book_id_seq")
        @get:SequenceGenerator(name = "book_id_seq", sequenceName = "book_id_seq", allocationSize = 1)
        @get:Column(name = "id")
        var id: Long?,
        @get:Column(name = "author_id")
        var authorId: Long?,
        @get:Column(name = "creation_date")
        var creationDate: LocalDateTime?
) {
    constructor() : this(null, null, null)
}