FROM node:alpine
WORKDIR /usr/app
COPY /package.json .
RUN npm install
COPY . .

FROM nginx
COPY --from=0 usr/app/index.html ./usr/share/nginx/html