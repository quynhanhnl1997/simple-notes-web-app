FROM node:16.15-alpine

RUN apk update && \
    apk add --no-cache make gcc g++ python3

WORKDIR /home/app

COPY package*.json ./
RUN npm install -g typescript@4.7.4 && \
    npm install --only=production && \
    npm rebuild bcrypt --build-from-source && \
    apk del make gcc g++ python3
COPY ./dist ./dist


EXPOSE 3001

USER root
CMD ["node", "./dist/server.js"]