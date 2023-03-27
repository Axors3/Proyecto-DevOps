import { Router } from "express";
import vendedorController from '../controllers/vendedorController.js'

const vendedor = Router();
const {getVendedorById,createVendedor,getVendedores} = vendedorController()

vendedor.get('/',async(req, resp) =>{

    const {vens} = await getVendedores();
    resp.status(200).json(vens)
})

vendedor.post('/',async(req,resp) => {
    const data = req.body;
    const {newVendedor} = createVendedor(data)

    try{
        await newVendedor.save()
        resp.status(201).json(newVendedor)
    } catch (error){
        resp.json(error)
    }
})

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