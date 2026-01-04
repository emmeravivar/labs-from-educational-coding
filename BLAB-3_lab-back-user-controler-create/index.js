//Configuración del servidor
import express from "express"
import dotenv from "dotenv"
import { connectBD } from "./config/connectDb.js"
import usuariosRoutes from "./routes/Usuarios.routes.js"

const app = express()
//configurando leer JSON
app.use(express.json())

const port = process.env.PORT || 4000



//Configurando dorenv
dotenv.config(); // busca un archivo .env

//Conectando nuestra BBDD
connectBD()

//Routing
app.use("/api/usuarios", usuariosRoutes)


app.listen(port, () => {
    console.log('servidor corriendo en el puerto 4000')
})