# Étape de construction
FROM node:16-alpine AS build

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et yarn.lock pour installer les dépendances
COPY package*.json yarn.lock ./

# Installation des dépendances
RUN yarn install

# Copie de tous les fichiers du répertoire actuel vers le répertoire de travail
COPY . /app

# Construction de l'application
RUN yarn build

# Étape de production
FROM node:16-alpine

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et yarn.lock pour installer les dépendances en production
COPY package*.json yarn.lock ./

# Installation des dépendances en production
RUN yarn install --production

# Copie du répertoire .next depuis l'étape de construction vers le répertoire de travail
COPY --from=build /app/.next ./.next

# Exposition du port 3000 (ajuster si nécessaire)
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["yarn", "start"]
