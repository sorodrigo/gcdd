'use strict';

module.exports = function(sequelize, DataTypes) {
  var dedicacion = sequelize.define('dedicacion', {
    id_dedicacion: {
      type: DataTypes.INTEGER,
      field: 'id_dedicacion',
      primaryKey: true,
      autoIncrement: true
    },
    dedicacion: {
      type: DataTypes.CHAR(25),
      field: 'dedicacion',
      allowNull: false
    },
    horas_docencia: {
      type: DataTypes.INTEGER,
      field: 'horas_docencia',
      allowNull: false
    },
    horas_tutoria: {
      type: DataTypes.INTEGER,
      field: 'horas_tutoria',
      allowNull: false
    },
    equivalencia: {
      type: DataTypes.FLOAT,
      field: 'equivalencia',
      allowNull: false
    }

  }, {
    underscored: true,
    tableName: 'dedicacion'
  });


  return dedicacion;
};
