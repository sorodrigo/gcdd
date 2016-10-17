'use strict';

module.exports = function(sequelize, DataTypes) {
  var titulacion = sequelize.define('titulacion', {
    id_titulacion: {
      type: DataTypes.INTEGER,
      field: 'id_trabajo_final',
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      field: 'nombre',
      allowNull: false
    },
    plan: {
      type: DataTypes.INTEGER,
      field: 'plan',
      allowNull: false
    },
    valida: {
      type: DataTypes.BOOLEAN,
      field: 'valida',
      allowNull: false
    }

  }, {
    underscored: true,
    tableName: 'titulacion'
  });


  return titulacion;
};