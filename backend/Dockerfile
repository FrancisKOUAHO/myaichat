FROM php:8.1-fpm

# Installe les dépendances nécessaires
RUN apt-get update \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Installe les dépendances zip et unzip
RUN apt-get update && apt-get install -y zip unzip

# Installe les dépendances de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Définit le répertoire de travail
WORKDIR /var/www

# Copie le code source de votre application Laravel
COPY . /var/www

# Installe les dépendances de votre application Laravel
RUN composer install --no-interaction --no-scripts

# Expose le port 9000 pour PHP-FPM
EXPOSE 9000

# Démarre PHP-FPM
CMD ["php-fpm"]
