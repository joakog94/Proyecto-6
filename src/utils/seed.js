const mongoose = require('mongoose')
const Marca = require('../api/models/marcas')
const marcas = require('../data/marcas')

const lanzarSemilla = async () => {
  try {
    mongoose.connect(
      'mongodb+srv://gomezjoachim94:f3H3Cv6VzC7K70tU@cluster0.kbh51.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    await Marca.collection.drop()
    console.log('marcas eliminadas')
    await Marca.insertMany(marcas)
    console.log('marcas introducidas')
    await mongoose.disconnect()
  } catch (error) {
    console.log('Error en lanzar semilla')
  }
}

lanzarSemilla()
