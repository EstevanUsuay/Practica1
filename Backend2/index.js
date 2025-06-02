// Importar Express y configurar el servidor
const express = require('express');
const server = express();
const PORT = 3000;

// Middleware para habilitar el uso de JSON en las peticiones
server.use(express.json());

// Datos simulados: Lista de libros (mock de base de datos)
let libros = [
  { id: 1, titulo: 'Doraemon y la Máquina del Tiempo', autor: 'Fujiko F. Fujio' },
  { id: 2, titulo: 'Las Aventuras de Nobita', autor: 'Hiroshi Sato' },
  { id: 3, titulo: 'El Secreto del Bolsillo Mágico', autor: 'Keiko Tanaka' },
  { id: 4, titulo: 'Doraemon y el Mundo del Futuro', autor: 'Yuki Nakamura' },
  { id: 5, titulo: 'Viaje al Centro del Espacio con Doraemon', autor: 'Takeshi Yamamoto' },
  { id: 6, titulo: 'Doraemon contra los Dinosaurios', autor: 'Naoko Fujita' }
];

// Ruta raíz (mensaje de bienvenida)
server.get('/', (req, res) => {
  res.send('Bienvenido a la API REST de Libros basada en Doraemon 🚀');
});

// Crear un nuevo libro (POST)
server.post('/libros', (req, res) => {
  const { titulo, autor } = req.body;

  if (!titulo || !autor) {
    return res.status(400).json({
      error: 'Solicitud inválida. Debes proporcionar tanto el título como el autor del libro.'
    });
  }

  const nuevoLibro = {
    id: libros.length ? libros[libros.length - 1].id + 1 : 1,
    titulo,
    autor
  };

  libros.push(nuevoLibro);
  res.status(201).json(nuevoLibro);
});

// Obtener todos los libros o filtrar por autor (GET)
server.get('/libros', (req, res) => {
  const { autor } = req.query;

  if (autor) {
    const resultados = libros.filter(libro =>
      libro.autor.toLowerCase().includes(autor.toLowerCase())
    );

    if (resultados.length === 0) {
      return res.status(404).json({
        mensaje: `No se encontraron libros del autor que contenga: "${autor}".`
      });
    }

    return res.json(resultados);
  }

  res.json(libros);
});

// Obtener un libro por su ID (GET)
server.get('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const libro = libros.find(l => l.id === id);

  if (!libro) {
    return res.status(404).json({
      mensaje: `Libro con ID ${id} no encontrado. Verifica el número e inténtalo nuevamente.`
    });
  }

  res.json(libro);
});

// Actualizar un libro existente por ID (PUT)
server.put('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, autor } = req.body;
  const index = libros.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).json({
      mensaje: `No se puede actualizar. El libro con ID ${id} no existe.`
    });
  }

  if (!titulo || !autor) {
    return res.status(400).json({
      mensaje: 'Actualización incompleta. El título y el autor son campos obligatorios.'
    });
  }

  libros[index] = { id, titulo, autor };
  res.json(libros[index]);
});

// Eliminar un libro por ID (DELETE)
server.delete('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = libros.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).json({
      mensaje: `No se puede eliminar. El libro con ID ${id} no existe en el sistema.`
    });
  }

  const libroEliminado = libros.splice(index, 1);
  res.json({
    mensaje: 'Libro eliminado exitosamente.',
    libro: libroEliminado[0]
  });
});

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`🚀 Servidor activo en: http://localhost:${PORT}`);
});
