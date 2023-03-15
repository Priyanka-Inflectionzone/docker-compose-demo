FROM node:16-alpine3.16

ADD . /app

RUN apk add bash

RUN apk add --update alpine-sdk

WORKDIR /app 

COPY package*.json /app/ 

RUN npm install 

COPY . /app/

EXPOSE 3000 

CMD ["node", "index.js"]