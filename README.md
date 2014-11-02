carpool
========

#### Set up development environment
* Install [Vagrant](http://www.vagrantup.com/) and [Virtual Box](https://www.virtualbox.org/)
* vagrant up
    * This may take a while because it has to download the Go distribution.
* vagrant ssh
* cd /vagrant


#### Set up Postgres
Since the only user who can connect to a fresh install is the postgres user, create a database account.

```
sudo -u postgres createuser --superuser vagrant
```
Please keep the name 'vagrant' as the superuser.  Vagrant logs you in as 'vagrant' by default, and if you add a
Postgres user that's the same as your Ubuntu user, then you can connect to the database without a password.
Go to the [Ubuntu help article for Postgres](https://help.ubuntu.com/community/PostgreSQL) and read the
Alternative Server Setup header for more details.

Now, log into postgres console as the postgres user:
```
sudo -u postgres psql
```

Let's set an empty password field for the superuser we just created.
```
postgres=# \password vagrant  # Press enter without inputting anything when password prompts show up.
```

Log out of the postgres console by hitting Ctrl-D.

Client programs, by default, connect to the local host using your Ubuntu login name and expect to find a database with
that name too. So, create a database with the same name as your login name:
```
sudo -u postgres createdb vagrant
```

Connecting to the database to try out some SQL should now be as easy as:
```
psql
```

Creating additional database is just as easy:
```
vagrant=# create database test;
```
