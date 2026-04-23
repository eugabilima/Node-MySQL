create database node_log;
use node_log;

create table teste (
    id int auto_increment primary key,
    email varchar(255) not null,
    senha varchar(255) not null,
    hora time default current_time
);