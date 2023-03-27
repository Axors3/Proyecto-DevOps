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
    type: DataTypes.STRING(12),
    allowNull: true
  },
  tipo_compra: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  fecha_compra: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
});

export default Cliente