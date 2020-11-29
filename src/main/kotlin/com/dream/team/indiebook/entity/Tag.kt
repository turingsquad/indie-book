package com.dream.team.indiebook.entity

import javax.persistence.*

/**
 * @author Alexander Kostyurenko
 */
@Entity
@Table(name = "tags")
class Tag(
    @get:Id
    @get:GeneratedValue(strategy = GenerationType.AUTO, generator = "tag_id_seq")
    @get:SequenceGenerator(name = "tag_id_seq", sequenceName = "tag_id_seq", allocationSize = 1)
    @get:Column(name = "id")
    var id: Long?,
    @get:Column(name = "tag_name")
    var tagName: String?
) {
    constructor() : this(null, null)
}