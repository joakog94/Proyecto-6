const Seccion = require('../models/secciones')

const getSecciones = async (req, res, next) => {
  try {
    const secciones = await Seccion.find().populate('marcas')
    return res.status(200).json(secciones)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

const getSeccionById = async (req, res, next) => {
  try {
    const { id } = req.params
    const seccion = await Seccion.findById(id).populate('marcas')
    return res.status(200).json(seccion)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

const postSeccion = async (req, res, next) => {
  try {
    // Verificar si req.body.marcas existe
    if (req.body.marcas && Array.isArray(req.body.marcas)) {
      // Eliminar duplicados del array de marcas
      req.body.marcas = Array.from(
        new Set(req.body.marcas.map((id) => id.toString()))
      )
    }
    const newSeccion = new Seccion(req.body)
    const seccionSaved = await newSeccion.save()
    return res.status(201).json(seccionSaved)
  } catch (error) {
    return res.status(404).json('Error en la petición de posteo')
  }
}

const putSeccion = async (req, res, next) => {
  try {
    const { id } = req.params
    if (req.body.marcas && Array.isArray(req.body.marcas)) {
      // Eliminar duplicados del array de marcas
      req.body.marcas = Array.from(
        new Set(req.body.marcas.map((id) => id.toString()))
      )
    }

    const newSeccion = new Seccion(req.body)
    newSeccion._id = id

    const seccionUpdated = await Seccion.findByIdAndUpdate(id, newSeccion, {
      new: true
    })
    return res.status(200).json(seccionUpdated)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

const deleteSeccion = async (req, res, next) => {
  try {
    const { id } = req.params
    const seccionDeleted = await Seccion.findByIdAndDelete(id)
    return res.status(200).json(seccionDeleted)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

module.exports = {
  getSecciones,
  getSeccionById,
  postSeccion,
  putSeccion,
  deleteSeccion
}
