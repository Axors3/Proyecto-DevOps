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
        logger.log('info','Peticion para uadyfone en: ' + req.baseUrl)
        logger.log('debug','Metodo Obtener telefonos del tipo: '+ req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(tels)) 
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible obtener telefonos' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Post
telefono.post('/',verificarToken, async (req,resp) =>{


    const {newTelefono} = createTelefono(req)
    

    try {
        await newTelefono.save()
        resp.status(201).json(newTelefono)
        logger.log('info','Peticion para uadyfone en:  ' + req.baseUrl)
        logger.log('debug','Metodo Crear telefono del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(newTelefono) )
        
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible crear telefono' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Get by id
telefono.get('/:id',verificarToken,async(req,resp) => {

    try {
        const {tel} = await getTelefonoById(req);
        resp.status(200).json(tel.dataValues)
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Obtener telefono del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ' + JSON.stringify(tel.dataValues) )
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible obtener telefono' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Put
telefono.put('/:id',verificarToken,async(req,resp) => {

    try {
        const {tel} = await updateTelefono(req);
        await tel.save();
        resp.status(200).json(tel.dataValues)
        logger.log('info','Peticion para la api uadyfone en: ' + req.baseUrl)
        logger.log('debug','Metodo Actualizar telefono del  tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(tel.dataValues) )
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible actualizar telefono' + ' , body: ' + JSON.stringify(req.body))
    }


})

//Delete
telefono.delete('/:id',verificarToken,async(req,resp) => {

    try {
        await deleteTelefono(req);

        resp.status(204).json({message:"elemento borrado correctamente"})
        logger.log('info','Peticion para la api uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Eliminar telefono del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body) + ' ,parametros: ' + JSON.stringify(req.params))
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible eliminar telefono' + ' , body: ' + JSON.stringify(req.body))
    }
})

export default telefono