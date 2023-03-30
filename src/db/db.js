import { Sequelize } from "sequelize";

export const conn = new Sequelize('telefoniadb','darling','password',{
    host:'host.docker.internal',
    dialect:'mariadb'

})

export const doConnection = async() =>{
    try {
        await conn.authenticate();
        console.log('conneccion success');
    } catch (error) {
        console.log('unable to connect', error);
    }
}

