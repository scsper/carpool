carpool
========

[![Build Status](https://travis-ci.org/scsper/carpool.svg?branch=master)](https://travis-ci.org/scsper/carpool)

#### Initial Setup
1. Set up Node (see below)
2. Add the following line to `/etc/hosts/`: `127.0.0.1       localhost       local.carpool.com`
3. Set up postgres (see below)
4. Start postgres `postgres -D /usr/local/var/postgres`
5. While postgres is running, perform migrations `gulp migrate`
6. `npm install -g gulp`
7. `npm install -g gulp-cli`
8. Open new shell and start the web server: `gulp`
9. Go to http://local.carpool.com:3000

#### Running
1. npm install
2. `nvm use 0.10.36`
3. Open new shell and start postgres: `postgres -D /usr/local/var/postgres`
4. Open new shell and start the web server: `gulp`
5. go to `http://localhost:3000`

### Setting up Node
1. Install nvm from [here](https://github.com/creationix/nvm).
2. `nvm install 0.10.36`
3. `nvm use 0.10.36`
4. Add `source ~/.nvm/nvm.sh` to your ~/.profile (load nvm when you open a shell)
5. Add `nvm use 0.10.36` to your ~/.profile (load the correct version of Node automatically when you open a shell)

#### Setting up postgres
1. brew install postgres
2. npm install
3. postgres -D /usr/local/var/postgres
4. In psql, `create database carpool_dev;`

###### Migrations
Create a migration:
```
node ./scripts/migrate.js create migration_name
```
it will create two `.sql` files (up and down) inside `./migrations` directory

Run migrations:
```
node ./scripts/migrate.js migrate
```

Undo migrations:
```
node ./scripts/migrate.js rollback
```
will roll back the latest migration


Add dummy data
```
node ./scripts/seed.js
```


###### Tests
```
gulp test
gulp test:unit
gulp test:integration
gulp test:browser
```

###### If things aren't working with your user
1. In a new shell, start psql `psql --username=<USERNAME> -d template1` // use unix username
2. In psql, `create database <USERNAME>;` // use unix username

###### Using psql

* Connect to database: `\c carpool_dev`
* List all databases: `\dt`
