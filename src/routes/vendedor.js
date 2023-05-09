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

import {logger} from '../utils/logger.js'
//Get all
vendedor.get('/',verificarToken,async(req, resp) =>{
    try{
        const {vens} = await getVendedores();
        resp.status(200).json(vens)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Metodo: Obtener todos los vendedores, Header: ${req.headers}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(vens)}`)
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','Error encontrando vendedores')
    }

})

//Post
vendedor.post('/',verificarToken,async(req,resp) => {
    
    const {newVendedor} = createVendedor(req)

    try{
        await newVendedor.save()
        resp.status(201).json(newVendedor)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Nuevo vendedor, Header: ${req.headers}`)
        logger.log('debug',`Nuevo vendedor, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(201).json(newVendedor)}`)
    } catch (error){
        resp.status(403).json(error)
        logger.log('error','Error creando vendedor')
    }
})

//Get by id
vendedor.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{ven} = await getVendedorById(req);
        resp.status(200).json(ven.dataValues)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Obtener vendedor por id, Header: ${req.headers}`)
        logger.log('debug',`Obtener vendedor por id, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(ven.dataValues)}`)
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','Error obteniendo vendedor')
    }
})

//Put
vendedor.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{ven} = await updateVendedor(req);
        await ven.save();
        resp.status(200).json(ven.dataValues);
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Actualizar vendedor por id, Header: ${req.headers}`)
        logger.log('debug',`Actualizar vendedor por id, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(ven.dataValues)}`)
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','Error actualizando vendedor')
    }
})

//Delete
vendedor.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deleteVendedor(req);
        resp.status(204).json({message:"elemento borrado correctamente"});
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Eliminar vendedor por id, Header: ${req.headers}`)
        logger.log('debug',`Eliminar vendedor por id, Body: ${req.body}`)
        logger.log('debug',`elemento borrado correctamente`)
    }catch(error){
        resp.status(403).json(error);
        logger.log('error','Error eliminando vendedor')
    }
})

export default vendedor