import { Router } from "express";
import clienteController from '../controllers/clienteController.js'

const cliente = Router();
const {
        getClienteById,
        createCliente,
        getClientes,
        updateCliente,
        deleteCliente} = clienteController()

//Get all
cliente.get('/',async(req,resp) =>{
    try{
        const {clis} = await getClientes();
        resp.status(200).json(clis)
    } catch(error){
        resp.json(error)
    } 
})

//Post
cliente.post('/',async(req,resp) => {

    const data = req.body;
    const {newCliente} = createCliente(data)
    try{
        await newCliente.save()
        resp.status(201).json(newCliente)
    }catch(error){
        resp.json(error)
    }
})

//Get by id
cliente.get('/:id',async(req,resp) => {
    try{
        const{cli} = await getClienteById(req);
        resp.status(200).json(cli.dataValues)
    }catch(error){
        resp.json(error)
    }
})

//Put
cliente.put('/:id',async(req,resp) => {
    try{
        const{cli} = await updateCliente(req);
        await cli.save();
        resp.status(200).json(cli.dataValues);
    } catch(error){
        resp.json(error)
    }
})

//Delete
cliente.delete('/:id',async(req,resp) => {
    try{
        await deleteCliente(req);
        resp.status(204).json({message:"elemento borrado correctamente"});
    }catch(error){
        resp.json(error);
    }
})

export default cliente