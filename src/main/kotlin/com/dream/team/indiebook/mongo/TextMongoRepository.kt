package com.dream.team.indiebook.mongo

import com.dream.team.indiebook.entity.Text
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface TextMongoRepository : MongoRepository<Text, Long?> {
    fun findByChapterId(chapterId: Long): Optional<Text>
}