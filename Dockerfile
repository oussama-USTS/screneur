# Build stage
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances avec --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copier le reste des fichiers de l'application
COPY . .

# Build l'application
RUN npm run build

# Production stage avec nginx
FROM nginx:alpine

# Copier les fichiers buildés depuis l'étape de build
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier la configuration nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"] 




