'use strict';

module.exports = function(sequelize, DataTypes) {
  var reduccion = sequelize.define('reduccion', {
    id_reduccion: {
      type: DataTypes.INTEGER,
      field: 'id_reduccion',
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
    tableName: 'reduccion'
  });


  return reduccion;
};
