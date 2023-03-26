import { Router } from "express";

const plan = Router()

plan.get('/',(req,resp) =>{
    resp.status(200).json({message:"dentro de plan"})
})

plan.post('/',(req,resp) => resp.send("Actualizando "))

plan.get('/:id',(req,resp) => resp.send("Obteniendo "))

plan.put('/:id',(req,resp) => resp.send("Poniendo "))

plan.delete('/:id',(req,resp) => resp.send("Borrando "))

export default plan