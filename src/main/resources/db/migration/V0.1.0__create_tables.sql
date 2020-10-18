CREATE TABLE books(
id bigint PRIMARY KEY,
author_id bigint,
creation_date timestamp
);

CREATE TABLE chapters(
id bigint PRIMARY KEY,
book_id bigint REFERENCES books (id),
creation_date timestamp
)