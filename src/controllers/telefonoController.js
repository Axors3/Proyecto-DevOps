import tm from '../models/TelefonoModel.js'

const telefonoController = () =>{

    //POST
    const createTelefono =  (data) =>{

        const {modelo, marca, procesador, ram_gb, almacenamiento_gb} = data;

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



    return{
        createTelefono,
        getTelefonoById,
        getTelefonos,
        updateTelefono
    }

}

export default telefonoController