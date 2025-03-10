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

    // 1. Validar que "marcas" sea un array (si existe)
    if (req.body.marcas !== undefined && !Array.isArray(req.body.marcas)) {
      return res
        .status(400)
        .json({ error: "El campo 'marcas' debe ser un array" })
    }

    // 2. Obtener la sección actual desde la base de datos
    const oldSeccion = await Seccion.findById(id)

    // 3. Combinar marcas antiguas y nuevas, eliminando duplicados en el conjunto total
    const marcasUnicas = Array.from(
      new Set([
        ...oldSeccion.marcas.map((id) => id.toString()),
        ...req.body.marcas.map((id) => id.toString())
      ])
    )

    // 4. Actualizar solo el campo "marcas" sin afectar otros campos
    const seccionUpdated = await Seccion.findByIdAndUpdate(
      id,
      { $set: { marcas: marcasUnicas } },
      { new: true }
    ).populate('marcas')

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
