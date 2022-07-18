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
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stars` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `review` text NOT NULL,
  `reviewRestaurantId` int(11) NOT NULL,
  `reviewUserId` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reviewRestaurantId_idx` (`reviewRestaurantId`),
  KEY `reviewUserId_idx` (`reviewUserId`),
  CONSTRAINT `reviewRestaurantId` FOREIGN KEY (`reviewRestaurantId`) REFERENCES `restaurant` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `reviewUserId` FOREIGN KEY (`reviewUserId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (2,1,'Thu Aug 05 2021 21:17:33 GMT+0800 (Singapore Standard Time)','TERRIBLE CUSTOMER SERVICE',3,4,'romeo_jr97'),(4,0,'Thu Aug 05 2021 21:40:08 GMT+0800 (Singapore Standard Time)','Terrible service very slow!',4,4,'romeo_jr97'),(5,1,'Thu Aug 05 2021 21:39:50 GMT+0800 (Singapore Standard Time)','Terrible service very slow!',2,4,'romeo_jr97'),(6,3,'Thu Aug 12 2021 20:41:06 GMT+0800 (Singapore Standard Time)','meh',1,1,NULL),(7,5,'Thu Aug 12 2021 20:45:04 GMT+0800 (Singapore Standard Time)','really amazing place to eat',1,1,'shazwandi'),(8,3,'Thu Aug 19 2021 23:15:47 GMT+0800 (Singapore Standard Time)','not a bad place to eat',1,1,'Shaz'),(10,4,'Fri Aug 20 2021 03:32:49 GMT+0800 (Singapore Standard Time)','I really like bringing my family to this place maybe not on the weekends',2,1,'johnDoe');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
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
