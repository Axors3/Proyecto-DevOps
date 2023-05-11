import { Sequelize } from "sequelize";
import {logger} from "../utils/logger.js";

export const conn = new Sequelize('telefoniadb','root','',{
    host:'localhost',
    dialect:'mariadb'

})

export const doConnection = async() =>{
    try {
        await conn.authenticate();
        console.log('conneccion success');
        logger.log('info','conneccion success')
    } catch (error) {
        console.log('unable to connect', error);
        logger.log('error','unable to connect')
    }
}

