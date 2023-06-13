FROM nginx:latest

COPY ./conf.d/myaichat.conf /etc/nginx/conf.d
COPY ./conf.d/backend.conf /etc/nginx/conf.d
COPY ./conf.d/chatbot.conf /etc/nginx/conf.d
COPY ./conf.d/dashboard.conf /etc/nginx/conf.d

WORKDIR /app