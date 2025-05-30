# API REST de Libros en Node.js con Express

Este proyecto es un servicio web RESTful desarrollado con Node.js y Express para gestionar una colección de libros. Permite crear, leer, actualizar y eliminar libros, además de filtrar libros por autor.

---

## URLs base para consumir la API

La API está desplegada y accesible desde:

http://3.133.95.14:3000


Los endpoints disponibles son:

| Método | Endpoint                         | Descripción                   |
|--------|---------------------------------|-------------------------------|
| GET    | `/libros`                      | Obtener todos los libros       |
| GET    | `/libros?autor=<nombre>`       | Filtrar libros por autor       |
| GET    | `/libros/:id`                  | Obtener libro por ID           |
| POST   | `/libros`                      | Crear un nuevo libro           |
| PUT    | `/libros/:id`                  | Actualizar libro por ID        |
| DELETE | `/libros/:id`                  | Eliminar libro por ID          |

---

## Explicación detallada de los endpoints principales

### GET /libros

**Qué hace:**  
Devuelve una lista con todos los libros almacenados en la aplicación.

**Uso:**  
- Si no se envía ningún parámetro, devuelve todos los libros.  
- Si se pasa el parámetro `autor`, devuelve solo los libros cuyo autor contenga la cadena buscada (la búsqueda no distingue mayúsculas o minúsculas).

**Ejemplo sin filtro:**

GET http://3.133.95.14:3000/libros


Respuesta:

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

Ejemplo con filtro por autor:
GET http://3.133.95.14:3000/libros?autor=Gabriel

Respuesta (si hay coincidencias):
[
  {
    "id": 1,
    "titulo": "Cien Años de Soledad",
    "autor": "Gabriel García Márquez"
  }
]

Respuesta (si no hay coincidencias):
{
  "mensaje": "No se encontraron libros del autor \"Gabriel\""
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
