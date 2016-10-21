# node postgresql Heroku

This app run mysql locally and postgresql in Heroku

http://sequelizejs.com/articles/heroku

```bash
$ npm install --save pg

IF ERROR:
$ sudo apt-get install libpq-dev
```

Heroku:

```bash
$ heroku addons:add heroku-postgresql:dev

$ heroku pg:psql --app sequelize-heroku HEROKU_POSTGRESQL_MAUVE
```

Postgresql:

http://www.postgresql.org/docs/9.1/static/sql-createtable.html
