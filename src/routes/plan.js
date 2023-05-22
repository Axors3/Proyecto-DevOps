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
        logger.log('info','Peticion para uadyfone en: ' + req.baseUrl)
        logger.log('debug','Metodo Obtener planes del tipo: '+ req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(planes)) 
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener planes' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Post
plan.post('/',verificarToken,async(req,resp) => {
    const {newPlan} = createPlan(req)

    try{
        await newPlan.save()
        resp.status(201).json(newPlan)
        logger.log('info','Peticion para uadyfone en:  ' + req.baseUrl)
        logger.log('debug','Metodo Crear plan del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(newPlan) )
    } catch (error){
        resp.status(403).json(error)
        logger.log('error','No es posible crear plan' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Get by id
plan.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{plan} = await getPlanById(req);
        resp.status(200).json(plan.dataValues)
        logger.log('info','Peticion para la uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Obtener plan del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+ ' ,parametros: ' + JSON.stringify(req.params) + ' , respuesta: ' + JSON.stringify(plan.dataValues) )
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible obtener plan' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Put
plan.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{plan} = await updatePlan(req);
        await plan.save();
        resp.status(200).json(plan.dataValues)
        logger.log('info','Peticion para la api uadyfone en: ' + req.baseUrl)
        logger.log('debug','Metodo Actualizar plan del  tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body)+' ,parametros: ' + JSON.stringify(req.params) +  ' , respuesta: ' + JSON.stringify(plan.dataValues) ) 
    } catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible actualizar plan' + ' , body: ' + JSON.stringify(req.body))
    }
})

//Delete
plan.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deletePlan(req);
        resp.status(204).json({message:"elemento borrado correctamente"})
        logger.log('info','Peticion para la api uadyfone en: '+ req.baseUrl)
        logger.log('debug','Metodo Eliminar plan del tipo: ' + req.method + ' , body: ' + JSON.stringify(req.body) + ' ,parametros: ' + JSON.stringify(req.params))
    }catch(error){
        resp.status(403).json(error)
        logger.log('error','No es posible eliminar plan' + ' , body: ' + JSON.stringify(req.body))
    }
})

export default plan