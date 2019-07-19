-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- 主机: localhost
-- 生成日期: 2013 年 05 月 24 日 04:58
-- 服务器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- 数据库: `blog`
-- 

-- --------------------------------------------------------

-- 
-- 表的结构 `blog_user`
-- 

CREATE TABLE `blog_user` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `user` varchar(20) NOT NULL,
  `pass` char(40) NOT NULL,
  `ques` varchar(200) NOT NULL,
  `ans` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `birthday` date NOT NULL,
  `ps` varchar(200) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

-- 
-- 导出表中的数据 `blog_user`
-- 

INSERT INTO `blog_user` VALUES (1, 'ycku', '4be30d9814c6d4e9800e0d2ea9ec9fb00efa887b', '1', '酸菜鱼', 'ycku@163.com', '1950-01-01', '没有备注！');
INSERT INTO `blog_user` VALUES (2, 'ycku', '4be30d9814c6d4e9800e0d2ea9ec9fb00efa887b', '1', '酸菜鱼', 'ycku@163.com', '1950-01-01', '没有备注！');
INSERT INTO `blog_user` VALUES (3, 'ycku', '4be30d9814c6d4e9800e0d2ea9ec9fb00efa887b', '1', '酸菜鱼', 'ycku@163.com', '1950-01-01', '没有备注！');
