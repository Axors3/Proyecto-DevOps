import Cliente from '../models/ClienteModel.js'
import Plan from '../models/PlanModel.js'
import Telefono from '../models/TelefonoModel.js'
import Usuario from '../models/UsuarioModel.js'
import Vendedor from '../models/VendedorModel.js'

const cargarTablas = async() =>{
    
    await Usuario.sync({alter:true})
    await Cliente.sync({alter:true})
    await Plan.sync({alter:true})
    await Telefono.sync({alter:true})
    await Vendedor.sync({alter:true})
}

cargarTablas()
