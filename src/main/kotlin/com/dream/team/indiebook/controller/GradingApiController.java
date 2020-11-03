package com.dream.team.indiebook.controller;

import com.dream.team.indiebook.service.RateService;
import com.dream.team.indiebook.vo.DislikeVo;
import com.dream.team.indiebook.vo.LikeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GradingApiController {

    private RateService rateService;

    @Autowired
    public void setRateService(RateService rateService) {
        this.rateService = rateService;
    }

    @GetMapping("/api/v1/likes/{bookID}")
    public List<LikeVo> getLikes(@PathVariable Long bookID) {
        return rateService.getAllLikesByBook(bookID);
    }

    @PostMapping("/api/v1/likes/new")
    public void createLike(@RequestBody LikeVo likeVo) {
        rateService.createLike(likeVo);
    }

    @GetMapping("/api/v1/dislikes/{bookID}")
    public List<DislikeVo> getDislikes(@PathVariable Long bookID) {
        return rateService.getAllDislikesByBook(bookID);
    }

    @PostMapping("/api/v1/dislikes/new")
    public void createDislike(@RequestBody DislikeVo dislikeVo) {
        rateService.createDislike(dislikeVo);
    }
}
