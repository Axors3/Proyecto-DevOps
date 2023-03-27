import { Router } from "express";
import telefonoController from '../controllers/telefonoController.js'

const telefono = Router();
const {
        createTelefono,
        getTelefonoById, 
        getTelefonos,
        updateTelefono,
        deleteTelefono} = telefonoController()

//Get all
telefono.get('/',async(req, resp) =>{

    try {
        const {tels} = await getTelefonos();
        resp.status(200).json(tels) 
    } catch (error) {
        resp.status(403).json(error)
    }
})

//Post
telefono.post('/', async (req,resp) =>{


    const {newTelefono} = createTelefono(req)
    

    try {
        await newTelefono.save()
        resp.status(201).json(newTelefono)

    } catch (error) {
        resp.status(403).json(error)
    }
})

//Get by id
telefono.get('/:id',async(req,resp) => {

    try {
        const {tel} = await getTelefonoById(req);
        resp.status(200).json(tel.dataValues)
    } catch (error) {
        resp.status(403).json(error)
    }
})

//Put
telefono.put('/:id',async(req,resp) => {

    try {
        const {tel} = await updateTelefono(req);
        await tel.save();
        resp.status(200).json(tel.dataValues);
    } catch (error) {
        resp.status(403).json(error)
    }


})

//Delete
telefono.delete('/:id',async(req,resp) => {

    try {
        await deleteTelefono(req);

        resp.status(204).json({message:"elemento borrado correctamente"});
    } catch (error) {
        resp.status(403).json(error);
    }
})

export default telefono