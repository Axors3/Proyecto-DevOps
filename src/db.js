import { Sequelize } from "sequelize";

const conn = new Sequelize('telefoniadb','root','',{
    host:'localhost',
    dialect:'mariadb'

})

const checkConection = async() =>{
    try {
        await conn.authenticate();
        console.log('conneccion success');
    } catch (error) {
        console.log('unable to connect', error);
    }
}

export default conn