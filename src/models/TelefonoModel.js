import conn from '../db/db.js';
import { DataTypes } from 'sequelize';

const Telefono = conn.define('Telefono',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    
    modelo:{
        type: DataTypes.STRING(50),
        allowNull:false,
    },
    marca:{
        type: DataTypes.STRING(20),
        allowNull:false
    },
    procesador:{
        type: DataTypes.STRING(50),
        
    },
    ram_gb:{
        type:DataTypes.INTEGER,
    },
    alamacenamiento_gb:{
        type: DataTypes.INTEGER,
    }
});


export default Telefono