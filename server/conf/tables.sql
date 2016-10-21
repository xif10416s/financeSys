CREATE TABLE `persistent_logins` (
  `username` varchar(64) NOT NULL,
  `series` varchar(64) NOT NULL,
  `token` varchar(64) NOT NULL,
  `last_used` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`series`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user_authorities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authority` varchar(50) NOT NULL,
  `userId` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_uniq_user_auth` (`userId`,`authority`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

CREATE TABLE `users` (
  `userId` varchar(32) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  `regist_time` timestamp default current_timestamp,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`) USING BTREE,
  UNIQUE KEY `phone` (`phone`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#----------
INSERT INTO `users` (`userId`, `password`, `email`, `name`, `enabled`) VALUES ('2', '96e79218965eb72c92a549dd5a330112', 'test@163.com', 'sky', '1');

INSERT INTO `user_authorities` (`authority`, `userId`) VALUES ('ROLE_USER', '1');
INSERT INTO `user_authorities` (`authority`, `userId`) VALUES ('ROLE_ADMIN', '1');
#--------

#---enterprise---


CREATE TABLE `enterprise_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(32) NOT NULL,
  `tax_nature` tinyint(4) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `admin_name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId` (`userId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `enterprise_order_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `enterprise_id` varchar(32) NOT NULL,
  `state` tinyint(4) NOT NULL,
  `create_time` timestamp default current_timestamp,
  `start_time` timestamp NOT NULL ,
  `period_time` tinyint(4) NOT NULL,
  `update_time` timestamp  NULL ,
  `count` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `enterprise_id` (`enterprise_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `product_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp default current_timestamp,
  `description` varchar(32) NOT NULL,
  `period_time` tinyint(4) NOT NULL,
  `cost` int(11) DEFAULT 0,
  `discount_cost` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `accountant_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(32) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `id_card` varchar(40) DEFAULT NULL,
  `degree` varchar(40) DEFAULT NULL,
  `school` varchar(40) DEFAULT NULL,
  `major` varchar(40) DEFAULT NULL,
  `teacher_id` int(11) NOT NULL,
  `identity` tinyint(4) NOT NULL,
  `invite_code` int(11)  NULL,
  `ali_pay_id` varchar(40)  NULL,
  `ali_pay_name` varchar(40)  NULL,
  `remaining` int(11) DEFAULT 0,
  `expendure` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId` (`userId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `accountant_balance_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountant_id` varchar(32) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type` tinyint(4) NOT NULL,
  `content` varchar(200)  NULL,
  `count` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accountant_id` (`accountant_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `accountant_withdraw_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountant_id` varchar(32) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp  NULL ,
  `state` tinyint(4) NOT NULL,
  `comment` varchar(200)  NULL,
  `ali_pay_id` varchar(40)  NULL,
  `ali_pay_name` varchar(40)  NULL,
  `count` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accountant_id` (`accountant_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `accountant_task_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp  NULL ,
  `state` tinyint(4) NOT NULL,
  `type` tinyint(4) NOT NULL,
  `responsible_accountant_id` varchar(32)  NULL,
  `report_accountant_id` varchar(32)  NULL,
  `reward` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `responsible_accountant_id` (`responsible_accountant_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
