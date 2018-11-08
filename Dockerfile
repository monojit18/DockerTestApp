FROM node:8

# Create app directory
WORKDIR /Users/monojitdattams/Projects/DockerApp

COPY package*.json /Users/monojitdattams/Projects/DockerApp/

RUN npm install --unsafe-perm

COPY . /Users/monojitdattams/Projects/DockerApp/

EXPOSE 7004

CMD npm start