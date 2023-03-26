import { Router } from "express";

const cliente = Router()

cliente.get('/',(req,resp) =>{
    resp.status(200).json({message:"dentro de cliente"})
})

cliente.post('/',(req,resp) => resp.send("Actualizando "))

cliente.get('/:id',(req,resp) => resp.send("Obteniendo "))

cliente.put('/:id',(req,resp) => resp.send("Poniendo "))

cliente.delete('/:id',(req,resp) => resp.send("Borrando "))

export default cliente