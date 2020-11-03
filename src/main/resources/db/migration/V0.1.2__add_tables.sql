CREATE TYPE rate_type as ENUM('like', 'dislike');

CREATE TABLE rates (
id bigint PRIMARY KEY,
user_id REFERENCES users (id),
book_id bigint REFERENCES books (id),
rate rate_type
);

CREATE TABLE comments(
id bigint PRIMARY KEY,
bookID bigint REFERENCES books (id),
userID bigint REFERENCES users (id),
text varchar(250)
);