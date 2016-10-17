'use strict';

module.exports = function(sequelize, DataTypes) {
  var profesor_reduccion = sequelize.define('profesor_reduccion', {
    id_profesor_reduccion: {
      type: DataTypes.INTEGER,
      field: 'id_profesor_reduccion',
      primaryKey: true,
      autoIncrement: true
    }

  }, {
    underscored: true,
    tableName: 'profesor_reduccion'
  });


  return profesor_reduccion;
};
