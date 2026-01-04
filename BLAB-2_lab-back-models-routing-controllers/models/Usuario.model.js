import mongoose from "mongoose";

//Diseñamos nuestro Schema
const usuarioSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        token: {
            type: String,
        },
        confirmado: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);


//Definir el schema
const Usuario = mongoose.model("Usuario", usuarioSchema)

export default Usuario;