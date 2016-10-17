'use strict';

module.exports = function(sequelize, DataTypes) {
  var curso = sequelize.define('curso', {
    id_curso: {
      type: DataTypes.INTEGER,
      field: 'id_curso',
      primaryKey: true,
      autoIncrement: true
    },
    max_proyectos: {
      type: DataTypes.INTEGER,
      field: 'max_proyecto',
      allowNull: false
    },
    max_practicas: {
      type: DataTypes.INTEGER,
      field: 'max_practicas',
      allowNull: false
    },
    max_trabajos: {
      type: DataTypes.INTEGER,
      field: 'titulacion',
      allowNull: false
    },
    horas_credito: {
      type: DataTypes.INTEGER,
      field: 'horas_credito',
      allowNull: false
    },
    max_alumnos_grupo: {
      type: DataTypes.INTEGER,
      field: 'max_alumnos_grupo',
      allowNull: false
    },
    max_alumnos_desdoble: {
      type: DataTypes.INTEGER,
      field: 'max_alumnos_desdoble',
      allowNull: false
    },
    horas_ingles: {
      type: DataTypes.FLOAT,
      field: 'horas_ingles',
      allowNull: false
    },
    min_alumnos_opt: {
      type: DataTypes.INTEGER,
      field: 'min_alumnos_opt',
      allowNull: false
    },
    min_alumnos_master: {
      type: DataTypes.INTEGER,
      field: 'min_alumnos_master',
      allowNull: false
    },
    inicio: {
      type: DataTypes.DATE,
      field: 'inicio',
      allowNull: false
    },
    fin: {
      type: DataTypes.DATE,
      field: 'fin',
      allowNull: false
    }

  }, {
    underscored: true,
    tableName: 'curso'
  });


  return curso;
};
