import us from '../models/UsuarioModel.js'

const usuarioController = () =>{

    //POST
    const createUsuario =  (req) =>{

        const {username,email,password,telefono,edad} = req.body;

        const newUsuario = us.build({
            'username': username,
            'email': email,
            'password':password,
            'telefono': telefono,
            'edad':edad
        })

        return {
            newUsuario
        }

    }

    //GET all
    const getUsuarios = async () =>{

        const users = await us.findAll()

        return{
            users
        }
    }

    //GET by id
    const getUsuarioById = async (req) =>{

        const user = await us.findOne({
            where:{
                id:req.params.id
            }
        });

        return{
            user
        }
    }

    //PUT
    const updateUsuario = async (req) =>{
        const user = await us.findOne({
            where:{
                id:req.params.id
            }
        });

       const {username, email, password, telefono, edad} = req.body

        user.set({
        'username': username,
        'email': email,
        'password':password,
        'telefono': telefono,
        'edad':edad
       });

       return{
            user 
       }

    }

    //DELETE
    const deleteUsuario = async(req) =>{

        await us.destroy({
            where:{
                id:req.params.id
            }
        })
    }



    return{
        createUsuario,
        deleteUsuario,
        getUsuarioById,
        getUsuarios,
        updateUsuario,
    }

}

export default usuarioController