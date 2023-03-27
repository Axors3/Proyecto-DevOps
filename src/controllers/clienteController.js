import tm from '../models/ClienteModel.js'

const clienteController = () =>{
    //GET by id
    const getClienteById = async(req) =>{
        const cli = await tm.findOne({
            where:{
                id:req.params.id
            }
        });

        return{
            cli
        }
    }

    //POST
    const createCliente = (data) =>{

        const {nombre, edad, telefono, tipo_compra, fecha_compra} = data;
        const newCliente = tm.build({
            'nombre': nombre,
            'edad' : edad,
            'telefono' : telefono,
            'tipo_compra' : tipo_compra,
            'fecha_compra' : fecha_compra
        })

        return{
            newCliente
        }
    }

    //GET all
    const getClientes = async() =>{
        const clis = await tm.findAll()

        return{
            clis
        }
    }

    //PUT
    const updateCliente = async(req) =>{
        const cli = await tm.findOne({
            where:{
                id:req.params.id
            }
        });

        const {nombre, edad, telefono, tipo_compra, fecha_compra} = req.body;

        cli.set({
        'nombre': nombre,
        'edad' : edad,
        'telefono' : telefono,
        'tipo_compra' : tipo_compra,
        'fecha_compra' : fecha_compra
        });

        return{
            cli
        }

    }

    //DELETE
    const deleteCliente = async(req) =>{
        await tm.destroy({
            where:{
                id:req.params.id
            }
        })
    }

    return{
        getClienteById,
        createCliente,
        getClientes,
        updateCliente,
        deleteCliente
    }

}

export default clienteController