const {
  getMarcas,
  getMarcaById,
  getMarcasByCategory,
  getMarcasByPrice,
  postMarca,
  putMarca,
  deleteMarca
} = require('../controllers/marcas')

const marcasRouter = require('express').Router()

marcasRouter.get('/precio/:precio', getMarcasByPrice)
marcasRouter.get('/categoria/:categoria', getMarcasByCategory)
marcasRouter.get('/:id', getMarcaById)
marcasRouter.get('/', getMarcas)
marcasRouter.post('/', postMarca)
marcasRouter.put('/:id', putMarca)
marcasRouter.delete('/:id', deleteMarca)

module.exports = marcasRouter
