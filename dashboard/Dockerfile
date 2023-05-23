# Utilisez une image de base contenant Node.js 16
FROM node:16-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers de package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie le reste des fichiers du projet
COPY . /var/www

# Construit l'application Next.js pour la production
RUN npm run build

# Expose le port 3000 pour les requêtes HTTP
EXPOSE 3000

# Démarre l'application Next.js
CMD ["npm", "start"]
