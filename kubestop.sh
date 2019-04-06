#!/bin/bash

minikube stop

if [ $# -gt 0 ] && [ $1 == "del" ]
then
    rm -rf ~/.minikube
fi
