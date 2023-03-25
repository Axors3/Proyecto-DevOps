import conn from '../db.js';
import { DataTypes } from 'sequelize';

const Usuario = conn.define('Usuario',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    
    username:{
        type: DataTypes.CHAR(10),
        allowNull:false,
    },
    email:{
        type: DataTypes.CHAR(50),
        allowNull:false
    },
    password:{
        type: DataTypes.CHAR(10),
        allowNull:false
    },
    lastLoginDate:{
        type:DataTypes.DATE,
    },
    createdDate:{
        type: DataTypes.DATE,
    }
});


export default Usuario