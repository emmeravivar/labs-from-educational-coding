const mongoose = require('mongoose');

//Conectar nuestra BBDD
const connectBD = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URI
    );
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB conecta en: ${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1); // normalmente node acaba los procesos con 0.Forzar proceso termine
  }
};

module.exports = connectBD;