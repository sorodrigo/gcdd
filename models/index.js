'use strict';

var env = process.env.NODE_ENV || 'development';
var config = require(process.cwd() + '/config/sequelize-config.js')[env];
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
var models = [
  'usuario',
  'profesor',
  'categoria',
  'dedicacion',
  'carga',
  'carga_trabajo_final',
  'trabajo_final',
  'curso',
  'titulacion_curso',
  'titulacion',
  'asignatura_titulacion',
  'asignatura',
  'asignatura_elegida',
  'asignatura_asignada',
  'profesor_cargo',
  'cargo',
  'profesor_reduccion',
  'reduccion',
  'incompatible'
];

models.forEach(function (model) {
  var importedModel = sequelize.import(__dirname + '/' + model);
  db[importedModel.name] = importedModel;
});


// 1:1
/**
 *  Usuario:Profesor 1:1
 */
db.usuario.belongsTo(db.profesor, { foreignKey: 'fk_id_profesor' });
db.profesor.hasOne(db.usuario, { foreignKey: 'fk_id_profesor' });
/**
 *  Profesor:Categoria 1:1
 */
db.profesor.belongsTo(db.categoria, { foreignKey: 'fk_id_categoria' });
db.categoria.hasOne(db.profesor, { foreignKey: 'fk_id_categoria' });
/**
 *  Profesor:dedicacion 1:1
 */
db.profesor.belongsTo(db.dedicacion, { foreignKey: 'fk_id_dedicacion' });
db.dedicacion.hasOne(db.profesor, { foreignKey: 'fk_id_dedicacion' });

// n:m
/**
 *  incompatible (reduccion:reduccion) n:m
 */
db.reduccion.belongsToMany(db.reduccion, {
  as: 'incompatible',
  through: { model: db.incompatible, unique: false },
  foreignKey: 'fk_id_reduccion_1',
  otherKey: 'fk_id_reduccion_2'
});
/**
 *  carga (profesor:curso) n:m
 */
db.profesor.belongsToMany(db.curso, {
  as: 'carga',
  through: { model: db.carga, unique: false },
  foreignKey: 'fk_id_profesor'
});
db.curso.belongsToMany(db.profesor, {
  as: 'carga',
  through: { model: db.carga, unique: false },
  foreignKey: 'fk_id_curso'
});
/**
 *  carga_trabajo_final n:m
 */
db.carga.belongsToMany(db.trabajo_final, {
  as: 'carga_trabajo_final',
  through: { model: db.carga_trabajo_final, unique: false },
  foreignKey: 'fk_id_carga'
});
db.trabajo_final.belongsToMany(db.carga, {
  as: 'carga_trabajo_final',
  through: { model: db.carga_trabajo_final, unique: false },
  foreignKey: 'fk_id_trabajo_final'
});
/**
 *  asignatura_titulacion n:m
 */
db.asignatura.belongsToMany(db.titulacion, {
  as: 'asignatura_titulacion',
  through: { model: db.asignatura_titulacion, unique: false },
  foreignKey: 'fk_id_asignatura'
});
db.titulacion.belongsToMany(db.asignatura, {
  as: 'asignatura_titulacion',
  through: { model: db.asignatura_titulacion, unique: false },
  foreignKey: 'fk_id_titulacion'
});
/**
 *  titulacion_curso n:m
 */
db.titulacion.belongsToMany(db.curso, {
  as: 'titulacion_curso',
  through: { model: db.titulacion_curso, unique: false },
  foreignKey: 'fk_id_titulacion'
});
db.curso.belongsToMany(db.titulacion, {
  as: 'titulacion_curso',
  through: { model: db.titulacion_curso, unique: false },
  foreignKey: 'fk_id_curso'
});
/**
 *  profesor_cargo (profesor:curso:cargo) n:m
 */
db.profesor.belongsToMany(db.cargo, {
  through: { model: db.profesor_cargo, unique: false },
  foreignKey: 'fk_id_profesor'
});
db.cargo.belongsToMany(db.profesor, {
  through: { model: db.profesor_cargo, unique: false },
  foreignKey: 'fk_id_cargo'
});
db.profesor.belongsToMany(db.curso, {
  through: { model: db.profesor_cargo, unique: false },
  foreignKey: 'fk_id_profesor'
});
db.curso.belongsToMany(db.profesor, {
  through: { model: db.profesor_cargo, unique: false },
  foreignKey: 'fk_id_curso'
});
db.cargo.belongsToMany(db.curso, {
  through: { model: db.profesor_cargo, unique: false },
  foreignKey: 'fk_id_cargo'
});
db.curso.belongsToMany(db.cargo, {
  through: { model: db.profesor_cargo, unique: false },
  foreignKey: 'fk_id_curso'
});
/**
 *  profesor_reduccion (profesor:reduccion:curso) n:m
 */
db.profesor.belongsToMany(db.reduccion, {
  through: { model: db.profesor_reduccion, unique: false },
  foreignKey: 'fk_id_profesor'
});
db.reduccion.belongsToMany(db.profesor, {
  through: { model: db.profesor_reduccion, unique: false },
  foreignKey: 'fk_id_reduccion'
});
db.profesor.belongsToMany(db.curso, {
  through: { model: db.profesor_reduccion, unique: false },
  foreignKey: 'fk_id_profesor'
});
db.curso.belongsToMany(db.profesor, {
  through: { model: db.profesor_reduccion, unique: false },
  foreignKey: 'fk_id_curso'
});
db.reduccion.belongsToMany(db.curso, {
  through: { model: db.profesor_reduccion, unique: false },
  foreignKey: 'fk_id_reduccion'
});
db.curso.belongsToMany(db.reduccion, {
  through: { model: db.profesor_reduccion, unique: false },
  foreignKey: 'fk_id_curso'
});
/**
 *  asignatura_elegida (profesor:asignatura:curso) n:m
 */
db.profesor.belongsToMany(db.asignatura, {
  through: { model: db.asignatura_elegida, unique: false },
  foreignKey: 'fk_id_profesor'
});
db.asignatura.belongsToMany(db.profesor, {
  through: { model: db.asignatura_elegida, unique: false },
  foreignKey: 'fk_id_asignatura'
});
db.profesor.belongsToMany(db.curso, {
  through: { model: db.asignatura_elegida, unique: false },
  foreignKey: 'fk_id_profesor'
});
db.curso.belongsToMany(db.profesor, {
  through: { model: db.asignatura_elegida, unique: false },
  foreignKey: 'fk_id_curso'
});
db.asignatura.belongsToMany(db.curso, {
  through: { model: db.asignatura_elegida, unique: false },
  foreignKey: 'fk_id_asignatura'
});
db.curso.belongsToMany(db.asignatura, {
  through: { model: db.asignatura_elegida, unique: false },
  foreignKey: 'fk_id_curso'
});
/**
 *  asignatura_asignada (profesor:asignatura:curso) n:m
 */
db.profesor.belongsToMany(db.asignatura, {
  through: { model: db.asignatura_asignada, unique: false },
  foreignKey: 'fk_id_profesor'
});
db.asignatura.belongsToMany(db.profesor, {
  through: { model: db.asignatura_asignada, unique: false },
  foreignKey: 'fk_id_asignatura'
});
db.profesor.belongsToMany(db.curso, {
  through: { model: db.asignatura_asignada, unique: false },
  foreignKey: 'fk_id_profesor'
});
db.curso.belongsToMany(db.profesor, {
  through: { model: db.asignatura_asignada, unique: false },
  foreignKey: 'fk_id_curso'
});
db.asignatura.belongsToMany(db.curso, {
  through: { model: db.asignatura_asignada, unique: false },
  foreignKey: 'fk_id_asignatura'
});
db.curso.belongsToMany(db.asignatura, {
  through: { model: db.asignatura_asignada, unique: false },
  foreignKey: 'fk_id_curso'
});

// ============================================
Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
