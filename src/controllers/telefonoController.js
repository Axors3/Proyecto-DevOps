import tm from '../models/TelefonoModel.js'

const telefonoController = () =>{

    //POST
    const createTelefono =  (req) =>{

        const {modelo, marca, procesador, ram_gb, almacenamiento_gb} = req.body;

        const newTelefono = tm.build({
            'modelo': modelo,
            'marca': marca,
            'procesador':procesador,
            'ram_gb': ram_gb,
            'almacenamiento_gb':almacenamiento_gb
        })

        return {
            newTelefono
        }

    }

    //GET all
    const getTelefonos = async () =>{

        const tels = await tm.findAll()

        return{
            tels
        }
    }

    //GET by id
    const getTelefonoById = async (req) =>{

        const tel = await tm.findOne({
            where:{
                id:req.params.id
            }
        });

        return{
            tel
        }
    }

    //PUT
    const updateTelefono = async (req) =>{
        const tel = await tm.findOne({
            where:{
                id:req.params.id
            }
        });

       const {modelo, marca, procesador, ram_gb, almacenamiento_gb} = req.body

        tel.set({
        'modelo': modelo,
        'marca': marca,
        'procesador':procesador,
        'ram_gb': ram_gb,
        'almacenamiento_gb':almacenamiento_gb
       });

       return{
            tel 
       }

    }

    //DELETE
    const deleteTelefono = async(req) =>{

        await tm.destroy({
            where:{
                id:req.params.id
            }
        })
    }



    return{
        createTelefono,
        deleteTelefono,
        getTelefonoById,
        getTelefonos,
        updateTelefono,
    }

}

export default telefonoController