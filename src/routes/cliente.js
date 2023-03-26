import { Router } from "express";

const cliente = Router()

cliente.get('/',(req,resp) =>{
    resp.status(200).json({message:"dentro de cliente"})
})

cliente.get('/clientes/:id',(req,res) => res.send("Obteniendo clientes"))

cliente.post('/clientes',(req,res) => res.send("Actualizando clientes"))

cliente.put('/clientes',(req,res) => res.send("Poniendo clientes"))

cliente.delete('/clientes',(req,res) => res.send("Borrando clientes"))

export default cliente