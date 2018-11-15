CREATE TABLE IF NOT EXISTS mice (
	name varchar(30),
	age INT,
	weight INT
);

CREATE TABLE IF NOT EXISTS events (
	eventName varchar(50),
	date timestamp,
	repeats BOOLEAN
);
