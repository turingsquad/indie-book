package com.dream.team.indiebook.controller;

import com.dream.team.indiebook.service.CommentService;
import com.dream.team.indiebook.service.RateService;
import com.dream.team.indiebook.service.UserService;
import com.dream.team.indiebook.vo.CommentVo;
import com.dream.team.indiebook.vo.DislikeVo;
import com.dream.team.indiebook.vo.LikeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class GradingApiController {

    private RateService rateService;

    private CommentService commentService;

    private UserService userService;

    @Autowired
    public void setRateService(final RateService rateService) {
        this.rateService = rateService;
    }

    @Autowired
    public void setCommentService(final CommentService commentService) {
        this.commentService = commentService;
    }

    @Autowired
    public void setUserService(final UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/api/v1/likes/{bookId}", produces = {"application/json"})
    public List<LikeVo> getLikes(@PathVariable final Long bookId) {
        return rateService.getAllLikesByBook(bookId);
    }

    @PutMapping(value = "/api/v1/like/{bookId}")
    public void createLike(@PathVariable final Long bookId, final Authentication auth) {
        final var principal = (UserDetails) auth.getPrincipal();
        final var username = principal.getUsername();
        final var user = userService.findUserByName(username);
        rateService.createLike(new LikeVo(null, user.getId(), bookId));
    }

    @GetMapping("/api/v1/dislikes/{bookId}")
    public List<DislikeVo> getDislikes(@PathVariable final Long bookId) {
        return rateService.getAllDislikesByBook(bookId);
    }

    @PutMapping("/api/v1/dislike/{bookId}")
    public void createDislike(@PathVariable final Long bookId, final Authentication auth) {
        final var principal = (UserDetails) auth.getPrincipal();
        final var username = principal.getUsername();
        final var user = userService.findUserByName(username);
        rateService.createDislike(new DislikeVo(null, user.getId(), bookId));
    }

    @GetMapping("/api/v1/comments/{chapterId}")
    public List<CommentVo> getComments(@PathVariable final Long chapterId) {
        return commentService.getAllByChapter(chapterId);
    }

    @PostMapping("/api/v1/comments/new")
    public void createComment(@RequestBody final CommentVo commentVo) {
        commentService.createComment(commentVo);
    }
}
