Claro, aquí tienes un README completo en un solo bloque, listo para pegar:

markdown
Copiar
Editar
# API REST de Libros en Node.js con Express

Este proyecto es un Web Service RESTful para gestionar libros con operaciones CRUD y filtrado por autor.

## Descripción de los endpoints

### GET /
Mensaje de bienvenida.

**Respuesta:**
API REST de libros en Node.js con Express

yaml
Copiar
Editar

---

### GET /libros
Obtiene todos los libros.

**Respuesta ejemplo:**
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
GET /libros?autor=nombre
Filtra libros por autor (búsqueda parcial, sin distinción de mayúsculas).

Ejemplo request:

bash
Copiar
Editar
GET /libros?autor=Gabriel
Respuesta si hay coincidencias:

json
Copiar
Editar
[
  {
    "id": 1,
    "titulo": "Cien Años de Soledad",
    "autor": "Gabriel García Márquez"
  }
]
Respuesta si no hay coincidencias:

json
Copiar
Editar
{
  "mensaje": "No se encontraron libros del autor \"Gabriel\""
}
GET /libros/:id
Obtiene un libro por su ID.

Ejemplo request:

bash
Copiar
Editar
GET /libros/1
Respuesta:

json
Copiar
Editar
{
  "id": 1,
  "titulo": "Cien Años de Soledad",
  "autor": "Gabriel García Márquez"
}
Respuesta si no existe el libro:

json
Copiar
Editar
{
  "mensaje": "Libro no encontrado"
}
POST /libros
Crea un libro nuevo.

Ejemplo request:

json
Copiar
Editar
{
  "titulo": "Rayuela",
  "autor": "Julio Cortázar"
}
Respuesta:

json
Copiar
Editar
{
  "id": 3,
  "titulo": "Rayuela",
  "autor": "Julio Cortázar"
}
PUT /libros/:id
Actualiza un libro existente.

Ejemplo request:

json
Copiar
Editar
{
  "titulo": "Rayuela (Edición Revisada)",
  "autor": "Julio Cortázar"
}
Respuesta:

json
Copiar
Editar
{
  "id": 3,
  "titulo": "Rayuela (Edición Revisada)",
  "autor": "Julio Cortázar"
}
Respuesta si no existe el libro:

json
Copiar
Editar
{
  "mensaje": "No se puede actualizar: libro no encontrado"
}
DELETE /libros/:id
Elimina un libro por ID.

Ejemplo request:

bash
Copiar
Editar
DELETE /libros/3
Respuesta:

json
Copiar
Editar
{
  "mensaje": "Libro eliminado correctamente",
  "libro": {
    "id": 3,
    "titulo": "Rayuela (Edición Revisada)",
    "autor": "Julio Cortázar"
  }
}
Respuesta si no existe el libro:

json
Copiar
Editar
{
  "mensaje": "No se puede eliminar: libro no encontrado"
}


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
