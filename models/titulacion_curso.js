'use strict';

module.exports = function(sequelize, DataTypes) {
  var titulacion_curso = sequelize.define('titulacion_curso', {
    id_titulacion_curso: {
      type: DataTypes.INTEGER,
      field: 'id_trabajo_final',
      primaryKey: true,
      autoIncrement: true
    },
    prevision_alumnos: {
      type: DataTypes.INTEGER,
      field: 'prevision_alumnos',
      allowNull: false
    }

  }, {
    underscored: true,
    tableName: 'titulacion_curso'
  });


  return titulacion_curso;
};