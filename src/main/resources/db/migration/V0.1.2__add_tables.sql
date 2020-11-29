CREATE TYPE rate_type as ENUM ('like', 'dislike');

CREATE TABLE users
(
    id                 bigint PRIMARY KEY,
    username           varchar(64) UNIQUE,
    encrypted_password varchar(64)
);

CREATE TABLE roles
(
    id   int PRIMARY KEY,
    name varchar(64)
);


CREATE TABLE user_roles
(
    id      BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users (id),
    role_id BIGINT REFERENCES roles (id)
);

CREATE TABLE rates
(
    id      bigint PRIMARY KEY,
    user_id bigint REFERENCES users (id),
    book_id bigint REFERENCES books (id),
    rate    rate_type
);

CREATE TABLE comments
(
    id         bigint PRIMARY KEY,
    chapter_id bigint REFERENCES chapters (id),
    user_id    bigint REFERENCES users (id),
    text       varchar(250)
);
