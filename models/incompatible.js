'use strict';

module.exports = function(sequelize, DataTypes) {
  var incompatible = sequelize.define('incompatible', {
    id_incompatible: {
      type: DataTypes.INTEGER,
      field: 'id_incompatible',
      primaryKey: true,
      autoIncrement: true
    }

  }, {
    underscored: true,
    tableName: 'incompatible'
  });


  return incompatible;
};
