import { Router } from "express";
import telefonoController from '../controllers/telefonoController.js'

const telefono = Router();
const {createTelefono,getTelefonoById, getTelefonos} = telefonoController()

telefono.get('/',async(req, resp) =>{
    
    const {tels} = await getTelefonos();
    resp.status(200).json(tels)
})

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

telefono.get('/:id',async(req,resp) => {

    try {
        const {tel} = await getTelefonoById(req);
        resp.status(200).json(tel.dataValues)
    } catch (error) {
        resp.json(error)
    }
})

telefono.put('/:id',(req,resp) => resp.send("Poniendo telefonos"))

telefono.delete('/:id',(req,resp) => resp.send("Borrando telefonos"))

export default telefono