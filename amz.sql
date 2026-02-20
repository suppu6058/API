create database students;
use students;
create table orders(order_id varchar(50),quantity int,total_price float ,product_id  varchar(50));
CREATE TABLE product(
    product_id varchar(50),
    product_name VARCHAR(255),
     price float,
     quantity int);
     insert into orders values('1A8',6,78.0,'67u');
     insert into orders(order_id,quantity,total_price,product_id) values('1A5',7,57.0,'45u'),('87R',9,34.0,'35u'),('12C',4,56.0,'56Y');
     
	insert into product (product_id,product_name,price,quantity) values('01A',"watch",780.34,444),('34A',"Mobile",78000.34,567),('34A',"Mobile",78000.34,567),('34A',"Mobile",78000.34,567);
     select * from orders;
    select * from product;

