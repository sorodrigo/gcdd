'use strict';

module.exports = function(sequelize, DataTypes) {
  var asignatura_asignada = sequelize.define('asignatura_asignada', {
    id_asignatura_asignada: {
      type: DataTypes.INTEGER,
      field: 'id_asignatura_asignada',
      primaryKey: true,
      autoIncrement: true
    },

    num_grupos: {
      type: DataTypes.INTEGER,
      field: 'num_grupos'
    },
    num_desdobles: {
      type: DataTypes.INTEGER,
      field: 'num_desdobles'
    },
    num_grupos_i: {
      type: DataTypes.INTEGER,
      field: 'num_grupos_i'
    },
    num_desdobles_i: {
      type: DataTypes.INTEGER,
      field: 'num_desdobles_i'
    }

  }, {
    underscored: true,
    tableName: 'asignatura_asignada'
  });


  return asignatura_asignada;
};
