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
    const createVendedor = (req) =>{

        const {nombre, email, num_ventas, hora_entrada, hora_salida} = req.body;
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

    //PUT
    const updateVendedor = async(req) =>{
        const ven = await tm.findOne({
            where:{
                id:req.params.id
            }
        });

        const {nombre, email, num_ventas, hora_entrada, hora_salida} = req.body;

        ven.set({
        'nombre': nombre,
        'email' : email,
        'num_ventas' : num_ventas,
        'hora_entrada' : hora_entrada,
        'hora_salida' : hora_salida
        });

        return{
            ven
        }

    }

    //DELETE
    const deleteVendedor = async(req) =>{
        await tm.destroy({
            where:{
                id:req.params.id
            }
        })
    }

    return{
        getVendedorById,
        createVendedor,
        getVendedores,
        updateVendedor,
        deleteVendedor
    }

}

export default vendedorController