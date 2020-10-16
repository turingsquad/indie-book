package com.dream.team.indiebook.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.view.JstlView

import org.springframework.web.servlet.view.UrlBasedViewResolver
import org.springframework.web.servlet.view.tiles3.TilesView


@Configuration
@EnableWebMvc
class WebConfig {

    @Bean
    fun resolver(): UrlBasedViewResolver? {
        val resolver = UrlBasedViewResolver()
        resolver.setPrefix("/static/")
        resolver.setSuffix(".html")
        resolver.setViewClass(TilesView::class.java)
        return resolver
    }
}