package com.dream.team.indiebook.entity;

import javax.persistence.*;

@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "comment_id_seq")
    @SequenceGenerator(name = "comment_id_seq", sequenceName = "comment_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Long id;
    @Column(name = "chapter_id")
    private Long chapterId;
    @Column(name = "user_id")
    private Long userID;
    @Column(name = "text")
    private String text;

    public Comment() {
    }

    public Comment(Long chapterId, Long userID, String text) {
        this.chapterId = chapterId;
        this.userID = userID;
        this.text = text;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getChapterId() {
        return chapterId;
    }

    public void setChapterId(Long chapterId) {
        this.chapterId = chapterId;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
