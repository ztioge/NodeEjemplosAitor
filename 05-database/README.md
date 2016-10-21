# node database

## mysql node

https://www.npmjs.org/package/mysql

## sequelize

http://sequelizejs.com/

```bash
$ npm install --save sequelize
$ npm install --save mysql
```

## Caminte - ORM
Mongdb, mysql, ...
https://github.com/biggora/caminte#readme

## MySql
```bash
$ sudo apt-get install mysql-server
```

https://launchpad.net/~olivier-berten/+archive/ubuntu/misc

http://www.mysql.com/products/workbench/

#####MySql command line tutorial:

http://dev.mysql.com/doc/refman/5.5/en/database-use.html

```bash
$ mysql --help
$ mysql -h host -u user -p
$ mysql -u user -p
mysql> QUIT

mysql> select version(), current_date, user();
mysql> show databases;
mysql> use databasename;
mysql> create database test;
//http://dev.mysql.com/doc/refman/5.7/en/grant.html
mysql> CREATE USER 'peru'@'localhost' IDENTIFIED BY 'peru';
mysql> GRANT ALL ON test.* TO 'peru'@'localhost';
mysql> create table ...
mysql> insert ...
mysql> show tables;
mysql> describe tablename;
mysql> SELECT User FROM mysql.user;

// http://stackoverflow.com/questions/17666249/how-to-import-a-sql-file-using-the-command-line-in-mysql
$ mysql -u username -p database_name < file.sql
$ mysql -u zmwebdev c9 < todo.sql
$ mysqldump db_name > backup-file.sql
```

#####Postgresql
http://www.postgresql.org/

https://help.ubuntu.com/community/PostgreSQL

Ubuntu install:
http://www.postgresql.org/download/linux/ubuntu/

```bash
# ubuntu 12.04
$ sudo oapt-get install postgresql-9.1 libpq-dev
```
Graphical admin:
```bash
$ sudo apt-get install pgadmin3
``` 

mysql to postgresql migration:
https://github.com/lanyrd/mysql-postgresql-converter

https://devcenter.heroku.com/articles/heroku-mysql

#####Postgresql command line tutorial:
```bash
$ createdb mydb
$ dropdb mydb

# access to db
$ psql mydb
```

## Mongoose

http://mongoosejs.com/

http://www.mongodb.org/

https://mongolab.com/

Join in MongoDB using Mongoogse "population": http://mongoosejs.com/docs/populate.html

#### install mongodb

http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

```bash
$ sudo apt-get install mongodb-org
$ service mongodb start
$ mongo
```
http://docs.mongodb.org/manual/tutorial/getting-started/

...

## Openshift databases

mysql, postgresql, mongodb, ...

https://developers.openshift.com/en/databases-mysql.html

##Heroku databases

postgresql, mysql, mongodb, ...

https://devcenter.heroku.com/articles/cleardb#the-complete-tutorial

https://devcenter.heroku.com/articles/heroku-postgresql

## MySQL Cloud database

http://www.sitepoint.com/database-as-a-service-mysql-in-the-cloud/
