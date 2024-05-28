# Utiliser une image Node.js officielle comme base
FROM node:14

# Créer un répertoire de travail
WORKDIR /usr/app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Compiler le TypeScript en JavaScript
RUN npm run build

# Exposer le port de l'application
EXPOSE 3001

# Démarrer l'application
CMD [ "npm", "start" ]