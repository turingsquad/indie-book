package com.dream.team.indiebook.service

import com.dream.team.indiebook.entity.Tag
import com.dream.team.indiebook.vo.TagVo

/**
 * @author Alexander Kostyurenko
 */
interface TagService {
    fun findAllTags(): List<TagVo>
    fun findById(id: Long): TagVo
    fun entitiesToViews(entities: List<Tag>): List<TagVo>
    fun findByIds(ids: List<Long>): List<TagVo>
    fun viewsToEntities(views: List<TagVo>): List<Tag>
}