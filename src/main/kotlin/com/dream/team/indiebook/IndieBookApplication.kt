package com.dream.team.indiebook

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableJpaRepositories(basePackages = ["com.dream.team.indiebook.repository"])
@EnableMongoRepositories(basePackages = ["com.dream.team.indiebook.mongo"])
class IndieBookApplication

fun main(args: Array<String>) {
    runApplication<IndieBookApplication>(*args)
}