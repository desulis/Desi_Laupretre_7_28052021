-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` longtext,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'super sauce',1,23,'2021-06-07 19:08:14','2021-06-07 19:08:14'),(2,'salut !',1,23,'2021-06-07 19:12:34','2021-06-07 19:12:34'),(3,'toto',1,22,'2021-06-07 19:14:01','2021-06-07 19:14:01'),(4,'super',1,22,'2021-06-07 19:15:08','2021-06-07 19:15:08'),(5,'Lis bien l\'article OK ?',1,29,'2021-06-07 21:46:02','2021-06-07 21:46:02'),(6,'Ouaiss Desi... merci ?',4,29,'2021-06-07 21:51:09','2021-06-07 21:51:09'),(7,'salut',6,32,'2021-06-08 07:10:24','2021-06-08 07:10:24');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `article` longtext,
  `image` longtext,
  `createdAt` datetime NOT NULL,
  `userId` int NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `post_user_idx` (`userId`),
  CONSTRAINT `post_user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (25,'C\'est pas mal !','http://localhost:3000/images/8ced49453337ad651f668614c973b62e.jpg1623093667333.jpg','2021-06-07 19:21:07',1,'2021-06-07 19:21:07'),(27,'Va sur google.com',NULL,'2021-06-07 21:03:39',1,'2021-06-07 21:03:39'),(28,'','http://localhost:3000/images/giphy.gif1623099913568.undefined','2021-06-07 21:05:13',1,'2021-06-07 21:05:13'),(29,'Bon anniversaire Jocelyn ! https://www.thefitnesstheory.fr/jai-craque-et-beaucoup-beaucoup-trop-mange-3-etapes-pour-limiter-les-degats-et-deculpabiliser/','http://localhost:3000/images/giphy_(1).gif1623100273921.undefined','2021-06-07 21:11:13',1,'2021-06-07 21:11:13');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` mediumtext NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` mediumtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `admin` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'desi','desi@gmail.com','$2b$10$kdXdLAqEjjlupyRCXzC1pu4x4oBLkZ4OD2qiAAah94c.p6MzAv56i','0000-00-00 00:00:00','0000-00-00 00:00:00',0),(2,'Desi 2','desi2@gmail.com','$2b$10$y.Ool7D84DfOw6eh9CauluEMYRjXOFTy3CLKG/ujXTCeomPcry9h2','2021-06-06 22:46:05','2021-06-06 22:46:05',0),(4,'Jocelyn','jocelyn2@ymail.com','$2b$10$Kqzlhly2.CKYdMPR82wtz.m4l0l.46jmAoSWsSqHJmObcsYQ9axU6','2021-06-07 21:50:42','2021-06-07 21:50:42',0),(5,'Kuku','kuku@gmail.com','$2b$10$UpU3yLNqA.c3o7Ory9j5POJKHBvyb.NMo4LJzjV9.ytE0ZfCWaKTS','2021-06-08 06:58:02','2021-06-08 06:58:02',0),(6,'Danny','danny@gmail.co','$2b$10$I.D0zKEB/s.30lHc2XsiBu5n2Ru1Kxn79WoubAjWDoZsnE/zrgNG.','2021-06-08 07:08:41','2021-06-08 07:08:41',0),(9,'admin','admin','$2b$10$dM4Y97b9GHMkVYBYRi/TV.LoM8c6C.RYDpb7NS/3n7ONCDOt9WDne','2021-06-08 10:30:12','2021-06-08 10:30:12',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-08 12:38:59
