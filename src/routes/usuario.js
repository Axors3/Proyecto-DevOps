import { Router } from "express";
import usuarioController from '../controllers/usuarioController.js'

const usuario = Router()
const {
        createUsuario,
        deleteUsuario,
        getUsuarioById,
        getUsuarios,
        updateUsuario} = usuarioController();

usuario.get('/',async(req,resp) =>{

    try {
        const {users} = await getUsuarios()
        resp.status(200).json(users)
    } catch (error) {
        resp.status(403).json(error)
    }
})

usuario.post('/',async(req,resp) => {
    
    const {newUsuario} = createUsuario(req)
    

    try {
        await newUsuario.save()
        resp.status(201).json(newUsuario)

    } catch (error) {
        resp.status(403).json(error)
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