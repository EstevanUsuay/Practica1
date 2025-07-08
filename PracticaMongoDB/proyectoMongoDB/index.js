// index.js
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = 3000;

// Middleware para aceptar JSON en las peticiones POST / PUT
app.use(express.json());

// ► URI especial para que un contenedor Docker pueda llegar al MongoDB
//   que corre en tu PC (o en otro contenedor con el puerto 27017 mapeado).
const uri = 'mongodb://host.docker.internal:27017';
const dbName = 'NodeMongo2';
const collectionName = 'productos2';

/* ────────────────────────────────────────────────
   GET /           →  DEMO completo (inserta, lee, actualiza)
   GET /productos  →  Lista todos los productos
   POST /productos →  Inserta un producto (JSON en body)
────────────────────────────────────────────────── */

// DEMO: inserta, lee, actualiza y devuelve todo en una sola llamada
app.get('/', async (_req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection(collectionName);

    // 1. Insertar
    const nuevoProducto = {
      nombre: 'Laptop Dell XPS 15 12',
      precio: 1200,
      categoria: 'Electrónica'
    };
    const { insertedId } = await col.insertOne(nuevoProducto);

    // 2. Leer todo
    const todos = await col.find({}).toArray();

    // 3. Buscar por ID
    const productoEncontrado = await col.findOne({ _id: insertedId });

    // 4. Buscar por categoría
    const electronica = await col.find({ categoria: 'Electrónica' }).toArray();

    // 5. Actualizar precio
    await col.updateOne({ _id: insertedId }, { $set: { precio: 1300 } });
    const productoActualizado = await col.findOne({ _id: insertedId });

    res.json({
      mensaje: '✅ DEMO ejecutada',
      insertado: productoEncontrado,
      actualizado: productoActualizado,
      productosElectronica: electronica,
      todosLosProductos: todos
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
});

// Obtener todos los productos
app.get('/productos', async (_req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const productos = await client
      .db(dbName)
      .collection(collectionName)
      .find({})
      .toArray();
    res.json(productos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
});

// Insertar un nuevo producto
app.post('/productos', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    const nuevoProducto = req.body; // requiere JSON: { nombre, precio, categoria }

    await client.connect();
    const resultado = await client
      .db(dbName)
      .collection(collectionName)
      .insertOne(nuevoProducto);

    res.status(201).json({
      mensaje: '🟢 Producto insertado',
      id: resultado.insertedId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API escuchando en http://localhost:${PORT}`);
});
