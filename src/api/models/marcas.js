const mongoose = require('mongoose')

const marcaSChema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: {
      type: String,
      required: true,
      enum: ['deportes', 'aventura', 'casual', 'lujosas']
    }
  },
  {
    timestamps: true,
    collection: 'marcas'
  }
)

const Marca = mongoose.model('marcas', marcaSChema, 'marcas')

module.exports = Marca
