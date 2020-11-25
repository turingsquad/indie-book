package com.dream.team.indiebook.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class CommentVo {
    private Long id;
    private Long userId;
    private Long chapterId;
    private String text;

    public CommentVo(Long id, Long userId, String text) {
        this.id = id;
        this.userId = userId;
        this.text = text;
    }

    public CommentVo(Long id, Long userId, Long chapterId) {
        this.id = id;
        this.userId = userId;
        this.chapterId = chapterId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getChapterId() {
        return chapterId;
    }

    public void setChapterId(Long chapterId) {
        this.chapterId = chapterId;
    }
}
