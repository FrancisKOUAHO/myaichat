# Utiliser l'image de base PostgreSQL
FROM postgres:latest

# Copier les fichiers SQL d'initialisation dans le conteneur
COPY init.sql /docker-entrypoint-initdb.d/

# Exposer le port par défaut de PostgreSQL
EXPOSE 5432
