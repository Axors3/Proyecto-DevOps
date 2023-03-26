import { Router } from "express";

const telefono = Router();

telefono.get('/',(req, resp) =>{
    resp.status(200).json({message:"dentro de telefonos"})
})

telefono.get('/telefonos/:id',(req,res) => res.send("Obteniendo telefonos"))

telefono.post('/telefonos',(req,res) => res.send("Actualizando telefonos"))

telefono.put('/telefonos',(req,res) => res.send("Poniendo telefonos"))

telefono.delete('/telefonos',(req,res) => res.send("Borrando telefonos"))

export default telefono