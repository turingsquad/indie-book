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
    @Column(name = "bookID")
    private Long bookID;
    @Column(name = "userID")
    private Long userID;
    @Column(name = "text")
    private String text;
}
