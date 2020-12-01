CREATE TABLE rates
(
    id      bigint PRIMARY KEY,
    user_id bigint REFERENCES users (id),
    book_id bigint REFERENCES books (id),
    rate varchar(64)
);

CREATE TABLE comments
(
    id         bigint PRIMARY KEY,
    chapter_id bigint REFERENCES chapters (id),
    user_id    bigint REFERENCES users (id),
    text       varchar(250)
);
