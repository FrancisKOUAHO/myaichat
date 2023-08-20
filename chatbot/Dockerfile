# Utiliser l'image Node.js Alpine
FROM node:18-alpine

# Définir la variable d'environnement PORT
ENV PORT 3031

# Créer le répertoire de l'application
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copier les fichiers de dépendances
COPY package.json yarn.lock /usr/src/app/
RUN yarn install

# Copier les fichiers sources
COPY . /usr/src/app

# Construire l'application
RUN yarn build

# Exposer le port 3000
EXPOSE 3031

# Utilisation de CMD pour démarrer l'application
# Si la variable NODE_ENV est définie à "development", lancer la commande "yarn dev"
# Sinon, lancer la commande "yarn start" pour le mode production
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then yarn dev; else yarn start; fi"]
