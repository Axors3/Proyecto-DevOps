import tm from '../models/PlanModel.js'

const planController = () =>{
    //GET by id
    const getPlanById = async(req) =>{
        const plan = await tm.findOne({
            where:{
                id:req.params.id
            }
        });

        return{
            plan
        }
    }

    //POST
    const createPlan = (req) =>{

        const {nombre, costo, duracion, redes_gratuitas, datos} = req.body;
        const newPlan = tm.build({
            'nombre': nombre,
            'costo' : costo,
            'duracion' : duracion,
            'redes_gratuitas' : redes_gratuitas,
            'datos' : datos
        })

        return{
            newPlan
        }
    }

    //GET all
    const getPlanes = async() =>{
        const planes = await tm.findAll()

        return{
            planes
        }
    }

    //PUT
    const updatePlan = async(req) =>{
        const plan = await tm.findOne({
            where:{
                id:req.params.id
            }
        });

        const {nombre, costo, duracion, redes_gratuitas, datos} = req.body;

        plan.set({
        'nombre': nombre,
        'costo' : costo,
        'duracion' : duracion,
        'redes_gratuitas' : redes_gratuitas,
        'datos' : datos
        });

        return{
            plan
        }

    }

    //DELETE
    const deletePlan = async(req) =>{
        await tm.destroy({
            where:{
                id:req.params.id
            }
        })
    }

    return{
        getPlanById,
        createPlan,
        getPlanes,
        updatePlan,
        deletePlan
    }

}

export default planController