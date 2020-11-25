package com.dream.team.indiebook.entity;

import javax.persistence.*;

@Entity
@Table(name = "rates")
public class Rate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "rate_id_seq")
    @SequenceGenerator(name = "rate_id_seq", sequenceName = "rate_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Long id;
    @Column(name = "user_id")
    private Long userId;
    @Column(name = "book_id")
    private Long bookId;
    @Enumerated(EnumType.STRING)
    @Column(name = "rate_type")
    private RateType rateType;

    public Rate() {
    }

    public Rate(Long userId, Long bookId, RateType rateType) {
        this.userId = userId;
        this.bookId = bookId;
        this.rateType = rateType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public RateType getRateType() {
        return rateType;
    }

    public void setRateType(RateType rateType) {
        this.rateType = rateType;
    }
}
