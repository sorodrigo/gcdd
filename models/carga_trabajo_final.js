'use strict';

module.exports = function(sequelize, DataTypes) {
  var carga_trabajo_final = sequelize.define('carga_trabajo_final', {
    id_carga_trabajo_final: {
      type: DataTypes.INTEGER,
      field: 'id_carga_trabajo_final',
      primaryKey: true,
      autoIncrement: true
    }

  }, {
    underscored: true,
    tableName: 'carga_trabajo_final'
  });


  return carga_trabajo_final;
};
