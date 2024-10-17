-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2020 at 08:08 AM
-- Server version: 5.6.15-log
-- PHP Version: 5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mage_io`
--

-- --------------------------------------------------------

--
-- Table structure for table `abilities`
--

CREATE TABLE IF NOT EXISTS `abilities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nev` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `leiras` text NOT NULL,
  `sebzes` int(20) NOT NULL,
  `effect` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `mana` int(20) NOT NULL,
  `ikon` varchar(100) NOT NULL,
  `spell_ikon` varchar(100) NOT NULL,
  `indicator` varchar(100) NOT NULL,
  `level_min` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `abilities`
--

INSERT INTO `abilities` (`id`, `nev`, `leiras`, `sebzes`, `effect`, `mana`, `ikon`, `spell_ikon`, `indicator`, `level_min`) VALUES
(1, 'Fireball', 'You summon a fireball, that travels a short distance. It''s extremely dangerous.', 25, 'none', 30, 'tuzgolyo.png', 'tuzgolyo.png', 'IndicatorFireball.png', 1),
(2, 'Ice Trap', 'You damage your enemy with an icy circle, slowing them for 3 seconds. The ice trap can only damage one enemy.', 10, 'slow', 40, 'icetrap.png', 'IceTrapSpell.png', 'IndicatorCircle.png', 4),
(3, 'Tornado', 'You summon a giant tornado, that slowly moves away from you. If an enemy touches the tornado, they stuck in the middle of it, until the tornado disappears. You can''t move, while the tornado is active.', 15, 'stun', 55, 'tornado.png', 'tornadoSpell.gif', 'IndicatorTornado.png', 7),
(4, 'Life Steal', 'You steal the life essence and movement speed from one of your enemies, dealing 10 damage and restoring 10% of your shield. This ability always costs 50% of your mana, but not less than 45. This ability has a 4 second cooldown.', 10, 'slow, heal', 50, 'lifesteal.png', 'lifeStealSpell.gif', 'IndicatorLifeSteal.png', 10),
(5, 'Earthquake', 'You rumble the earth beneath your feet, damaging and slowing down your enemies. You can''t move while casting earthquake. The spell deals damage every second, but it only deals fith of the normal damage.', 6, 'slow', 30, 'earthquake.png', '', '', 15),
(6, 'Shadow Clone', 'You summon a clone of yourself, that can copy your abilities. It can only copy the fireball first, but if you level up, the rest of the spells will unlock. The clone can''t copy your life steal, but you can use your clone to heal yourself and reset the life steal''s cooldown. The Clone lasts for 10 seconds.', 0, 'stun, slow, heal', 70, 'clone.png', '', '', 20);

-- --------------------------------------------------------

--
-- Table structure for table `scoreboard`
--

CREATE TABLE IF NOT EXISTS `scoreboard` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `playername` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `score` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `scoreboard`
--

INSERT INTO `scoreboard` (`id`, `playername`, `score`) VALUES
(1, 'xX_PussySlayer69_Xx', 69420),
(2, 'Monke', 10),
(3, 'Mészáros Lölő', 99999999),
(7, 'admin', 26540),
(8, 'asdxd', 20169);

-- --------------------------------------------------------

--
-- Table structure for table `skilltree`
--

CREATE TABLE IF NOT EXISTS `skilltree` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `nev` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `leiras` text CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `skill` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `szint` int(1) NOT NULL,
  `limit` int(50) NOT NULL,
  `ar` int(20) NOT NULL,
  `ikon` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `skilltree`
--

INSERT INTO `skilltree` (`id`, `nev`, `leiras`, `skill`, `szint`, `limit`, `ar`, `ikon`) VALUES
(1, 'Agility', 'Increases your movement speed.', '+10% movement speed.', 0, 4, 1, 'agility.png'),
(2, 'Shield', 'Gain a shield, that restores, when you''re  out of combat.', 'The shield is equal to 4% of your hp.', 0, 5, 1, 'shield.png'),
(3, 'Bonus mana', 'Increases your maximum mana, gain bonus mana regeneration.', '+10% maximum mana, +2 mana/sec.', 0, 5, 1, 'mana.png'),
(4, 'Power Up', 'Gain bonus damage. On the final upgrade gain additional 10% damage.', '+1 damage to your spells.', 0, 5, 1, 'powerup.png'),
(5, 'Wisdom', 'White bubbles and enemies give you more experience point', '+5% XP from white bubbles, +10% XP from enemies.', 0, 4, 2, 'wisdom.png'),
(6, 'Vitality', 'Increases your maximum health.', '+5% maximum health.', 0, 5, 2, 'vitality.png'),
(7, 'Cheaper spells', 'Casting a spell costs you less mana.', '-2 mana cost on all of your spells.', 0, 5, 2, 'manacost.png'),
(8, 'Overpowered', 'You deal more damage if you have at least 50% of your maximum mana.', '+1.5 damage while you have at least 50% of your maximum mana.', 0, 6, 2, 'overpowered.png'),
(9, 'Teleport', 'You can now teleport anywhere on your screen using Q. Every time you teleport, you gain permanent movement speed. It has a 60 second cooldown.', 'Teleport', 0, 1, 4, 'teleport.png'),
(10, 'Smoke bomb', 'You can now throw a smoke bomb using W, that makes you invisible for 5 seconds. It has a 60 second cooldown.', 'Smoke bomb', 0, 1, 4, 'smokebomb.png'),
(11, 'Mana barrier', 'Whenever you receive a lethal blow, you receive a shield equal to 24% your maximum mana. It has a 60 second cooldown.', 'Mana barrier.', 0, 1, 4, 'barrier.png'),
(12, 'Ritual', 'Gain 15% damage and 30% crit chance. Gain additional 70% for 10 seconds and every enemy you kill during this time, restores 20% of your missing mana , using E. This ability has 80 second cooldown.', '+15% damage, kills restore 20% of your missing mana. +30% crit chance. Ritual.', 0, 1, 4, 'ritual.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `usernev` varchar(50) NOT NULL,
  `jelszo` varchar(32) NOT NULL,
  `email` varchar(100) NOT NULL,
  `highscore` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `usernev`, `jelszo`, `email`, `highscore`) VALUES
(1, 'admin', '827ccb0eea8a706c4c34a16891f84e7b', 'admin@admin.com', 26540),
(6, 'asdxd', 'e249ffe8e7a3532997a311336a3f1018', 'asdxd@asdxd.com', 20169);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
