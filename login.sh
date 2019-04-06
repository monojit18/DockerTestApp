#!/bin/bash

clear

docker login --username=workshopregistry workshopregistry.azurecr.io

kubectl create secret docker-registry workshopregcred \
--docker-server=workshopregistry.azurecr.io \
--docker-username=workshopregistry \
--docker-password=3f0pv9ymAE9xeD6IpHnOZ85mo6Wys2=K