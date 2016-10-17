'use strict';

module.exports = function(sequelize, DataTypes) {
  var usuario = sequelize.define('usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      field: 'id_usuario',
      primaryKey: true,
      autoIncrement: true
    },
    correo: {
      type: DataTypes.CHAR(50),
      field: 'correo',
      allowNull: false
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      field: 'is_admin',
      allowNull: false,
      defaultValue: false
    }

  }, {
    underscored: true,
    tableName: 'usuario'
  });


  return usuario;
};
