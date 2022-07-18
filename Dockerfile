FROM node:16.16-alpine3.16
WORKDIR /app
COPY . ./
RUN npm install
EXPOSE 3000

