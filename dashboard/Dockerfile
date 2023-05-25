# Étape de construction
FROM node:16-alpine AS build

# Copie du code source de l'application
WORKDIR /app
COPY . /app

# Installation des dépendances avec npm
RUN npm install

# Construction de l'application
RUN npm run build

# Étape de production
FROM node:16-alpine

# Copie des fichiers de build de l'étape de construction
COPY --from=build /app/.next ./.next

# Exposition du port
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "start"]