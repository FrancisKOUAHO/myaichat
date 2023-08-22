# Stage 1: Install dependencies with composer
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

# Stage 2: Set up Nginx and PHP environment
FROM webdevops/php-nginx:8.2

ENV WEB_DOCUMENT_ROOT /app/public
ENV PHP_POST_MAX_SIZE 128M
ENV PHP_MEMORY_LIMIT 1024M
ENV PHP_UPLOAD_MAX_FILESIZE 50M
ENV FPM_PM_MAX_CHILDREN 100
ENV FPM_PM static

WORKDIR /app

COPY . .
COPY --from=vendor /app/vendor/ /app/vendor/

# Install the PostgreSQL PDO extension
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo_pgsql

RUN mkdir -p storage/framework/sessions  storage/framework/views storage/framework/cache
RUN chmod -R 777 storage bootstrap/cache
RUN chown -R application:application .

# Expose port 8000
EXPOSE 8000

# Set the environment variable to indicate whether it's development or production
# This can be passed in during the docker-compose configuration
ENV APP_ENV production  # Change to "local" for development if needed

# Run the application (you can adjust the command based on how you start your Laravel app)
CMD ["supervisord", "--nodaemon", "--configuration", "/etc/supervisor/supervisord.conf"]
