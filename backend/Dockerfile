FROM composer:2.2.6 as vendor

COPY database/ database/
COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist \
    --optimize-autoloader

FROM webdevops/php-nginx:8.1-alpine

ENV WEB_DOCUMENT_ROOT /app/public
ENV PHP_POST_MAX_SIZE 128M
ENV PHP_MEMORY_LIMIT 1024M
ENV PHP_UPLOAD_MAX_FILESIZE 50M
ENV FPM_PM_MAX_CHILDREN 100
ENV FPM_PM static

WORKDIR /app

COPY . .
COPY --from=vendor /app/vendor/ /app/vendor/


RUN mkdir -p storage/framework/sessions  storage/framework/views storage/framework/cache
RUN chmod -R 777 storage bootstrap/cache
RUN chown -R application:application .
RUN php artisan l5-swagger:generate