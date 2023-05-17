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
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Obtener clientes del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ' + JSON.stringify(clis) )
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener clientes' + ' , body: ' + JSON.stringify(req.body))
    } 
})

//Post
cliente.post('/',verificarToken,async(req,resp) => {

    const {newCliente} = createCliente(req)
    try{
        await newCliente.save()
        resp.status(201).json(newCliente)
        logger.log('info','Peticion para uadyfone en:  ' + req.baseUrl)
        logger.log('debug','Metodo Crear cliente del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(newCliente) )
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible crear cliente' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Get by id
cliente.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{cli} = await getClienteById(req);
        resp.status(200).json(cli.dataValues)
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Obtener cliente del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ' + JSON.stringify(cli.dataValues) )
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener cliente' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Put
cliente.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{cli} = await updateCliente(req);
        await cli.save();
        resp.status(200).json(cli.dataValues)
        logger.log('info','Peticion para la api uadyfone en: ' + req.baseUrl)
        logger.log('debug','Metodo Actualizar cliente del  tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(cli.dataValues) ) 
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible actualizar cliente' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Delete
cliente.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deleteCliente(req);
        resp.status(204).json({message:"elemento borrado correctamente"})
        logger.log('info','Peticion para la api uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Eliminar cliente del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body) + ' ,parametros: ' + JSON.stringify(req.params))
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible eliminar cliente' + ' , body: ' + JSON.stringify(req.body))
    }
})

export default cliente