USE chat;

-- messages
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`
(
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR (24) NOT NULL,
  `message` VARCHAR(255) NOT NULL,
  `created` TIMESTAMP NOT NULL,
  PRIMARY KEY(`id`)
);

-- users
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`
(
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(24) UNIQUE NOT NULL,
  `password` VARCHAR(24) NOT NULL,
  PRIMARY KEY(`id`)
);