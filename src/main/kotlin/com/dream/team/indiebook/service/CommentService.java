package com.dream.team.indiebook.service;

import com.dream.team.indiebook.vo.CommentVo;

import java.util.List;

public interface CommentService {
    List<CommentVo> getAllByChapter(Long chapterId);
    void createComment(CommentVo commentVo);
    Integer countCommentsByChapter(Long chapterId);
}
