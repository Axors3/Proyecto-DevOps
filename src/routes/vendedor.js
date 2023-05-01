import { Router } from "express";
import vendedorController from '../controllers/vendedorController.js'
import {verificarToken} from '../middlewares/index.js'
const vendedor = Router();
const {
        getVendedorById,
        createVendedor,
        getVendedores,
        updateVendedor,
        deleteVendedor} = vendedorController()

//Get all
vendedor.get('/',verificarToken,async(req, resp) =>{
    try{
        const {vens} = await getVendedores();
        resp.status(200).json(vens)
    }catch(error){
        resp.status(403).json(error)
    }

})

//Post
vendedor.post('/',verificarToken,async(req,resp) => {
    
    const {newVendedor} = createVendedor(req)

    try{
        await newVendedor.save()
        resp.status(201).json(newVendedor)
    } catch (error){
        resp.status(403).json(error)
    }
})

//Get by id
vendedor.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{ven} = await getVendedorById(req);
        resp.status(200).json(ven.dataValues)
    }catch(error){
        resp.status(403).json(error)
    }
})

//Put
vendedor.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{ven} = await updateVendedor(req);
        await ven.save();
        resp.status(200).json(ven.dataValues);
    } catch(error){
        resp.status(403).json(error)
    }
})

//Delete
vendedor.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deleteVendedor(req);
        resp.status(204).json({message:"elemento borrado correctamente"});
    }catch(error){
        resp.status(403).json(error);
    }
})

export default vendedor