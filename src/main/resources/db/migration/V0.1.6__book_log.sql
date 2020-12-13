CREATE TABLE user_book_log
(
    log_id   BIGINT PRIMARY KEY,
    user_id  BIGINT,
    book_id  BIGINT,
    log_date timestamp
);

CREATE SEQUENCE user_book_log_id_seq START 101;