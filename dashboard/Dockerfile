# Étape de construction
FROM node:16-alpine AS build

WORKDIR /app

# Copie des fichiers de package.json et yarn.lock
COPY package*.json yarn.lock ./

# Installation des dépendances avec Yarn
RUN yarn install

# Copie du code source de l'application
COPY . /var/www

# Construction de l'application
RUN yarn build

# Étape de production
FROM node:16-alpine

WORKDIR /app

# Copie des fichiers de package.json et yarn.lock
COPY package*.json yarn.lock ./

# Installation des dépendances en mode production avec Yarn
RUN yarn install --production

# Copie des fichiers de build de l'étape de construction
COPY --from=build /app/.next ./.next

# Exposition du port
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["yarn", "start"]
