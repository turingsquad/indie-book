package com.dream.team.indiebook.controller;

import com.dream.team.indiebook.service.CommentService;
import com.dream.team.indiebook.service.RateService;
import com.dream.team.indiebook.vo.CommentVo;
import com.dream.team.indiebook.vo.DislikeVo;
import com.dream.team.indiebook.vo.LikeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GradingApiController {

    private RateService rateService;

    private CommentService commentService;

    @Autowired
    public void setRateService(RateService rateService) {
        this.rateService = rateService;
    }

    @Autowired
    public void setCommentService(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/api/v1/likes/{bookId}")
    public List<LikeVo> getLikes(@PathVariable Long bookId) {
        return rateService.getAllLikesByBook(bookId);
    }

    @PostMapping("/api/v1/likes/new")
    public void createLike(@RequestBody LikeVo likeVo) {
        rateService.createLike(likeVo);
    }

    @GetMapping("/api/v1/dislikes/{bookId}")
    public List<DislikeVo> getDislikes(@PathVariable Long bookId) {
        return rateService.getAllDislikesByBook(bookId);
    }

    @PostMapping("/api/v1/dislikes/new")
    public void createDislike(@RequestBody DislikeVo dislikeVo) {
        rateService.createDislike(dislikeVo);
    }

    @GetMapping("/api/v1/comments/{chapterId}")
    public List<CommentVo> getComments(@PathVariable Long chapterId) {
        return commentService.getAllByChapter(chapterId);
    }

    @PostMapping("/api/v1/comments/new")
    public void createComment(@RequestBody CommentVo commentVo) {
        commentService.createComment(commentVo);
    }
}
