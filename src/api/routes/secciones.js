const {
  getSecciones,
  getSeccionById,
  postSeccion,
  putSeccion,
  deleteSeccion
} = require('../controllers/secciones')

const seccionesRouter = require('express').Router()

seccionesRouter.get('/:id', getSeccionById)
seccionesRouter.get('/', getSecciones)
seccionesRouter.post('/', postSeccion)
seccionesRouter.put('/:id', putSeccion)
seccionesRouter.delete('/:id', deleteSeccion)

module.exports = seccionesRouter
