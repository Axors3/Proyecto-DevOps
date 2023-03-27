import { Router } from "express";
import telefonoController from '../controllers/telefonoController.js'

const telefono = Router();
const {
    createTelefono,
    getTelefonoById, 
    getTelefonos,
    updateTelefono
    } = telefonoController()

//Get all
telefono.get('/',async(req, resp) =>{

    try {
        const {tels} = await getTelefonos();
        resp.status(200).json(tels) 
    } catch (error) {
        resp.json(error)
    }
})

//Post
telefono.post('/', async (req,resp) =>{

    const data = req.body;

    const {newTelefono} = createTelefono(data)
    

    try {
        await newTelefono.save()
        resp.status(201).json(newTelefono)

    } catch (error) {
        resp.json(error)
    }
})

//Get by id
telefono.get('/:id',async(req,resp) => {

    try {
        const {tel} = await getTelefonoById(req);
        resp.status(200).json(tel.dataValues)
    } catch (error) {
        resp.json(error)
    }
})

//Put
telefono.put('/:id',async(req,resp) => {

    try {
        const {tel} = await updateTelefono(req);
        await tel.save();
        resp.status(200).json(tel.dataValues);
    } catch (error) {
        resp.json(error)
    }


})

telefono.delete('/:id',(req,resp) => resp.send("Borrando telefonos"))

export default telefono