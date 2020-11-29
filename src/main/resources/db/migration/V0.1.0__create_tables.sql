CREATE TABLE books
(
    id            bigint PRIMARY KEY,
    name          varchar(64),
    author_id     bigint,
    creation_date timestamp
);

CREATE TABLE chapters
(
    id            bigint PRIMARY KEY,
    name          varchar(64),
    book_id       bigint REFERENCES books (id),
    creation_date timestamp
)