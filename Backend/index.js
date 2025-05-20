const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

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

// Ruta principal (GET)
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hola Mundo</title>
        <style>
          body {
            background-color: #f0f8ff;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #007acc;
          }
          p {
            font-size: 18px;
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>¡Hola Mundo con Node.js y Express!</h1>
        <p>Ruta GET ejecutada correctamente.</p>
      </body>
    </html>
  `);
});

// Ruta principal (POST)
app.post('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hola Mundo (POST)</title>
        <style>
          body {
            background-color: #fff0f5;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #d6336c;
          }
          p {
            font-size: 18px;
            color: #555;
          }
        </style>
      </head>
      <body>
        <h1>¡Hola Mundo con Node.js y Express (POST)!</h1>
        <p>Ruta POST ejecutada correctamente.</p>
      </body>
    </html>
  `);
});


