FROM node:8

# Create app directory
WORKDIR /Users/monojitdattams/Projects/AnotherDockerApp

COPY package*.json /Users/monojitdattams/Projects/AnotherDockerApp/

RUN npm install --unsafe-perm

COPY . /Users/monojitdattams/Projects/AnotherDockerApp/

EXPOSE 7004

CMD npm start