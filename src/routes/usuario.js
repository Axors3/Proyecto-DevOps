import { Router } from "express";

const usuario = Router()

usuario.get('/',(req,resp) =>{
    resp.status(200).json({message:"dentro de usuario"})
})

usuario.post('/',(req,resp) => resp.send("Actualizando"))

usuario.get('/:id',(req,resp) => resp.send("Obteniendo"))

usuario.put('/:id',(req,resp) => resp.send("Poniendo"))

usuario.delete('/:id',(req,resp) => resp.send("Borrando"))

export default usuario