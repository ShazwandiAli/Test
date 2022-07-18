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
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `neighbourhood` varchar(45) NOT NULL,
  `postalCode` int(11) NOT NULL,
  `category` varchar(45) NOT NULL,
  `hours` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `video1` varchar(255) DEFAULT NULL,
  `video2` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'Saffrrons','Blk 222 Tampines St 22 #01-321','EAST',522222,'Indian','7am - 10pm daily','img/restaurant/1.jpg','https://www.youtube.com/watch?v=GJRG2QX41dY&ab_channel=iim4nnOfficial','https://www.youtube.com/watch?v=QF0OFRHYd9A&ab_channel=TheStraitsTimes','https://www.saffrons.com.sg/'),(2,'Mcdonalds','Blk 322 Orchard Rd 232 #04-322','CENTRAL',456214,'FastFood','24hr ','img/restaurant/2.jpg','https://www.youtube.com/watch?v=VjdMr0QgRZM&ab_channel=McDonald%27sSingapore','https://www.youtube.com/watch?v=QjrXt-jvWaw&ab_channel=McDonaldsMalaysia','https://www.mcdelivery.com.sg/sg/home.html?ds_rl=1248535&ds_rl=1248535&gclid=CjwKCAjwjdOIBhA_EiwAHz8xm27br_psowVJn3bveGXX0r5T2UpoS2nDzPZDSv071fQPhmWMgeZBPhoCVJwQAvD_BwE&gclsrc=aw.ds'),(3,'Ali Eating House','23 Jurong East #02-423','WEST',245324,'MalayFood','5pm - 3am daily','img/restaurant/3.jpg','https://www.youtube.com/watch?v=sg6zG0r5B7U&ab_channel=LuqFoodieSG','https://www.youtube.com/watch?v=1aHZEl5_nnw&ab_channel=GOJERR','https://www.facebook.com/pg/AliNachiaBriyaniDam/posts/'),(4,'DimSum Place','42 Haji Lane #01-321','CENTRAL',154587,'ChineseCuisine','3pm - 3am daily','img/restaurant/4.jpg','https://www.youtube.com/watch?v=PTlFewU1Ilw&ab_channel=SportsNutritionistJames','https://www.youtube.com/watch?v=fohMpCt5j4A&ab_channel=GettingLost','https://www.thedimsumplace.sg/'),(5,'KFC','42 Bedok Lane #01-321','EAST',254165,'FastFood','24hr','img/restaurant/5.jpg',NULL,NULL,'https://www.kfc.com.sg/'),(6,'Long John Silver','42 Jurong West #02-423','WEST',324325,'FastFood','7am - 10pm daily','img/restaurant/6.jpg',NULL,NULL,'https://www.longjohnsilvers.com.sg/'),(7,'Mos Burger','Blk 123 Funan Rd 232 #04-322','CENTRAL',212154,'Burger','7am - 10pm daily','img/restaurant/7.jpg',NULL,NULL,'http://www.mosburger.com.sg/home.php'),(8,'Subway','Blk 324 Tampines St 22 #01-321','EAST',323254,'Sandwich','7am - 10pm daily','img/restaurant/8.jpg',NULL,NULL,'https://www.subway.com/en-SG'),(9,'Pizza Hut','42 Simei Street #01-321','EAST',215656,'Pizza','3pm - 3am daily','img/restaurant/9.jpg',NULL,NULL,'https://www.pizzahut.com.sg/order/hotdeals?gclid=CjwKCAjwgviIBhBkEiwA10D2j-IsJSXXN3i1opM-I9iYJUZb7sKYzRlciZoQVRbUyy8KwWZ8mM-JvBoCSm8QAvD_BwE&gclsrc=aw.ds'),(10,'Hajjah Maimunah','42 Macpherson West #02-423','CENTRAL',164564,'MalayFood','7am - 10pm daily','img/restaurant/10.jpg',NULL,NULL,'https://www.hjmaimunah.com/'),(11,'Banjara Bar & Restaurant','24 Maju Avenue, Serangoon Garden','NORTH',121356,'IndianFood','24hr','img/restaurant/11.jpg',NULL,NULL,'https://banjara.com.sg/'),(12,'Shamiana Restaurant','6 Changi Business Park Ave 1, North Tower, #01-32 UE BizHub East','EAST',216546,'IndianFood','24hr','img/restaurant/12.jpg',NULL,NULL,'https://www.shamiana.com.sg/');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
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
