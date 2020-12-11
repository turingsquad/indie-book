package com.dream.team.indiebook.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 * @author Alexander Kostyurenko
 */
@Controller
class IndexController {

    @RequestMapping(path = ["/f/*"])
    fun frontendRedirect(): String {
        return "forward:/"
    }
}