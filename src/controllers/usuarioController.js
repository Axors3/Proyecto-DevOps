import us from '../models/UsuarioModel.js'


    //POST
    export  const createUsuario =  (req) =>{

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
    export const getUsuarios = async () =>{

        const users = await us.findAll()

        return{
            users
        }
    }

    //GET by id
    export const getUsuarioById = async (req) =>{

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
    export const updateUsuario = async (req) =>{
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
    export const deleteUsuario = async(req) =>{

        await us.destroy({
            where:{
                id:req.params.id
            }
        })
    }


