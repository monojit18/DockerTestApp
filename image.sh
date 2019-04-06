#!/bin/bash

docker build -t workshopregistry.azurecr.io/dockerworkshop:v$1 .

docker push workshopregistry.azurecr.io/dockerworkshop:v$1