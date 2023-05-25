# Utiliser l'image de PHP 8.1 avec FPM
FROM php:8.1-fpm

# Installer les dépendances système nécessaires
RUN apt-get update && apt-get install -y \
    libonig-dev \
    libzip-dev \
    libpq-dev \
    zip \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Activer les extensions PHP requises
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl pdo_pgsql

# Installer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Définir le répertoire de travail
WORKDIR /var/www

# Copier les fichiers de l'application dans le conteneur
COPY . /var/www

# Installer la dépendance flysystem-local
RUN composer require league/flysystem-local

# Installer les dépendances PHP avec Composer
RUN composer install

# Installer Swagger pour Laravel
RUN composer require darkaonline/l5-swagger

# Publier les fichiers de configuration Swagger
RUN php artisan vendor:publish --provider="L5Swagger\L5SwaggerServiceProvider" --tag=config

# Générer la documentation Swagger
RUN php artisan l5-swagger:generate

# Installer Laravel Sanctum
RUN composer require laravel/sanctum

# Publier les fichiers de configuration de Sanctum
RUN php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# Exécuter les migrations de Sanctum
#RUN php artisan migrate

# Définir les permissions des fichiers et dossiers de l'application
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Exposer le port 9000 pour PHP-FPM
EXPOSE 9000

# Démarrer PHP-FPM
CMD ["php-fpm"]
