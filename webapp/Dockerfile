#
# Following guide https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
#
FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g

COPY . .
RUN node node_modules/eslint/bin/eslint.js *.js


EXPOSE 8080
CMD ["npm", "start"]
