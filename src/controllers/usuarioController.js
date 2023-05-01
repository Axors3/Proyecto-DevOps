import us from '../models/UsuarioModel.js'
import jwt  from 'jsonwebtoken'
import config from '../config.js'
import bcrypt from 'bcrypt'



    //POST / SingUp
    const createUsuario =  async (req) =>{


        const {username,email,password,telefono,edad} = req.body;
        /*
        const salt = await bcrypt.genSalt(10)
        const SecretPassword = await bcrypt.hash(password,salt)
        */
        const newUsuario = await us.build({
            'username': username,
            'email': email,
            'password': password,
            'telefono': telefono,
            'edad':edad
        })

        return {
            newUsuario
        }

    }

    //POST / SingIn
    const verificarUsuario = async (req) =>{
        const {email,password} = req.body;
        const token = null
        const usuarioEcontrado = await us.findOne({
            where:{
                email: email
            }
        });
        if(usuarioEcontrado){
            if(password == usuarioEcontrado.password){
                const token = jwt.sign({id: usuarioEcontrado.id},config.SECRET,{
                    expiresIn: 86400 //Token expira en 86400s = 24hrs
                })
                console.log(token)
                return{
                    usuarioEcontrado,token
        
                }
            }else{
                console.log(token)
                return{
                    usuarioEcontrado,token
        
                }
            }
        }else{
            return usuarioEcontrado,token
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




    return{
        createUsuario,
        deleteUsuario,
        getUsuarioById,
        getUsuarios,
        updateUsuario,
        verificarUsuario
    }



export default usuarioController

