# builder
FROM node:lts-alpine as builder

RUN apk update && apk upgrade && apk add --no-cache git yarn

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . /app

RUN yarn build

# application

FROM nginx:stable-alpine

WORKDIR /app

COPY --from=builder /app/build .
COPY --from=builder /app/docker/nginx/default.conf /etc/nginx/conf.d/default.conf
