const mongoose = require('mongoose')

const seccionSChema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    marcas: [{ type: mongoose.Types.ObjectId, ref: 'marcas', required: false }]
  },
  {
    timestamps: true,
    collection: 'seccciones'
  }
)

const Seccion = mongoose.model('secciones', seccionSChema, 'secciones')

module.exports = Seccion
