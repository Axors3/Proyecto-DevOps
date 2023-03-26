import { Router } from "express";
import cliente from "../cliente.js";
import plan from "../plan.js";
import usuario from '../usuario.js'
const uadyfonApi = Router()

//ruta principal
uadyfonApi.get('/',(req, resp) => {
    //code here
    resp.status(200).json({message:"Dentro de la api"})
})

uadyfonApi.use('/usuarios', usuario)
uadyfonApi.use('/clientes',cliente)
uadyfonApi.use('/planes',plan)

export default uadyfonApi