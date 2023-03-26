import { Router } from "express";

const vendedor = Router();

vendedor.get('/',(req, resp) =>{
    resp.status(200).json({message:"dentro de "})
})

vendedor.post('/',(req,resp) => resp.send("Actualizando "))

vendedor.get('/:id',(req,resp) => resp.send("Obteniendo "))

vendedor.put('/:id',(req,resp) => resp.send("Poniendo "))

vendedor.delete('/:id',(req,resp) => resp.send("Borrando "))

export default vendedor