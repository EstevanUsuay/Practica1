import { Hono } from 'hono'
import { Greet } from './greet.mariadb.js'
import type { Param } from './greet.mariadb.js'

const greet = new Hono()

// Obtener todos los saludos
greet.get('/regards', async (c) => c.json(
  await Greet.findAll()
))

// Obtener saludo por ID
greet.get('/greet/:id', async (c) => c.json(
  await Greet.findById(Number(c.req.param('id')))
))

// Crear nuevo saludo
greet.post('/greet', async (c) => {
  const param = await c.req.json()
  const result = await Greet.create(param as Param)
  return c.json(result, 201)
})

// Eliminar saludo por ID
greet.delete('/greet/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const deleted = await Greet.delete(id)
  return deleted
    ? c.text(`Registro con id ${id} eliminado`, 200)
    : c.text(`No se encontró el id ${id}`, 404)
})

// Actualizar saludo por ID
greet.put('/greet/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const param = await c.req.json()
  const updated = await Greet.update(id, param as Param)
  return updated
    ? c.text(`Registro con id ${id} actualizado`, 200)
    : c.text(`No se encontró el id ${id}`, 404)
})

export default greet
