FROM node:lts-alpine as builder

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./ ./
RUN npm run build

#-------------------------
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html/composition-api-tailwindcss-sample-1
RUN mv /usr/share/nginx/html/css /usr/share/nginx/html/composition-api-tailwindcss-sample-1
RUN mv /usr/share/nginx/html/js /usr/share/nginx/html/composition-api-tailwindcss-sample-1
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
