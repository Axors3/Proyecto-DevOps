import { Router } from "express";
import { createUsuario,
        deleteUsuario,
        getUsuarioById,
        getUsuarios,
        updateUsuario,
        verificarUsuario} from '../controllers/usuarioController.js'

import jwt  from 'jsonwebtoken'
import config from '../config.js'
import {logger} from '../utils/logger.js'


const usuario = Router()



usuario.get('/',async(req,resp) =>{

    try {
        const {users} = await getUsuarios()
        resp.status(200).json(users)
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Obtener usuarios del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ' + JSON.stringify(users) )
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible obtener usuarios' + ' , body: ' + JSON.stringify(req.body))
    }
})

usuario.post('/signup',async(req,resp) => {
    
    const {newUsuario} = await createUsuario(req)
    const token = jwt.sign({id: newUsuario.id},config.SECRET,{
        expiresIn: 86400 //Token expira en 86400s = 24hrs
    })

    try {
        await newUsuario.save()
        resp.status(201).json(token)
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Crear/signup usuario del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ***' )

    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible crear usuario' + ' , body: ' + JSON.stringify(req.body))
    }
})

usuario.post('/signin', async(req,resp) => {
    
    
    try {
        const {usuarioEcontrado,token} = await verificarUsuario(req)
        resp.status(201).json(token)
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Verificar/signin usuario del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ***' )

    } catch (error) {
        resp.status(403).json({message:"Usuario no encontrado"})
        logger.log('error','No es posible verificar usuario' + ' , body: ' + JSON.stringify(req.body))
    }
})

usuario.get('/:id',async(req,resp) => {
    try {
        const {user} = await getUsuarioById(req);
        resp.status(200).json(user.dataValues)
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Obtener usuario del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ' + JSON.stringify(user.dataValues) )
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible obtener usuario' + ' , body: ' + JSON.stringify(req.body))
    }
})

usuario.put('/:id',async(req,resp) => {
    try {
        const {user} = await updateUsuario(req);
        await user.save();
        resp.status(200).json(user.dataValues)
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Obtener usuario del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ' + JSON.stringify(user.dataValues) )
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible actualizar usuario' + ' , body: ' + JSON.stringify(req.body))
    }
})

usuario.delete('/:id',async(req,resp) => {
    try {
        await deleteUsuario(req);

        resp.status(204).json({message:"elemento borrado correctamente"})
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Eliminar usuario del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body) + ' ,parametros: ' + JSON.stringify(req.params))
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible eliminar usuario' + ' , body: ' + JSON.stringify(req.body))
    }
})

export default usuario