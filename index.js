require('dotenv').config()
const { connectDB } = require('./src/config/DB')
const express = require('express')
const mongoose = require('mongoose')
const marcasRouter = require('./src/api/routes/marcas')
const seccionesRouter = require('./src/api/routes/secciones')

connectDB()
const app = express()
app.use(express.json())

app.use('/api/v1/marcas', marcasRouter)
app.use('/api/v1/secciones', seccionesRouter)

app.use('*', (req, res, next) => {
  res.status(404).json('Route not found')
})
app.listen(3000, () => {
  console.log('Servidor levantado en http://localhost:3000 🥳')
})
