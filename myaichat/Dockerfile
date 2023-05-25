# Utilisez une image de base légère contenant un serveur web
FROM nginx:latest

# Copiez les fichiers HTML statiques dans le répertoire du serveur web
COPY . /usr/share/nginx/html

# Exposez le port 80 pour les requêtes HTTP
#EXPOSE 80

# Commande par défaut à exécuter lorsque le conteneur démarre
#CMD ["nginx", "-g", "daemon off;"]