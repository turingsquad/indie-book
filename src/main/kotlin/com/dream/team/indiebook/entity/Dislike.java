package com.dream.team.indiebook.entity;

import javax.persistence.*;

@Entity
@Table(name = "dislike")
public class Dislike {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "dislike_id_seq")
    @SequenceGenerator(name = "dislike_id_seq", sequenceName = "dislike_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Long id;
    @Column(name = "userID")
    private Long userID;
    @Column(name = "bookID")
    private Long bookID;

    public Dislike(Long userID, Long bookID) {
        this.userID = userID;
        this.bookID = bookID;
    }

    public Dislike() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Long getBookID() {
        return bookID;
    }

    public void setBookID(Long bookID) {
        this.bookID = bookID;
    }
}
