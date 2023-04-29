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

//Get all
plan.get('/',verificarToken,async(req,resp) =>{
    try{
        const {planes} = await getPlanes();
        resp.status(200).json(planes)
    }catch(error){
        resp.status(403).json(error)
    }
})

//Post
plan.post('/',verificarToken,async(req,resp) => {
    const {newPlan} = createPlan(req)

    try{
        await newPlan.save()
        resp.status(201).json(newPlan)
    } catch (error){
        resp.status(403).json(error)
    }
})

//Get by id
plan.get('/:id',verificarToken,async(req,resp) => {
    try{
        const{plan} = await getPlanById(req);
        resp.status(200).json(plan.dataValues)
    }catch(error){
        resp.status(403).json(error)
    }
})

//Put
plan.put('/:id',verificarToken,async(req,resp) => {
    try{
        const{plan} = await updatePlan(req);
        await plan.save();
        resp.status(200).json(plan.dataValues);
    } catch(error){
        resp.status(403).json(error)
    }
})

//Delete
plan.delete('/:id',verificarToken,async(req,resp) => {
    try{
        await deletePlan(req);
        resp.status(204).json({message:"elemento borrado correctamente"});
    }catch(error){
        resp.status(403).json(error);
    }
})

export default plan