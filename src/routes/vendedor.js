import { Router } from "express";
import vendedorController from '../controllers/vendedorController.js'

const vendedor = Router();
const {
    getVendedorById,
    createVendedor,
    getVendedores,
    updateVendedor
    } = vendedorController()

//Get all
vendedor.get('/',async(req, resp) =>{
    try{
        const {vens} = await getVendedores();
        resp.status(200).json(vens)
    }catch(error){
        resp.json(error)
    }

})

//Post
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

//Get by id
vendedor.get('/:id',async(req,resp) => {
    try{
        const{ven} = await getVendedorById(req);
        resp.status(200).json(ven.dataValues)
    }catch(error){
        resp.json(error)
    }
})

//Put
vendedor.put('/:id',async(req,resp) => {
    try{
        const{ven} = await updateVendedor(req);
        await ven.save();
        resp.status(200).json(ven.dataValues);
    } catch(error){
        resp.json(error)
    }
})

vendedor.delete('/:id',(req,resp) => resp.send("Borrando "))

export default vendedor