import tm from '../models/TelefonoModel.js'

const telefonoController = () =>{

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


    return{
        createTelefono
    }

}

export default telefonoController