#!/bin/bash

echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.bash_profile
source /home/vagrant/.bash_profile

nvm install $1
nvm alias default $1
