import { Router } from "express";
import telefonoController from '../controllers/telefonoController.js'
import {verificarToken} from '../middlewares/index.js'
import {logger} from '../utils/logger.js'
const telefono = Router();
const {
        createTelefono,
        getTelefonoById, 
        getTelefonos,
        updateTelefono,
        deleteTelefono} = telefonoController()

//Get all
telefono.get('/',verificarToken,async(req, resp) =>{

    try {
        const {tels} = await getTelefonos();
        resp.status(200).json(tels)
        logger.log('info','Peticion para la api uadyfone en ruta telefonos')
        logger.log('debug','Obtener telefonos') 
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible obtener telefonos')
    }
})

//Post
telefono.post('/',verificarToken, async (req,resp) =>{


    const {newTelefono} = createTelefono(req)
    

    try {
        await newTelefono.save()
        resp.status(201).json(newTelefono)
        logger.log('info','Peticion para la api uadyfone en ruta telefonos')
        logger.log('debug','Crear telefono')

    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible crear telefono')
    }
})

//Get by id
telefono.get('/:id',verificarToken,async(req,resp) => {

    try {
        const {tel} = await getTelefonoById(req);
        resp.status(200).json(tel.dataValues)
        logger.log('info','Peticion para la api uadyfone en ruta telefonos')
        logger.log('debug','Obtener telefono')
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible obtener telefono')
    }
})

//Put
telefono.put('/:id',verificarToken,async(req,resp) => {

    try {
        const {tel} = await updateTelefono(req);
        await tel.save();
        resp.status(200).json(tel.dataValues)
        logger.log('info','Peticion para la api uadyfone en ruta telefonos')
        logger.log('debug','Actualizar telefono')
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible actualizar telefono')
    }


})

//Delete
telefono.delete('/:id',verificarToken,async(req,resp) => {

    try {
        await deleteTelefono(req);

        resp.status(204).json({message:"elemento borrado correctamente"})
        logger.log('info','Peticion para la api uadyfone en ruta telefonos')
        logger.log('debug','Eliminar telefono')
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible eliminar telefono')
    }
})

export default telefono