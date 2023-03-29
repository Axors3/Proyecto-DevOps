import { Router } from "express";
import cliente from "../cliente.js";
import plan from "../plan.js";
import usuario from '../usuario.js'
import telefono from '../telefono.js'
import vendedor from "../vendedor.js";

const uadyfonApi = Router()

//ruta principal
uadyfonApi.get('/',(req, resp) => {
    //code here
    resp.status(200).json({message:"Dentro de la api uadyfon"})
})

//endpoints
uadyfonApi.use('/usuarios', usuario)
uadyfonApi.use('/clientes',cliente)
uadyfonApi.use('/planes',plan)
uadyfonApi.use('/telefonos',telefono)
uadyfonApi.use('/vendedores',vendedor)

export default uadyfonApi