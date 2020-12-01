package com.dream.team.indiebook.service.impl

import com.dream.team.indiebook.entity.Tag
import com.dream.team.indiebook.repository.TagRepository
import com.dream.team.indiebook.service.TagService
import com.dream.team.indiebook.vo.TagVo
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException

/**
 * @author Alexander Kostyurenko
 */
@Service
class TagServiceImpl(
    val tagRepository: TagRepository
) : TagService {
    override fun findAllTags(): List<TagVo> {
        val entities = tagRepository.findAll()
        return entitiesToViews(entities.filterNotNull())
    }

    override fun findById(id: Long): TagVo {
        val entity = tagRepository.findById(id).orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND) }
        return entitiesToViews(listOf(entity))[0]
    }

    override fun entitiesToViews(entities: List<Tag>): List<TagVo> {
        return entities.map {
            TagVo(it.id, it.tagName)
        }
    }

    override fun findByIds(ids: List<Long>): List<TagVo> {
        val entities = tagRepository.findByIdIn(ids)
        return entitiesToViews(entities)
    }

    override fun viewsToEntities(views: List<TagVo>): List<Tag> {
        return views.map {
            Tag(it.id, it.name)
        }
    }
}