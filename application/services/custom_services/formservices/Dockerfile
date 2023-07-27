FROM node:20.2-alpine
COPY . /formservices
WORKDIR /formservices
RUN npm install
RUN npm i -g ts-node
CMD npm run prod