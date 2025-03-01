const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conectado a la BBDD ✅')
  } catch (error) {
    console.log('Error conectado a la BBDD ❌')
  }
}

module.exports = { connectDB }
