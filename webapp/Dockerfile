#
# Following guide https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
#
FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g
RUN apk add --no-cache mysql-client


COPY . .
RUN node node_modules/eslint/bin/eslint.js . --ext js


EXPOSE 8080

CMD sleep 5s && mysql -prootable -h database mice < create-table.sql && npm start

