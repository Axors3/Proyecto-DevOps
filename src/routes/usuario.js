import { Router } from "express";

const usuario = Router()

usuario.get('/',(req,resp) =>{
    resp.status(200).json({message:"dentro de usuario"})
})

usuario.get('/usuarios/:id',(req,res) => res.send("Obteniendo usuarios"))

usuario.post('/usuarios',(req,res) => res.send("Actualizando usuarios"))

usuario.put('/usuarios',(req,res) => res.send("Poniendo usuarios"))

usuario.delete('/usuarios',(req,res) => res.send("Borrando usuarios"))

export default usuario