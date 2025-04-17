# Utiliser Node.js comme image de base
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port
EXPOSE 5173

# Commande pour démarrer l'application
CMD ["npm", "run", "dev", "--", "--host"] 