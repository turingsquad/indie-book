CREATE TABLE users(
id bigint PRIMARY KEY,
username varchar(50),
password varchar(50)
);

CREATE TABLE roles(
id bigint PRIMARY KEY,
roleName varchar(20)
);

CREATE TABLE roles_users(
id bigint PRIMARY KEY,
roleID bigint REFERENCES roles (id),
userID bigint REFERENCES users (id)
);

CREATE TABLE likes(
id bigint PRIMARY KEY,
bookID bigint REFERENCES books (id),
userID bigint REFERENCES users (id)
);

CREATE TABLE dislike(
id bigint PRIMARY KEY,
bookID bigint REFERENCES books (id),
userID bigint REFERENCES users (id)
);

CREATE TABLE comments(
id bigint PRIMARY KEY,
bookID bigint REFERENCES books (id),
userID bigint REFERENCES users (id),
text varchar(250)
);