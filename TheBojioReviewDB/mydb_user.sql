-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `join_since` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `userPic` varchar(45) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` int(11) DEFAULT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `address` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'shazjuani','28/7/2021','shazwazzy@gmail.com','img/User/1','shaz83524794',2147483647,'shaz','wandi','blk 321 tampines 32','M'),(4,'shazs','Wed Jul 28 2021 20:02:19 GMT+0800 (Singapore Standard Time)','shazswandiali@gmail.com','img/User/2','123456789',2147483647,'swag','wagger','blsk 231 tampines st 23 #03-423','F'),(5,'fasdaad','safasasda','sfasasdasda',NULL,'fsafasda',0,'fsadfsafa','fsafasdasdfa','fasafdasdasfas',NULL),(6,'hongyap','Thu Aug 05 2021 22:23:53 GMT+0800 (Singapore Standard Time)','speargunner@gmail.com',NULL,'123456789',94587854,'Spear','Gunner','123 Yishun Ring Road #13-123',NULL),(7,'','dasjdnajksn','',NULL,'123',NULL,'sdasa','dasdascac',NULL,'f'),(8,'shaz','Wed Aug 18 2021 20:20:07 GMT+0800 (Singapore Standard Time)','shazwandi@gmail.com',NULL,'1234556789',3564987,'shaz','shaz','tampines St 42 blk 234 #04-312','Male'),(9,'juandisjd','Thu Aug 19 2021 23:11:31 GMT+0800 (Singapore Standard Time)','shazzyywaazzyyy@gmail.com',NULL,'123456789',2147483647,'shaz','wani','ksadjaksdjkadjklasjdkla','Other'),(12,'sufyan','Sun Aug 22 2021 17:56:23 GMT+0800 (Singapore Standard Time)','bobtea@gmail.com',NULL,'123',989897454,'bob','tea','bob tea rd','M');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-22 23:15:42
