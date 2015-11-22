-- --------------------------------------------------------

--
-- 表的结构 `oc_product_option_value_description`
--

DROP TABLE IF EXISTS `oc_product_option_value_description`;
CREATE TABLE IF NOT EXISTS `oc_product_option_value_description` (
  `product_option_value_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  PRIMARY KEY (`product_option_value_id`,`language_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

