import { Router } from "express";
import clienteController from '../controllers/clienteController.js'
import {verificarToken} from '../middlewares/index.js'

const cliente = Router();
const {
        getClienteById,
        createCliente,
        getClientes,
        updateCliente,
        deleteCliente} = clienteController()

import {logger} from '../utils/logger.js'
//Get all
cliente.get('/',verificarToken,async(req,resp) =>{
    try{
        const {clis} = await getClientes();
        resp.status(200).json(clis)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Metodo: Obtener todos los clientes, Header: ${req.headers}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(clis)}`) 
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','Error encontrando clientes')
    } 
})

//Post
cliente.post('/',verificarToken,async(req,resp) => {

    const {newCliente} = createCliente(req)
    try{
        await newCliente.save()
        resp.status(201).json(newCliente)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Nuevo cliente, Header: ${req.headers}`)
        logger.log('debug',`Nuevo cliente, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(201).json(newCliente)}`)
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','Error creando cliente')
    }
})

//Get by id
cliente.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{cli} = await getClienteById(req);
        resp.status(200).json(cli.dataValues)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Obtener cliente, Header: ${req.headers}`)
        logger.log('debug',`Obtener cliente, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(cli.dataValues)}`)
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','Error obteniendo cliente')
    }
})

//Put
cliente.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{cli} = await updateCliente(req);
        await cli.save();
        resp.status(200).json(cli.dataValues);
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Actualizar cliente, Header: ${req.headers}`)
        logger.log('debug',`Actualizar cliente, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(cli.dataValues)}`)
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','Error actualizando cliente')
    }
})

//Delete
cliente.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deleteCliente(req);
        resp.status(204).json({message:"elemento borrado correctamente"});
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Eliminar cliente, Header: ${req.headers}`)
        logger.log('debug',`Eliminar cliente, Body: ${req.body}`)
        logger.log('debug',`elemento borrado correctamente`)
    }catch(error){
        resp.status(403).json(error);
        logger.log('error','Error eliminando cliente')
    }
})

export default cliente