'use strict';

module.exports = function(sequelize, DataTypes) {
  var trabajo_final = sequelize.define('trabajo_final', {
    id_trabajo_final: {
      type: DataTypes.INTEGER,
      field: 'id_trabajo_final',
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.CHAR(50),
      field: 'tipo',
      allowNull: false
    },
    carga: {
      type: DataTypes.INTEGER,
      field: 'carga',
      allowNull: false
    },
    horas_semana: {
      type: DataTypes.INTEGER,
      field: 'horas_semana',
      allowNull: false
    }

  }, {
    underscored: true,
    tableName: 'trabajo_final'
  });


  return trabajo_final;
};