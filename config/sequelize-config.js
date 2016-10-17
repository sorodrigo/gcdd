'use strict';

require('dotenv').config({silent: true});

module.exports = {

  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_DEV,
    host: '127.0.0.1',
    dialect: 'postgres',
    migrationStorage: 'json',
    seederStorage: 'json',
    multipleStatements: true
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: '127.0.0.1',
    dialect: 'postgres',
    migrationStorage: 'json',
    seederStorage: 'json',
    multipleStatements: true

  }
};