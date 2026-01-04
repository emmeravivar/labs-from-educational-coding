import express from "express"
import { usuarios, crearUsuario } from "../controllers/Usuario.controllers.js";
const router = express.Router()

router.get("/", usuarios)
router.post("/", crearUsuario)


export default router;