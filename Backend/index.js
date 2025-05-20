const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3030;

// Habilita CORS para todas las rutas y orígenes
app.use(cors());
app.use(express.json()); // Permite recibir JSON en POST

// Ruta de prueba
app.get('/ping', (req, res) => {
  res.json({ message: 'Pong desde el servidor - USUAY ESTEVAN' });
});

// Ruta de prueba (POST)
app.post('/ping', (req, res) => {
  res.json({ message: 'Pong desde el servidor - USUAY ESTEVAN' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola Mundo con Node.js y Express!');
});

app.post('/', (req, res) => {
    res.send('¡Hola Mundo con Node.js y Express (POST)!');
});

