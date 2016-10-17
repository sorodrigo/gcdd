'use strict';

module.exports = function(sequelize, DataTypes) {
  var profesor_cargo = sequelize.define('profesor_cargo', {
    id_profesor_cargo: {
      type: DataTypes.INTEGER,
      field: 'id_profesor_cargo',
      primaryKey: true,
      autoIncrement: true
    }

  }, {
    underscored: true,
    tableName: 'profesor_cargo',
    indexes: [
      {
        unique: true,
        fields: ['fk_id_curso', 'fk_id_cargo', 'fk_id_profesor']
      }
    ]
  });


  return profesor_cargo;
};
