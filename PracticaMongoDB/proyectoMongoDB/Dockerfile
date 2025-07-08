# Imagen base con Node 18 LTS
FROM node:18

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json, luego instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto para acceder desde fuera del contenedor
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
