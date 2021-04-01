CREATE TABLE Orders (
    id INTEGER NOT NULL AUTO_INCREMENT,
    customerid VARCHAR(128) NOT NULL,
    firstname VARCHAR(128) NOT NULL,
    lastname VARCHAR(128) NOT NULL,
    email VARCHAR(128) NOT NULL,
    phone VARCHAR(128) NOT NULL,
    arrival VARCHAR(128) NOT NULL,
    departure VARCHAR(128) NOT NULL,
    departure_date VARCHAR(128) NOT NULL,
    PRIMARY KEY (id)
);