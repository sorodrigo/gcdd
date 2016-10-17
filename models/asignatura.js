'use strict';

module.exports = function(sequelize, DataTypes) {
  var asignatura = sequelize.define('asignatura', {
    id_asignatura: {
      type: DataTypes.INTEGER,
      field: 'id_asignatura',
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      field: 'nombre',
      allowNull: false
    },
    creditos: {
      type: DataTypes.INTEGER,
      field: 'creditos',
      allowNull: false
    },
    num_alumnos: {
      type: DataTypes.INTEGER,
      field: 'num_alumnos'
    },
    num_grupos: {
      type: DataTypes.INTEGER,
      field: 'num_grupos'
    },
    creditos_t: {
      type: DataTypes.INTEGER,
      field: 'creditos_t',
      allowNull: false
    },
    creditos_p: {
      type: DataTypes.INTEGER,
      field: 'creditos_p',
      allowNull: false
    },
    activa: {
      type: DataTypes.BOOLEAN,
      field: 'activa',
      allowNull: false
    },
    valida: {
      type: DataTypes.BOOLEAN,
      field: 'valida',
      allowNull: false
    },
    caracter: {
      type: DataTypes.CHAR(50),
      field: 'caracter'
    }

  }, {
    underscored: true,
    tableName: 'asignatura'
  });


  return asignatura;
};
