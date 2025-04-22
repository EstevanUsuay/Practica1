const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3030;

// Habilita CORS para todas las rutas y orígenes
app.use(cors());

// Ruta de prueba
app.get('/ping', (req, res) => {
  res.json({ message: 'Pong desde el servidor USUAY ESTEVAN' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
