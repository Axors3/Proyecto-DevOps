import Cliente from '../models/ClienteModel.js'
import Plan from '../models/PlanModel.js'
import Telefono from '../models/TelefonoModel.js'
import Usuario from '../models/UsuarioModel.js'
import Vendedor from '../models/VendedorModel.js'

const cargarTablas = async() =>{
    
    await Usuario.sync({force:true})
    await Cliente.sync({force:true})
    await Plan.sync({force:true})
    await Telefono.sync({force:true})
    await Vendedor.sync({force:true})
}

cargarTablas()
