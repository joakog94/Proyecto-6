const Marca = require('../models/marcas')

const getMarcas = async (req, res, next) => {
  try {
    const marcas = await Marca.find()
    return res.status(200).json(marcas)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

const getMarcaById = async (req, res, next) => {
  try {
    const { id } = req.params
    const marca = await Marca.findById(id)
    return res.status(200).json(marca)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

const getMarcasByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params
    const marcas = await Marca.find({ categoria })
    return res.status(200).json(marcas)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

const getMarcasByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params
    const marcas = await Marca.find({ precio: { $lte: precio } })
    return res.status(200).json(marcas)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

const postMarca = async (req, res, next) => {
  try {
    const newMarca = new Marca(req.body)
    const marcaSaved = await newMarca.save()
    return res.status(201).json(marcaSaved)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

const putMarca = async (req, res, next) => {
  try {
    const { id } = req.params
    const newMarca = new Marca(req.body)
    newMarca._id = id
    const marcaUpdated = await Marca.findByIdAndUpdate(id, newMarca, {
      new: true
    })
    return res.status(200).json(marcaUpdated)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

const deleteMarca = async (req, res, next) => {
  try {
    const { id } = req.params
    const marcaDeleted = await Marca.findByIdAndDelete(id)
    return res.status(200).json(marcaDeleted)
  } catch (error) {
    return res.status(404).json('Error en la petición')
  }
}

module.exports = {
  getMarcas,
  getMarcaById,
  getMarcasByCategory,
  getMarcasByPrice,
  postMarca,
  putMarca,
  deleteMarca
}
