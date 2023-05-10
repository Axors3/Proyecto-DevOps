import { Router } from "express";
import planController from '../controllers/planController.js'
import {verificarToken} from '../middlewares/index.js'

const plan = Router();
const {
    getPlanById,
    createPlan,
    getPlanes,
    updatePlan,
    deletePlan} = planController()

import {logger} from '../utils/logger.js'
//Get all
plan.get('/',verificarToken,async(req,resp) =>{
    try{
        const {planes} = await getPlanes();
        resp.status(200).json(planes)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Metodo: Obtener todos los planes, Header: ${req.headers}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(planes)}`) 
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','Error encontrando planes')
    }
})

//Post
plan.post('/',verificarToken,async(req,resp) => {
    const {newPlan} = createPlan(req)

    try{
        await newPlan.save()
        resp.status(201).json(newPlan)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Nuevo plan, Header: ${req.headers}`)
        logger.log('debug',`Nuevo plan, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(201).json(newPlan)}`)
    } catch (error){
        resp.status(403).json(error)
        logger.log('error','Error creando plan')
    }
})

//Get by id
plan.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{plan} = await getPlanById(req);
        resp.status(200).json(plan.dataValues)
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Obtener plan, Header: ${req.headers}`)
        logger.log('debug',`Obtener plan, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(plan.dataValues)}`)
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','Error obteniendo plan')
    }
})

//Put
plan.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{plan} = await updatePlan(req);
        await plan.save();
        resp.status(200).json(plan.dataValues);
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Actualizar plan, Header: ${req.headers}`)
        logger.log('debug',`Actualizar plan, Body: ${req.body}`)
        logger.log('debug',`Respuesta: ${resp.status(200).json(plan.dataValues)}`)
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','Error actualizando plan')
    }
})

//Delete
plan.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deletePlan(req);
        resp.status(204).json({message:"elemento borrado correctamente"});
        logger.log('info',`Query para uadyfonApi en ${req.headers}`)
        logger.log('debug',`Eliminar plan, Header: ${req.headers}`)
        logger.log('debug',`Eliminar plan, Body: ${req.body}`)
        logger.log('debug',`elemento borrado correctamente`)
    }catch(error){
        resp.status(403).json(error);
        logger.log('error','Error eliminando plan')
    }
})

export default plan