import { Router } from "express";

const usuario = Router()

usuario.get('/',(req,resp) =>{
    resp.status(200).json({message:"dentro de usuario"})
})


export default usuario