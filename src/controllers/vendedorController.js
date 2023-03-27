import tm from '../models/VendedorModel.js'

const vendedorController = () =>{
    //GET by id
    const getVendedorById = async(req) =>{
        const ven = await tm.findOne({
            where:{
                id:req.params.id
            }
        });

        return{
            ven
        }
    }

    //POST
    const createVendedor = (data) =>{

        const {nombre, email, num_ventas, hora_entrada, hora_salida} = data;
        const newVendedor = tm.build({
            'nombre': nombre,
            'email' : email,
            'num_ventas' : num_ventas,
            'hora_entrada' : hora_entrada,
            'hora_salida' : hora_salida
        })

        return{
            newVendedor
        }
    }

    //GET all
    const getVendedores = async() =>{
        const vens = await tm.findAll()

        return{
            vens
        }
    }


    return{
        getVendedorById,
        createVendedor,
        getVendedores
    }

}

export default vendedorController