import { Router } from "express";
import planController from '../controllers/planController.js'
import {verificarToken} from '../middlewares/index.js'
import {logger} from '../utils/logger.js'
const plan = Router();
const {
    getPlanById,
    createPlan,
    getPlanes,
    updatePlan,
    deletePlan} = planController()

//Get all
plan.get('/',verificarToken,async(req,resp) =>{
    try{
        const {planes} = await getPlanes();
        resp.status(200).json(planes)
        logger.log('info','Peticion para la api uadyfone en ruta planes')
        logger.log('debug','Obtener planes') 
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener planes')
    }
})

//Post
plan.post('/',verificarToken,async(req,resp) => {
    const {newPlan} = createPlan(req)

    try{
        await newPlan.save()
        resp.status(201).json(newPlan)
        logger.log('info','Peticion para la api uadyfone en ruta planes')
        logger.log('debug','Crear plan') 
    } catch (error){
        resp.status(403).json(error)
        logger.log('error','No es posible Crear plan')
    }
})

//Get by id
plan.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{plan} = await getPlanById(req);
        resp.status(200).json(plan.dataValues)
        logger.log('info','Peticion para la api uadyfone en ruta planes')
        logger.log('debug','Obtener plan') 
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener plan')
    }
})

//Put
plan.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{plan} = await updatePlan(req);
        await plan.save();
        resp.status(200).json(plan.dataValues)
        logger.log('info','Peticion para la api uadyfone en ruta planes')
        logger.log('debug','Actualizar plan') 
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible actualizar plan')
    }
})

//Delete
plan.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deletePlan(req);
        resp.status(204).json({message:"elemento borrado correctamente"})
        logger.log('info','Peticion para la api uadyfone en ruta planes')
        logger.log('debug','Eliminar plan') 
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible eliminar plan')
    }
})

export default plan