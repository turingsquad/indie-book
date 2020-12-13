package com.dream.team.indiebook.entity

import java.time.LocalDateTime
import javax.persistence.*

/**
 * @author Alexander Kostyurenko
 */
@Entity
@Table(name = "user_book_log")
class UserBookLog(
    @get:Id
    @get:GeneratedValue(strategy = GenerationType.AUTO, generator = "book_id_seq")
    @get:SequenceGenerator(name = "book_id_seq", sequenceName = "book_id_seq", allocationSize = 1)
    @get:Column(name = "log_id")
    var logId: Long? = null,
    @get:Column(name = "user_id")
    var userId: Long?,
    @get:Column(name = "book_id")
    var bookId: Long?,
    @get:Column(name = "log_date")
    var logDate: LocalDateTime?
)