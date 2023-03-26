import { Router } from "express";

const plan = Router()

plan.get('/',(req,resp) =>{
    resp.status(200).json({message:"dentro de plan"})
})

plan.get('/planes/:id',(req,res) => res.send("Obteniendo planes"))

plan.post('/planes',(req,res) => res.send("Actualizando planes"))

plan.put('/planes',(req,res) => res.send("Poniendo planes"))

plan.delete('/planes',(req,res) => res.send("Borrando planes"))

export default plan