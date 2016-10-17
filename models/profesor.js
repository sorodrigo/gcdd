'use strict';

module.exports = function(sequelize, DataTypes) {
  var profesor = sequelize.define('profesor', {
    id_profesor: {
      type: DataTypes.INTEGER,
      field: 'id_profesor',
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      field: 'nombre',
      allowNull: false
    },
    apellidos: {
      type: DataTypes.CHAR(50),
      field: 'apellidos',
      allowNull: false
    },
    titulacion: {
      type: DataTypes.CHAR(50),
      field: 'titulacion'
    },
    despacho: {
      type: DataTypes.CHAR(15),
      field: 'despacho'
    },
    num_sexenio: {
      type: DataTypes.INTEGER,
      field: 'num_sexenio',
      allowNull: false
    },
    doctor: {
      type: DataTypes.BOOLEAN,
      field: 'doctor',
      allowNull: false
    },
    nrp: {
      type: DataTypes.CHAR(50),
      field: 'nrp',
      allowNull: false
    },
    nrp_a: {
      type: DataTypes.CHAR(50),
      field: 'nrp_a',
      allowNull: false
    },
    telefono: {
      type: DataTypes.CHAR(25),
      field: 'telefono'
    },
    fecha_alta: {
      type: DataTypes.DATE,
      field: 'fecha_alta',
      allowNull: false
    },
    fecha_posesion: {
      type: DataTypes.DATE,
      field: 'fecha_posesion',
      allowNull: false
    }

  }, {
    underscored: true,
    tableName: 'profesor'
  });


  return profesor;
};
