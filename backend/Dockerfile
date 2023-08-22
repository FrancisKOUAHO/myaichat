# Utilisez une image de base avec PHP 8.2 adaptée à votre projet Laravel
FROM php:8.2-fpm

# Installation des dépendances nécessaires
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    zip \
    unzip \
    libpq-dev # Ajoutez cette ligne pour installer les dépendances PostgreSQL

# Installation de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Configuration du répertoire de travail
WORKDIR /app

# Installation des extensions PHP nécessaires
RUN docker-php-ext-configure gd --with-jpeg
RUN docker-php-ext-install gd pdo pdo_pgsql # Utilisez pdo_pgsql pour PostgreSQL

# Exposer le port 8000 pour PHP-FPM
EXPOSE 8000
