import { Router } from "express";
import vendedorController from '../controllers/vendedorController.js'
import {verificarToken} from '../middlewares/index.js'
import {logger} from '../utils/logger.js'
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
        logger.log('info','Peticion para uadyfone en: ' + req.baseUrl)
        logger.log('debug','Metodo Obtener vendedores del tipo: '+ req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(vens))
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener Vendedores' + ' , body: ' + JSON.stringify(req.body))
    }

})

//Post
vendedor.post('/',verificarToken,async(req,resp) => {
    
    const {newVendedor} = createVendedor(req)

    try{
        await newVendedor.save()
        resp.status(201).json(newVendedor)
        logger.log('info','Peticion para uadyfone en:  ' + req.baseUrl)
        logger.log('debug','Metodo Crear vendedor del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ' + JSON.stringify(newVendedor) )
    } catch (error){
        resp.status(403).json(error)
        logger.log('error','No es posible crear vendedor' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Get by id
vendedor.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{ven} = await getVendedorById(req);
        resp.status(200).json(ven.dataValues)
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Obtener vendedor del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ' + JSON.stringify(ven.dataValues) )
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener vendedor' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Put
vendedor.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{ven} = await updateVendedor(req);
        await ven.save();
        resp.status(200).json(ven.dataValues)
        logger.log('info','Peticion para la api uadyfone en: ' + req.baseUrl)
        logger.log('debug','Metodo Actualizar vendedor del  tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(ven.dataValues) )
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible actualizar vendedor')
    }
})

//Delete
vendedor.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deleteVendedor(req);
        resp.status(204).json({message:"elemento borrado correctamente"})
        logger.log('info','Peticion para la api uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Eliminar vendedor del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body) + ' ,parametros: ' + JSON.stringify(req.params))
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible eliminar vendedor' + ' , body: ' + JSON.stringify(req.body))
    }
})

export default vendedor