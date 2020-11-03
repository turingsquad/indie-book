package com.dream.team.indiebook.controller;

import com.dream.team.indiebook.service.DislikeService;
import com.dream.team.indiebook.service.LikeService;
import com.dream.team.indiebook.vo.DislikeVo;
import com.dream.team.indiebook.vo.LikeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GradingApiController {
    private LikeService likeService;

    private DislikeService dislikeService;

    @Autowired
    public void setLikeService(LikeService likeService) {
        this.likeService = likeService;
    }

    @Autowired
    public void setDislikeService(DislikeService dislikeService) {
        this.dislikeService = dislikeService;
    }

    @GetMapping("/api/v1/likes/{bookID}")
    public List<LikeVo> getLikes(@PathVariable Long bookID) {
        return likeService.getAllByBook(bookID);
    }

    @PostMapping("/api/v1/likes/new")
    public void createLike(@RequestBody LikeVo likeVo) {
        likeService.createLike(likeVo);
    }

    @GetMapping("/api/v1/dislikes/{bookID}")
    public List<DislikeVo> getDislikes(@PathVariable Long bookID) {
        return dislikeService.getAllByBook(bookID);
    }

    @PostMapping("/api/v1/dislikes/new")
    public void createDislike(@RequestBody DislikeVo dislikeVo) {
        dislikeService.createDislike(dislikeVo);
    }
}
