import Usuario from '../models/Usuario.model.js'

const usuarios = (req, res) => {
	res.json({msg: "Desde API/USUARIOS"})
} 

const crearUsuario = async (req, res) => {
	try {
		//Crear el objeto y almacenarlo
		const usuario = new Usuario(req.body) //req.body es donde está almacenado en obj postman
		console.log(usuario)
		const usuarioEnviado = await usuario.save()
		res.json(usuarioEnviado)

	}
	catch (error) {
		console.log(error)
	}
} 

export {usuarios, crearUsuario}