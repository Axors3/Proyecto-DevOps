import { Router } from "express";
import telefonoController from '../controllers/telefonoController.js'
import {verificarToken} from '../middlewares/index.js'
const telefono = Router();
const {
        createTelefono,
        getTelefonoById, 
        getTelefonos,
        updateTelefono,
        deleteTelefono} = telefonoController()

import {logger} from '../utils/logger.js'
//Get all
telefono.get('/',verificarToken,async(req, resp) =>{

    try {
        const {tels} = await getTelefonos();
        resp.status(200).json(tels)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Metodo: Obtener todos los telefonos, Header: ${req.headers}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(tels)}`) 
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Error encontrando telefonos')
    }
})

//Post
telefono.post('/',verificarToken, async (req,resp) =>{


    const {newTelefono} = createTelefono(req)
    

    try {
        await newTelefono.save()
        resp.status(201).json(newTelefono)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Nuevo telefono, Header: ${req.headers}`)
        logger.log('debug',`Nuevo telefono, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(201).json(newTelefono)}`)

    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Error creando telefono')
    }
})

//Get by id
telefono.get('/:id',verificarToken,async(req,resp) => {

    try {
        const {tel} = await getTelefonoById(req);
        resp.status(200).json(tel.dataValues)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Obtener telefono, Header: ${req.headers}`)
        logger.log('debug',`Obtener telefono, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(tel.dataValues)}`)
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Error obteniendo telefono')
    }
})

//Put
telefono.put('/:id',verificarToken,async(req,resp) => {

    try {
        const {tel} = await updateTelefono(req);
        await tel.save();
        resp.status(200).json(tel.dataValues);
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Actualizar telefono, Header: ${req.headers}`)
        logger.log('debug',`Actualizar telefono, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(tel.dataValues)}`)
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Error actualizando telefono')
    }


})

//Delete
telefono.delete('/:id',verificarToken,async(req,resp) => {

    try {
        await deleteTelefono(req);

        resp.status(204).json({message:"elemento borrado correctamente"});
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Eliminar telefono, Header: ${req.headers}`)
        logger.log('debug',`Eliminar telefono, Body: ${req.body}`)
        logger.log('debug',`elemento borrado correctamente`)
    } catch (error) {
        resp.status(403).json(error);
        logger.log('error','Error eliminando telefono')
    }
})

export default telefono