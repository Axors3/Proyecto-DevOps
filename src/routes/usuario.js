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
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Metodo: Obtener todos los usuarios, Header: ${req.headers}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(users)}`)
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Error encontrando usuarios')
    }
})

usuario.post('/singup',async(req,resp) => {
    
    const {newUsuario} = await createUsuario(req)
    const token = jwt.sign({id: newUsuario.id},config.SECRET,{
        expiresIn: 86400 //Token expira en 86400s = 24hrs
    })

    try {
        await newUsuario.save()
        resp.status(201).json(token)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Nuevo usuario, Header: ${req.headers}`)
        logger.log('debug',`Nuevo usuario, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(201).json(token)}`)

    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Error creando usuario')
    }
})

usuario.post('/singin', async(req,resp) => {
    
    
    try {
        const {usuarioEcontrado,token} = await verificarUsuario(req)
        resp.status(201).json(token)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Singin, Header: ${req.headers}`)
        logger.log('debug',`Singin, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(201).json(token)}`)

    } catch (error) {
        resp.status(403).json({message:"Usuario no encontrado"})
        logger.log('error','Error al acceder')
    }
})

usuario.get('/:id',async(req,resp) => {
    try {
        const {user} = await getUsuarioById(req);
        resp.status(200).json(user.dataValues)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Obtener por ID, Header: ${req.headers}`)
        logger.log('debug',`Obtener por ID, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(user.dataValues)}`)
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Error usuario no encontrado')
    }
})

usuario.put('/:id',async(req,resp) => {
    try {
        const {user} = await updateUsuario(req);
        await user.save();
        resp.status(200).json(user.dataValues);
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Actualizar por ID, Header: ${req.headers}`)
        logger.log('debug',`Actualizar por ID, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(user.dataValues)}`)
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Error al actaulizar usuario')
    }
})

usuario.delete('/:id',async(req,resp) => {
    try {
        await deleteUsuario(req);

        resp.status(204).json({message:"elemento borrado correctamente"});
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Eliminar por ID, Header: ${req.headers}`)
        logger.log('debug',`Eliminar por ID, Body: ${req.body}`)
        logger.log('debug',`Respuesta: "elemento borrado correctamente"`)
    } catch (error) {
        resp.status(403).json(error)
        logger.log('error','Error al eliminar usuario')
    }
})

export default usuario