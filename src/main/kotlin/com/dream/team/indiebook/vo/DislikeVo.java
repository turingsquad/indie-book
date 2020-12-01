package com.dream.team.indiebook.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DislikeVo {
    private Long id;
    private Long userID;
    private Long bookID;

    public DislikeVo(Long id, Long userID) {
        this.id = id;
        this.userID = userID;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public void setBookID(Long bookID) {
        this.bookID = bookID;
    }

    public Long getId() {
        return id;
    }

    public Long getUserID() {
        return userID;
    }

    public Long getBookID() {
        return bookID;
    }
}
