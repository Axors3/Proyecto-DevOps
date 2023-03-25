import {conn} from '../db/db.js';
import { DataTypes } from 'sequelize';

const Vendedor = conn.define('Vendedor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  num_ventas: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  hora_entrada: {
    type: DataTypes.TIME,
    allowNull: true
  },
  hora_salida: {
    type: DataTypes.TIME,
    allowNull: true
  }
  
});

export default Vendedor