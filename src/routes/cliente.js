import { Router } from "express";
import clienteController from '../controllers/clienteController.js'
import {verificarToken} from '../middlewares/index.js'
import {logger} from '../utils/logger.js'
const cliente = Router();
const {
        getClienteById,
        createCliente,
        getClientes,
        updateCliente,
        deleteCliente} = clienteController()

//Get all
cliente.get('/',verificarToken,async(req,resp) =>{
    try{
        const {clis} = await getClientes();
        resp.status(200).json(clis)
        logger.log('info','Peticion para la api uadyfone en ruta clientes')
        logger.log('debug','Obtener clientes') 
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener clientes')
    } 
})

//Post
cliente.post('/',verificarToken,async(req,resp) => {

    const {newCliente} = createCliente(req)
    try{
        await newCliente.save()
        resp.status(201).json(newCliente)
        logger.log('info','Peticion para la api uadyfone en ruta clientes')
        logger.log('debug','Crear cliente') 
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible crear cliente')
    }
})

//Get by id
cliente.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{cli} = await getClienteById(req);
        resp.status(200).json(cli.dataValues)
        logger.log('info','Peticion para la api uadyfone en ruta clientes')
        logger.log('debug','Obtener cliente')
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener cliente')
    }
})

//Put
cliente.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{cli} = await updateCliente(req);
        await cli.save();
        resp.status(200).json(cli.dataValues)
        logger.log('info','Peticion para la api uadyfone en ruta clientes')
        logger.log('debug','Actualizar cliente')
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible actualizar cliente')
    }
})

//Delete
cliente.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deleteCliente(req);
        resp.status(204).json({message:"elemento borrado correctamente"})
        logger.log('info','Peticion para la api uadyfone en ruta clientes')
        logger.log('debug','Eliminar cliente')
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible eliminar cliente')
    }
})

export default cliente