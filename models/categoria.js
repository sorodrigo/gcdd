'use strict';

module.exports = function(sequelize, DataTypes) {
  var categoria = sequelize.define('categoria', {
    id_categoria: {
      type: DataTypes.INTEGER,
      field: 'id_categoria',
      primaryKey: true,
      autoIncrement: true
    },
    categoria: {
      type: DataTypes.CHAR(50),
      field: 'categoria',
      allowNull: false
    },
    orden: {
      type: DataTypes.INTEGER,
      field: 'orden',
      allowNull: false
    }

  }, {
    underscored: true,
    tableName: 'categoria'
  });


  return categoria;
};
