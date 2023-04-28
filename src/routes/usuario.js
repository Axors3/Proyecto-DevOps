import { Router } from "express";
import usuarioController from '../controllers/usuarioController.js'

import jwt  from 'jsonwebtoken'
import config from '../config.js'

const usuario = Router()
const {
        createUsuario,
        deleteUsuario,
        getUsuarioById,
        getUsuarios,
        updateUsuario,
        verificarUsuario} = usuarioController();

usuario.get('/',async(req,resp) =>{

    try {
        const {users} = await getUsuarios()
        resp.status(200).json(users)
    } catch (error) {
        resp.status(403).json(error)
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

    } catch (error) {
        resp.status(403).json(error)
    }
})

usuario.post('/singin', async(req,resp) => {
    
    
    try {
        const {usuarioEcontrado,token} = await verificarUsuario(req)
        resp.status(201).json(token)

    } catch (error) {
        resp.status(403).json({message:"Usuario no encontrado"})
    }
})

usuario.get('/:id',async(req,resp) => {
    try {
        const {user} = await getUsuarioById(req);
        resp.status(200).json(user.dataValues)
    } catch (error) {
        resp.status(403).json(error)
    }
})

usuario.put('/:id',async(req,resp) => {
    try {
        const {user} = await updateUsuario(req);
        await user.save();
        resp.status(200).json(user.dataValues);
    } catch (error) {
        resp.status(403).json(error);
    }
})

usuario.delete('/:id',async(req,resp) => {
    try {
        await deleteUsuario(req);

        resp.status(204).json({message:"elemento borrado correctamente"});
    } catch (error) {
        resp.status(403).json(error);
    }
})

export default usuario