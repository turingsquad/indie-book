INSERT INTO roles
VALUES (1, 'ROLE_ADMIN');
INSERT INTO roles
VALUES (2, 'ROLE_USER');

INSERT INTO users
VALUES (1, 'Admin', '$2a$10$sBeml2EcsBpYealEvSEz8OEU5swxPBzN9TiM5eSNBskJYCkWeDp/W'); -- Password is 'password'

INSERT INTO user_roles
VALUES (1, 1, 1);
INSERT INTO user_roles
VALUES (2, 1, 2);

INSERT INTO books
VALUES (1, 'Приключения Сэма Леттера', 1, current_timestamp);
INSERT INTO books
VALUES (2, 'Программисты и дедлайны', 1, current_timestamp);
INSERT INTO books
VALUES (3, 'Скрипты и жабы', 1, current_timestamp);

INSERT INTO chapters
VALUES (1, 'Сэм', 1, current_timestamp);
INSERT INTO chapters
VALUES (2, 'Пещеры', 1, current_timestamp);
INSERT INTO chapters
VALUES (3, 'Мертвая линия', 2, current_timestamp);
INSERT INTO chapters
VALUES (4, 'Жаба', 3, current_timestamp);

INSERT INTO tags
VALUES (1, 'Фантастика');
INSERT INTO tags
VALUES (2, 'Ужасы');
INSERT INTO tags
VALUES (3, 'Фентези');

INSERT INTO books_tags
VALUES (1, 1, 1);
INSERT INTO books_tags
VALUES (2, 2, 2);
INSERT INTO books_tags
VALUES (3, 3, 3);

