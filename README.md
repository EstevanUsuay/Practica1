
# 📚 API REST de Libros en Node.js con Express

Este proyecto es un servicio web RESTful desarrollado con **Node.js** y **Express** para gestionar una colección de libros. Permite **crear, leer, actualizar y eliminar** libros, además de **filtrar por autor**.

---

## 🌐 URL Base para Consumir la API

La API está desplegada y accesible desde:

**http://3.133.95.14:3000**

---

## 🔧 Endpoints Disponibles

| Método | Endpoint                      | Descripción                        |
|--------|-------------------------------|------------------------------------|
| GET    | `/libros`                     | Obtener todos los libros           |
| GET    | `/libros?autor=<nombre>`      | Filtrar libros por autor           |
| GET    | `/libros/:id`                 | Obtener libro por ID               |
| POST   | `/libros`                     | Crear un nuevo libro               |
| PUT    | `/libros/:id`                 | Actualizar libro por ID            |
| DELETE | `/libros/:id`                 | Eliminar libro por ID              |

---

## 📘 Explicación Detallada de Endpoints

### ➤ GET `/libros`

**Descripción:**  
Devuelve una lista con todos los libros. Si se incluye el parámetro `autor`, filtra los libros cuyo autor coincida (búsqueda sin distinción entre mayúsculas/minúsculas).

**Ejemplos:**

- Sin filtro:  
  `GET http://3.133.95.14:3000/libros`

```json
[
  {
    "id": 1,
    "titulo": "Cien Años de Soledad",
    "autor": "Gabriel García Márquez"
  },
  {
    "id": 2,
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes"
  }
]
```

- Con filtro:  
  `GET http://3.133.95.14:3000/libros?autor=Gabriel`

```json
[
  {
    "id": 1,
    "titulo": "Cien Años de Soledad",
    "autor": "Gabriel García Márquez"
  }
]
```

Si no hay coincidencias:

```json
{
  "mensaje": "No se encontraron libros del autor \"Gabriel\""
}
```

---

### ➤ GET `/libros/:id`

**Descripción:**  
Devuelve un libro específico por su ID.

**Ejemplo:**
`GET http://3.133.95.14:3000/libros/1`

```json
{
  "id": 1,
  "titulo": "Cien Años de Soledad",
  "autor": "Gabriel García Márquez"
}
```

Si el libro no existe:

```json
{
  "mensaje": "Libro no encontrado"
}
```

---

### ➤ POST `/libros`

**Descripción:**  
Crea un nuevo libro. Se debe enviar un JSON con las propiedades `titulo` y `autor`.

**Cuerpo de la solicitud:**

```json
{
  "titulo": "Rayuela",
  "autor": "Julio Cortázar"
}
```

**Respuesta:**

```json
{
  "id": 3,
  "titulo": "Rayuela",
  "autor": "Julio Cortázar"
}
```

**Validaciones:**

- Si falta `titulo` o `autor`, responde con error 400.

---

### ➤ PUT `/libros/:id`

**Descripción:**  
Actualiza un libro existente por ID.

**Cuerpo de la solicitud:**

```json
{
  "titulo": "Rayuela (Edición Revisada)",
  "autor": "Julio Cortázar"
}
```

**Respuesta:**

```json
{
  "id": 3,
  "titulo": "Rayuela (Edición Revisada)",
  "autor": "Julio Cortázar"
}
```

**Validaciones:**

- Si el libro no existe: error 404  
- Si falta `titulo` o `autor`: error 400

---

### ➤ DELETE `/libros/:id`

**Descripción:**  
Elimina un libro existente por ID.

**Ejemplo:**
`DELETE http://3.133.95.14:3000/libros/3`

**Respuesta:**

```json
{
  "mensaje": "Libro eliminado correctamente",
  "libro": {
    "id": 3,
    "titulo": "Rayuela (Edición Revisada)",
    "autor": "Julio Cortázar"
  }
}
```

Si no existe:

```json
{
  "mensaje": "No se puede eliminar: libro no encontrado"
}
```

---

## 🐳 Docker: Instalación y Despliegue

### 1️⃣ Instalación de Docker en Ubuntu

```bash
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
sudo apt install docker-ce
sudo systemctl status docker
```

### 2️⃣ Explicación del `Dockerfile`

```dockerfile
FROM node:20.10.0-alpine3.18
```
Utiliza una versión ligera y rápida de Node.js sobre Alpine Linux.

```dockerfile
WORKDIR /app
```
Establece el directorio de trabajo dentro del contenedor.

```dockerfile
COPY package.json .
RUN npm i
```
Copia el archivo `package.json` y ejecuta `npm install` para instalar dependencias.

```dockerfile
COPY index.js .
```
Copia el archivo principal del servidor.

```dockerfile
EXPOSE 3000
```
Informa a Docker que la aplicación escucha en el puerto 3000.

```dockerfile
CMD ["node", "index.js"]
```
Comando que ejecuta el servidor al iniciar el contenedor.

### 3️⃣ Crear Imagen Docker

```bash
sudo docker build -t node-hello .
```
- `build`: construye una imagen.  
- `-t node-hello`: asigna nombre a la imagen.  
- `.`: indica que use el Dockerfile del directorio actual.

### 4️⃣ Ejecutar Contenedor

```bash
sudo docker run -d -p 3000:3000 --name hello --restart on-failure node-hello:latest
```
- `-d`: ejecuta en segundo plano.  
- `-p 3000:3000`: mapea el puerto del host al contenedor.  
- `--name hello`: nombra el contenedor.  
- `--restart on-failure`: reinicia el contenedor si falla.  
- `node-hello:latest`: usa la imagen recién creada.

---






# PRÁCTICA 1 – HERRAMIENTAS DE DESARROLLO DE SOFTWARE

# npm – Gestor de paquetes de Node.js

    - npm es el sistema de gestión de paquetes de Node.js. 
    
    - Permite instalar, compartir y administrar dependencias de proyectos JavaScript.

    - El comando npm init crea un nuevo proyecto de Node.js. Al ejecutarlo, solicita información como el nombre del proyecto, versión, descripción, punto de entrada, etc.

Creación del archivo principal

    - Crear un archivo llamado index.js.

    - Escribir en ese archivo el código que se desea ejecutar.

    - Para ejecutar el proyecto, usar el comando node index.js.

# Express.js

    El comando npm i express instala el framework Express. Express permite crear servidores y gestionar rutas de manera sencilla en aplicaciones Node.js.

# Frontend – Proyecto con Vite

Para crear un nuevo proyecto con Vite, usar el comando npm create vite@latest.

El sistema pedirá los siguientes datos:

    - Nombre del proyecto (Project name)

    - Seleccionar un framework (por ejemplo, Vanilla)

    - Seleccionar una variante (por ejemplo, JavaScript)

Una vez finalizada la configuración:

    - Acceder al directorio del proyecto con cd vite-project

    - Instalar las dependencias con npm install

    - Ejecutar el servidor de desarrollo con  npm run dev
