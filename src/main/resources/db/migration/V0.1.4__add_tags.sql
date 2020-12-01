CREATE TABLE tags
(
    id       bigint PRIMARY KEY,
    tag_name varchar(128)
);

CREATE TABLE books_tags
(
    id      BIGSERIAL PRIMARY KEY,
    book_id bigint REFERENCES books (id),
    tag_id  bigint REFERENCES tags (id)
);

CREATE SEQUENCE tag_id_seq START 101;