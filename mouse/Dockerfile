# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install -g #--silent


COPY . .
RUN node node_modules/eslint/bin/eslint.js . --ext js --ext jsx

# start app
CMD ["npm", "start"]