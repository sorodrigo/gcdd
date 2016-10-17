'use strict';

module.exports = function(sequelize, DataTypes) {
  var carga = sequelize.define('carga', {
    id_carga: {
      type: DataTypes.INTEGER,
      field: 'id_carga',
      primaryKey: true,
      autoIncrement: true
    },
    num_proyectos: {
      type: DataTypes.INTEGER,
      field: 'correo',
      allowNull: false
    },
    creditos_practicas: {
      type: DataTypes.INTEGER,
      field: 'creditos_practicas',
      allowNull: false
    }

  }, {
    underscored: true,
    tableName: 'carga'
  });


  return carga;
};