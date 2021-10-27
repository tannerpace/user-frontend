drop schema if exists mytype
CREATE SCHEMA `mytype` 


CREATE TABLE `mytype`.`users` (
    id int unique not null auto_increment,
    userName varchar(25) unique not null,
    password varchar(255) not null,
    new_user int DEFAULT (1),
    dateJoined Datetime not null DEFAULT (current_date()),

   
    
    primary key (id)
);



CREATE TABLE `mytype`.`locations` (
    id int unique not null auto_increment,
    score varchar(140) not null,
    userId int not null,
    lang varchar(140),
    dateAndTime datetime not null default now(),

    primary key (id),
    foreign key (userId) references users(id)
    
);