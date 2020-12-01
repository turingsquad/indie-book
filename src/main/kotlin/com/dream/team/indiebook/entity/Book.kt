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
        @get:Column(name = "name")
        var name: String?,
        @get:Column(name = "creation_date")
        var creationDate: LocalDateTime?,
        @get:ManyToMany
        @get:JoinTable(
                name = "books_tags",
                joinColumns = [JoinColumn(name = "book_id")],
                inverseJoinColumns = [JoinColumn(name = "tag_id")]
        )
        var tags: List<Tag>?
) {
        constructor() : this(null, null, null, LocalDateTime.now(), emptyList<Tag>())
}