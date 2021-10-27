drop schema if exists mytype;
CREATE SCHEMA `mytype` ;
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
    latitude Decimal(8,6) ,
    longitude Decimal(9,6) ,
    locationname varchar(50) not null,
    island varchar(20),
    winddirections varchar(30) not null,
    waves int , 
    depth varchar(30) ,
    description varchar(250) ,
    experience varchar(90) ,
    usersriding int,
    
    primary key (id)
);

INSERT INTO `mytype`.`locations` (`latitude`, `longitude`, `locationname`, `island`, `winddirections`, `waves`, `depth`, `description`, `experience`) VALUES ('32.76562356586255', '-79.82115738187443', 'Sullivan\'s Island 28.5', 'Sullivans', 'S,SW,SE,E,ENE', '3', 'shallow inside', 'This beginner friendly beach is a popular launch spot and is an ideal place to ride throughout the year. It can get crowded with beach goers in the summer months, so be cautious of others on the beach. The water here can range from semi flat to choppy depending on the tides. On windy days, you’re almost certain to encounter kiters on this beach!', 'beginner');
INSERT INTO `mytype`.`locations` (`latitude`, `longitude`, `locationname`, `island`, `winddirections`, `waves`, `depth`, `description`, `experience`) VALUES ('32.681369379215994', '-79.89118925044373', 'Folly North End', 'Folly Island', 'N,NE,NNE', '4', 'various', 'Folly Beach has a vibrant beachfront community and is home to the Folly Beach Pier. To kite in this spot, drive east along Arctic Avenue until you’re clear of the busier sections of beach. There are plenty of spots where you can pump up and ride here, but if you\'re new to this spot aim to kite in a spot where you already see other kiters. In this spot, be cautious of the rocks on the beach, beach users, and submerged jetties in the waer.', 'intermediate');
INSERT INTO `mytype`.`locations` (`latitude`, `longitude`, `locationname`, `island`, `winddirections`, `waves`, `depth`, `description`, `experience`) VALUES ('32.688061417805606', '-79.88721424510517', 'Morris Light House', 'Folly', 'N,NNE,NE,ENE', '1', 'deep', 'Go all the way to the end of the painted road. Behind the light house sand bar is a flat water slick. Long walk to get to launch location. Small take off area, with many hazards. ', 'advanced');
INSERT INTO `mytype`.`locations` (`latitude`, `longitude`, `locationname`, `island`, `winddirections`, `waves`, `depth`, `description`, `experience`) VALUES ('32.751914138739735', '-79.88115077805551', 'Fort Sumpter', 'Morris Island', 'N,NNE,NE', '2', 'deep', 'Only accessilble by boat or a long hike. Strong currents and boat/shipping traffic makes this a location only suitable for expericenced riders.', 'advanced');
INSERT INTO `mytype`.`locations` (`latitude`, `longitude`, `locationname`, `island`, `winddirections`, `waves`, `depth`, `description`, `experience`) VALUES ('32.640900462604456', '-79.96962012816843', 'Folly Beach County Park', 'Folly', 'S,SW,W,NNE', '2', 'deep', 'Whatever your level, the county park spot at Folly Beach is a great spot to ride. This spot is rideable in nearly every wind direction. You will have to pay to park in the county park, but it\'s worth it for a session on this beautiful beach. Be sure to park at the far end of the lot as kiteboarders are restricted to riding only past the swimming zone. You\'ll have plenty of space to play on the water and lots of room to set up on the beach.', 'beginner');
INSERT INTO `mytype`.`locations` (`latitude`, `longitude`, `locationname`, `island`, `winddirections`, `waves`, `depth`, `description`) VALUES ('32.757628', '-79.857808', 'Fort Moultrie', 'Sullivan\'s Island', 'S,SSW,W,NW', '1', 'deep', 'Beware coyotes, shipping traffic, and stong currents.');

UPDATE `mytype`.`locations` SET `experience` = 'advanced' WHERE (`id` = '6');