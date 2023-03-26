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

    return{
        getVendedorById
    }

}

export default vendedorController