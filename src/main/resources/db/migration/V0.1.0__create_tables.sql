CREATE TABLE users
(
    id                 bigint PRIMARY KEY,
    username           varchar(128) UNIQUE,
    encrypted_password varchar(128)
);

CREATE TABLE roles
(
    id   int PRIMARY KEY,
    name varchar(128)
);


CREATE TABLE user_roles
(
    id      BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users (id),
    role_id BIGINT REFERENCES roles (id)
);

CREATE TABLE books
(
    id            bigint PRIMARY KEY,
    name          varchar(128),
    author_id     bigint REFERENCES users (id),
    creation_date timestamp
);

CREATE TABLE chapters
(
    id            bigint PRIMARY KEY,
    name          varchar(128),
    book_id       bigint REFERENCES books (id),
    creation_date timestamp
)