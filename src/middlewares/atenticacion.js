import jwt from "jsonwebtoken"
import config from '../config.js'
import us from '../models/UsuarioModel.js'
import {logger} from '../utils/logger.js'

export const verificarToken = async(req,resp,next) =>{
    try{
        const token = req.headers["x-acces-token"];
        //console.log(token)
        if(!token) {
            logger.log('warn','Sin clave de acceso')
            return resp.status(403).json({message: "Sin clave de acceso"})
        }
        const decodificado = jwt.verify(token,config.SECRET)
        req.userID = decodificado.id
        
        const user = await us.findOne({
            where:{
                id: decodificado.id
            }
        })
        if(!user){
            logger.log('warn','Usuario no encontrado')
            return resp.status(404).json({message:"Usuario no encontrado"})
        }
        console.log(decodificado.id)
        next();
    }catch(error){
        logger.log('warn','No autorizado')
        return resp.status(401).json({message:"No autorizado"})
        
        
    }
    
}