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
        logger.log('info','Peticion para la api uadyfone en ruta usuarios')
        logger.log('debug','Obtener usuarios')
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible obtener Usuarios')
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
        logger.log('info','Peticion para la api uadyfone en ruta usuarios')
        logger.log('debug','Registrar usuario')

    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible crear usuario')
    }
})

usuario.post('/signin', async(req,resp) => {
    
    
    try {
        const {usuarioEcontrado,token} = await verificarUsuario(req)
        resp.status(201).json(token)
        logger.log('info','Peticion para la api uadyfone en ruta usuarios')
        logger.log('debug','Loggear usuario')

    } catch (error) {
        resp.status(403).json({message:"Usuario no encontrado"})
        logger.log('error','Usuario no encontrado')
    }
})

usuario.get('/:id',async(req,resp) => {
    try {
        const {user} = await getUsuarioById(req);
        resp.status(200).json(user.dataValues)
        logger.log('info','Peticion para la api uadyfone en ruta usuarios')
        logger.log('debug','Obtener usuario')
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Usuario no encontrado')
    }
})

usuario.put('/:id',async(req,resp) => {
    try {
        const {user} = await updateUsuario(req);
        await user.save();
        resp.status(200).json(user.dataValues)
        logger.log('info','Peticion para la api uadyfone en ruta usuarios')
        logger.log('debug','Actualizar usuario')
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible actualizar usuario')
    }
})

usuario.delete('/:id',async(req,resp) => {
    try {
        await deleteUsuario(req);

        resp.status(204).json({message:"elemento borrado correctamente"})
        logger.log('info','Peticion para la api uadyfone en ruta usuarios')
        logger.log('debug','Eliminar usuario')
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','No es posible eliminar usuario')
    }
})

export default usuario