create table books(
    id int not null auto_increment primary key,
    isbn varchar(20) not null,
    open_id varchar(50) not null,
    title varchar(100) not null,
    images varchar(200),
    alt varchar(200) not null,
    publisher varchar(200) not null,
    summary varchar(1000) not null,
    price varchar(100),
    ret float,
    tags varchar(300),
    author varchar(200) not null
);
