USE final_exam_schema;
select user from mysql.db where db='final_exam_schema';

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `price` decimal(5,2) NOT NULL DEFAULT '0.00',
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_categoryid_category_id_idx` (`categoryid`),
  CONSTRAINT `fk_categoryid_category_id` FOREIGN KEY (`categoryid`) REFERENCES `Categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` varchar(25) DEFAULT 'admin',
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `Categories` VALUES (1,'Science Fiction'),(2,'Fantasy'),(3,'Political Fiction'),(4,'Thriller'),(5,'Mystery');
INSERT INTO `Books` VALUES (2,2,'The Hobbit','J.R.R. Tolkien',9.99,'2019-02-26 13:06:09'),(3,3,'1984','George Orwell',7.49,'2019-02-26 13:08:52'),(4,4,'The Outsider','Stephen King',20.63,'2019-02-26 13:11:07'),(5,5,'The Adventures of Sherlock Holmes','Sin Arthur Conan Doyle',8.99,'2019-02-26 13:12:33'),(11,1,'The Martian','Andy Weir',12.99,'2019-02-27 13:28:04');


SELECT * FROM Books;
SELECT * FROM Users;
SELECT * FROM information_schema.routines WHERE routine_type = 'PROCEDURE' AND routine_schema = 'final_exam_schema';

CREATE USER 'finalexam'@'localhost';
GRANT ALL PRIVILEGES ON base.* TO 'finalexam'@'localhost' IDENTIFIED BY 'password';

#
#UPDATE Books SET ? WHERE id = ?;
DELETE FROM Books WHERE id = ?;

/*
DELIMITER //
	CREATE PROCEDURE namehere(term VARCHAR(50))
		BEGIN 
			queryhere
		END //
DELIMITER ;
*/

# getAllBooks() Created! CALL getAllBooks();
DELIMITER //
	CREATE PROCEDURE getAllBooks()
		BEGIN 
			SELECT b.id, b.title, b.author, b.price, c.name FROM Books b
			JOIN Categories c ON b.categoryid=c.id;
		END //
DELIMITER ;

# getSingleBook() Created!  CALL getSingleBook(?);
DELIMITER //
	CREATE PROCEDURE getSingleBook(queryID INT)
		BEGIN 
			SELECT b.id, b.title, b.author, b.price, c.name FROM Books b
			JOIN Categories c ON b.categoryid=c.id
			WHERE b.id = queryID;
		END //
DELIMITER ;

# postNewBook Created! CALL postNewBook 
DELIMITER //
	CREATE PROCEDURE postNewBook(IN new_categoryid INT(11), IN new_title VARCHAR(100), IN new_author VARCHAR(100), IN new_price DECIMAL(5,2))
		BEGIN 
			INSERT INTO Books(categoryid, title, author, price) VALUES (new_categoryid, new_title, new_author, new_price);
		END //
DELIMITER ;

DELIMITER //
	CREATE PROCEDURE putUpdateAllBookInfo(IN bookid INT(11), IN new_categoryid INT(11), IN new_title VARCHAR(100), IN new_author VARCHAR(100), IN new_price DECIMAL(5,2))
		BEGIN 
            CALL putUpdateCategoryid(bookid, new_categoryid);
            CALL putUpdateTitle(bookid, new_title);
            CALL putUpdateAuthor(bookid, new_author);
            CALL putUpdatePrice(bookid, new_price);            
		END //
DELIMITER ;

# putUpdateCategoryid Created!		CALL putUpdateCategoryid(bookid, new_categoryid)
DELIMITER //
	CREATE PROCEDURE putUpdateCategoryid(IN bookid INT(11), IN new_categoryid INT(11))
		BEGIN 
			UPDATE Books b
            SET b.categoryid=new_categoryid WHERE b.id=bookid;
		END //
DELIMITER ;

# putUpdateTitle Created	CALL putUpdateTitle(bookid, new_title)
DELIMITER //
	CREATE PROCEDURE putUpdateTitle(IN bookid INT(11), IN new_title VARCHAR(100))
		BEGIN 
			UPDATE Books b
            SET b.title=new_title WHERE b.id=bookid;
		END //
DELIMITER ;

# putUpdateAuthor Created		CALL putUpdateAuthor(bookid, new_author);
DELIMITER //
	CREATE PROCEDURE putUpdateAuthor(IN bookid INT(11), IN new_author VARCHAR(100))
		BEGIN 
			UPDATE Books b
            SET b.author=new_author WHERE b.id=bookid;
		END //
DELIMITER ;

# putUpdatePrice Created CALL putUpdatePrice(bookid, new_price);
DELIMITER //
	CREATE PROCEDURE putUpdatePrice(IN bookid INT(11), IN new_price DECIMAL(5,2))
		BEGIN 
			UPDATE Books b
            SET b.price=new_price WHERE b.id=bookid;
		END //
DELIMITER ;

# deleteBook Created!  CALL deleteBook(?);
DELIMITER //
	CREATE PROCEDURE deleteBook(IN bookid INT(11))
		BEGIN 
			DELETE FROM Books
            WHERE Books.id=bookid;
		END //
DELIMITER ;

# getAllUsers() Created! CALL getAllUSers();
DELIMITER //
	CREATE PROCEDURE getAllUsers()
		BEGIN 
			SELECT u.id, u.email, u.role, u.name FROM Users u;
		END //
DELIMITER ;

# getSingleUser() Created! CALL getSingleUser(?);
DELIMITER //
	CREATE PROCEDURE getSingleUser(id int)
		BEGIN
			SELECT u.id, u.email, u.role, u.name FROM Users u
            WHERE u.id=id;
		END //
DELIMITER ;

# getSingleUserAUTH() Created! CALL getSingleUserAUTH(?);
DELIMITER //
	CREATE PROCEDURE getSingleUserAUTH(email VARCHAR(60))
		BEGIN
			SELECT u.id, u.email, u.role, u.name, u.password FROM Users u
            WHERE u.email=email;
		END //
DELIMITER ;

# getAllCategories() Created! CALL getAllCategories;
DELIMITER //
	CREATE PROCEDURE getAllCategories()
		BEGIN
			SELECT * FROM Categories;
		END //
DELIMITER ;

# getSingleCategory() Created! CALL getSingleCategory(?);
DELIMITER //
	CREATE PROCEDURE getSingleCategory(id int)
		BEGIN
				SELECT * FROM Categories c WHERE c.id = id;
		END //
DELIMITER ;






# putUpdateBookAllAtOnce created!
DELIMITER //
    CREATE PROCEDURE putUpdateBookAllAtOnce(IN bookid INT(11), IN new_categoryid INT(11), IN new_title VARCHAR(100), IN new_author VARCHAR(100), IN new_price DECIMAL(5,2))
        BEGIN 
            UPDATE Books b
            SET b.categoryid=new_categoryid,
            b.title=new_title,
            b.author=new_author,
            b.price=new_price
             WHERE b.id=bookid;
        END //
DELIMITER ;


