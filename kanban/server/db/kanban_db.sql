DROP USER IF EXISTS kanban_user;
DROP DATABASE IF EXISTS kanban_db;

CREATE USER kanban_user WITH PASSWORD 'password';
CREATE DATABASE kanban_db WITH OWNER kanban_user;

