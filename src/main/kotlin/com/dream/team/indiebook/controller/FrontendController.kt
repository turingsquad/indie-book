package com.dream.team.indiebook.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 * @author Alexander Kostyurenko
 */
@Controller
class FrontendController {

    @RequestMapping("/f/*")
    fun frontendRedirect(): String {
        return "redirect:/"
    }
}