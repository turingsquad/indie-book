package com.dream.team.indiebook.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@Controller
class IndexController {

    @RequestMapping("/", method = [RequestMethod.GET])
    fun indexPage(): String {
        return "index"
    }
}