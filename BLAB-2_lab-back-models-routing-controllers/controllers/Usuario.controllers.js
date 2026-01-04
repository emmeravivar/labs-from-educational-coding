const usuarios = (req, res) => {
	res.json({msg: "Desde API/USUARIOS"})
} 

const crearUsuario = (req, res) => {
	res.json({msg: "Creando Usuario"})
} 

export {usuarios, crearUsuario}