import { Router } from "express";

const vendedor = Router();

vendedor.get('/',(req, resp) =>{
    resp.status(200).json({message:"dentro de "})
})

vendedor.post('/',(req,resp) => resp.send("Actualizando "))

vendedor.get('/:id',async(req,resp) => {
    try{
        const{ven} = await getVendedorById(req);
        resp.status(200).json(ven.dataValues)
    }catch(error){
        resp.json(error)
    }
})

vendedor.put('/:id',(req,resp) => resp.send("Poniendo "))

vendedor.delete('/:id',(req,resp) => resp.send("Borrando "))

export default vendedor