const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const Producto = sequelize.define('Producto', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  precio: { type: DataTypes.FLOAT, allowNull: false },
  descripcion: { type: DataTypes.STRING }
});

Usuario.hasMany(Producto, { foreignKey: 'usuarioId' });
Producto.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = Producto;
