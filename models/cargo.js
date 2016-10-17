'use strict';

module.exports = function(sequelize, DataTypes) {
  var cargo = sequelize.define('cargo', {
    id_cargo: {
      type: DataTypes.INTEGER,
      field: 'id_cargo',
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
    tableName: 'cargo'
  });


  return cargo;
};
