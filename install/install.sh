#!/usr/bin/env bash

sudo apt-get update
sudo apt-get -y install python-software-properties

sudo apt-get -y install make
sudo apt-get -y install curl
sudo apt-get -y install vim
sudo apt-get -y install git-core

# sudo apt-add-repository ppa:chris-lea/node.js
# sudo apt-get update
# sudo apt-get -y install nodejs

# wget https://storage.googleapis.com/golang/go1.3.3.linux-386.tar.gz
# sudo tar -C /usr/local -xzf go1.3.3.linux-386.tar.gz
# echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc

sudo apt-get install -y postgresql libpq-dev
sudo su - postgres -c 'createuser -s vagrant'
sudo rm /etc/postgresql/9.1/main/pg_hba.conf
sudo cp /vagrant/install/pg_hba.conf /etc/postgresql/9.1/main/pg_hba.conf
sudo chown postgres:postgres /etc/postgresql/9.1/main/pg_hba.conf
sudo service postgresql restart
sudo su - postgres -c 'psql < /vagrant/install/pg_encoding_fix.sql'
sudo -u postgres createdb vagrant
