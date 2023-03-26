import { Router } from "express";

const vendedor = Router();

vendedor.get('/',(req, resp) =>{
    resp.status(200).json({message:"dentro de vendedores"})
})

vendedor.get('/vendedores/:id',(req,res) => res.send("Obteniendo vendedores"))

vendedor.post('/vendedores',(req,res) => res.send("Actualizando vendedores"))

vendedor.put('/vendedores',(req,res) => res.send("Poniendo vendedores"))

vendedor.delete('/vendedores',(req,res) => res.send("Borrando vendedores"))

export default vendedor