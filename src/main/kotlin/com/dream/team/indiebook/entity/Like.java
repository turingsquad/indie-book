package com.dream.team.indiebook.entity;

import javax.persistence.*;

@Entity
@Table(name = "likes")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "like_id_seq")
    @SequenceGenerator(name = "like_id_seq", sequenceName = "like_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Long id;
    @Column(name = "userID")
    private Long userID;
    @Column(name = "bookID")
    private Long bookID;

    public Long getId() {
        return id;
    }

    public Long getUserID() {
        return userID;
    }

    public Long getBookID() {
        return bookID;
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

    public Like(Long userID, Long bookID) {
        this.userID = userID;
        this.bookID = bookID;
    }

    public Like() {
    }
}
