FROM node:carbon-alpine
WORKDIR /app
ADD . /app
RUN npm install && npm run build:lib && npm run build:dist && npm run build:css