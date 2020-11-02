package com.dream.team.indiebook

import com.dream.team.indiebook.mongo.TextMongoRepository
import com.dream.team.indiebook.repository.BookRepository
import com.dream.team.indiebook.repository.ChapterRepository
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = [BookRepository::class, ChapterRepository::class])
@EnableMongoRepositories(basePackageClasses = [TextMongoRepository::class])
class IndieBookApplication

fun main(args: Array<String>) {
    runApplication<IndieBookApplication>(*args)
}
