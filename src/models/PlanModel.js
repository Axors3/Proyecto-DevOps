import {conn} from '../db/db.js';
import { DataTypes } from 'sequelize';

const Plan = conn.define('Plan', {
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
  costo: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  duracion: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  redes_gratuitas: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  datos: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

export default Plan