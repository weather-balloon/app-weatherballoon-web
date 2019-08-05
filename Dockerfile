FROM node:8-alpine as builder

RUN mkdir /tmp/build

COPY site/ /tmp/build

WORKDIR /tmp/build

RUN npm install

RUN npm run build

FROM nginx:1-alpine

COPY --from=builder /tmp/build/build /usr/share/nginx/html/
