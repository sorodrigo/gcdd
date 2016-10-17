'use strict';

module.exports = function(sequelize, DataTypes) {
  var asignatura_titulacion = sequelize.define('asignatura_titulacion', {
    id_asignatura_titulacion: {
      type: DataTypes.INTEGER,
      field: 'id_asignatura_titulacion',
      primaryKey: true,
      autoIncrement: true
    },
    prevision_alumnos: {
      type: DataTypes.INTEGER,
      field: 'prevision_alumnos'
    },
    codigo_upm: {
      type: DataTypes.CHAR(50),
      field: 'codigo_upm',
      allowNull: false
    },
    ano: {
      type: DataTypes.INTEGER,
      field: 'ano',
      allowNull: false
    },
    semestre: {
      type: DataTypes.INTEGER,
      field: 'semestre',
      allowNull: false
    }

  }, {
    underscored: true,
    tableName: 'asignatura_titulacion'
  });


  return asignatura_titulacion;
};