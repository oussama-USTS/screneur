# Utiliser Node.js comme image de base
FROM node:18-alpine

# Installer les dépendances nécessaires incluant curl pour le healthcheck
RUN apk add --no-cache python3 make g++ git curl

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances avec --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port
EXPOSE 5173

# Définir les variables d'environnement
ENV NODE_ENV=production
ENV VITE_HOST=0.0.0.0

# Commande pour démarrer l'application
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]