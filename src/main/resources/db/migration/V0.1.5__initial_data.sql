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

VALUES (1, 'Приключения Сэма Леттера', 1, current_timestamp, 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения...');
INSERT INTO books
VALUES (2, 'Программисты и дедлайны', 1, current_timestamp, 'Каждый программист делает оценку отчасти правильной, но практически всегда забывает о накладных расходах (отладка, тесты т.п.). Превышение сроков означает то, что задача слишком велика и её нужно было разбивать на подзадачи.');
INSERT INTO books
VALUES (3, 'Скрипты и жабы', 1, current_timestamp, 'JavaScript-разработчики часто жалуются на то, что их язык программирования несправедливо ругают за то, что он имеет слишком много чрезмерно усложнённых, запутанных возможностей. Многие борются с таким отношением к JS, рассказывая о том, почему критиковать этот язык за то, чем он является, неправильно.');

INSERT INTO chapters
VALUES (1, 'Сэм', 1, current_timestamp, 'Просто Сэм');
INSERT INTO chapters
VALUES (2, 'Пещеры', 1, current_timestamp, 'А еще и пещеры');
INSERT INTO chapters
VALUES (3, 'Мертвая линия', 2, current_timestamp, 'Для джуниоров «правильная часть» оценки может просто не существовать. Они будут давать оценку практически наугад, потому что очень многие вещи, в свете отсутствия опыта, кажутся нетривиальными. Опытные разработчики должны давать точные оценки в диапазоне от 0.5 до 24 часов. То, что не укладывается в 24 часа следует разбивать на части. Это должно происходить в голове разработчика, а потом эти части должны складываться.');
INSERT INTO chapters
VALUES (4, 'Жаба', 3, current_timestamp, 'Скрипт');

INSERT INTO tags
VALUES (1, 'Фантастика');
INSERT INTO tags
VALUES (2, 'Ужасы');
INSERT INTO tags
VALUES (3, 'Фентези');

INSERT INTO books_tags
VALUES (1, 1);
INSERT INTO books_tags
VALUES (2, 2);
INSERT INTO books_tags
VALUES (3, 3);

