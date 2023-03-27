import {conn} from '../db/db.js';
import { DataTypes } from 'sequelize';

const Usuario = conn.define('Usuario',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    
    username:{
        type: DataTypes.STRING(10),
        allowNull:false,
        unique:true
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    password:{
        type: DataTypes.STRING(10),
        allowNull:false
    },
    telefono:{
        type:DataTypes.STRING(12),
        allowNull:true
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
});


export default Usuario