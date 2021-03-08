CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email TEXT
);

INSERT INTO users (name, email) VALUES ('bruno', 'bruno@gmail.com'), ('ana', 'ana@gmail.com');