import {conn} from '../db/db.js';
import { DataTypes } from 'sequelize';

const Cliente = conn.define('Cliente', {
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
  edad: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tipo_compra: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  fecha_compra: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

export default Cliente