package com.dream.team.indiebook.entity

import java.time.LocalDateTime
import javax.persistence.*

/**
 * @author Alexander Kostyurenko
 */
@Entity
@Table(name = "chapters")
class Chapter(
    @get:Id
    @get:GeneratedValue(strategy = GenerationType.AUTO, generator = "chapter_id_seq")
    @get:SequenceGenerator(name = "chapter_id_seq", sequenceName = "chapter_id_seq", allocationSize = 1)
    @get:Column(name = "id")
    var id: Long?,
    @get:Column(name = "book_id")
    var bookId: Long?,
    @get:Column(name = "name")
    var name: String?,
    @get:Column(name = "creation_date")
    var creationDate: LocalDateTime?
) {
    constructor() : this(null, null, null, null)
}