package com.dream.team.indiebook.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DislikeVo {
    private final Long id;

    private final Long userId;

    private final Long bookId;

    public DislikeVo(final Long id, final Long userId, final Long bookId) {
        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
    }

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public Long getBookId() {
        return bookId;
    }
}
