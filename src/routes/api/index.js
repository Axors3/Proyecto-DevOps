import { Router } from "express";
import usuario from '../usuario.js'
const uadyfonApi = Router()

//ruta principal
uadyfonApi.get('/',(req, resp) => {
    //code here
    resp.status(200).json({message:"Dentro de la api"})
})

uadyfonApi.use('/usuarios', usuario)



export default uadyfonApi