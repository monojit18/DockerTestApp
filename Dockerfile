FROM node:8

# Environment varibales
ENV WORKDIR_PATH=/Users/monojitdattams/Projects/DockerWorkshopApp/

# Create app directory
WORKDIR ${WORKDIR_PATH}

COPY package*.json ${WORKDIR_PATH}

RUN npm install --unsafe-perm

COPY . ${WORKDIR_PATH}

EXPOSE 7005

CMD npm start