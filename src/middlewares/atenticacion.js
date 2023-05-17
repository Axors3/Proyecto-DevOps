import jwt from "jsonwebtoken"
import passport from "passport"
import passportJWT from 'passport-jwt'
import config from '../config.js'
import {logger} from '../utils/logger.js'

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

export const verificarToken = async(req,resp,next) =>{
    try{
        
        passport.authenticate(
            'jwt', {session: false},
            (err,user) =>{
                if(err||!user){
                    logger.log('warn','No autorizado')
                    return resp.status(401).json({
                        message: 'No autorizado',
                        error: err && err.message,
                    });
                }
                req.user = user;
                return next();
            }
        )(req, resp, next);
        
        
        

    }catch(error){
        logger.log('warn','Autorizacion incorrecta')
        return resp.status(401).json({message:"Autorizacion incorrecta"})
    }
    
}

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.SECRET,
        },
        (jwtPayload, done) =>{
            return done(null,jwtPayload);
        }
    )
);