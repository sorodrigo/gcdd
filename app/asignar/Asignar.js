/**
 * Created by Rodrigo on 20/12/15.
 */
'use strict';

(function () {
  angular.module('SGCD')

  // Controller encargado de cargar y manejar la tabla de las gestionar elegidas
    .controller('AsignarCtrl', [function () {

      var self = this;
      // Diccionario que contiene las titulaciones, sus cursos, y las gestionar de dichos cursos
      self.cursos = {
        'Ingenieria Software': [
          {
            total: 0,
            asignaturas: [
              {
                nombre: 'Analisis Matematico',
                creditosT: 5,
                creditosP: 0,
                gruposT: 2,
                gruposTI: 1,
                gruposP: 0,
                gruposPI: 0,
                num_alumnos: 100,
                num_grupos: 3,
                num_desdobles: 0
              }
            ]
          },

          {
            total: 0,
            asignaturas: [
              {
                nombre: 'Sistemas Operativos',
                creditosT: 3,
                creditosP: 3,
                gruposT: 2,
                gruposTI: 0,
                gruposP: 4,
                gruposPI: 0,
                num_alumnos: 100,
                num_grupos: 3,
                num_desdobles: 4

              },
              {
                nombre: 'POOA',
                creditosT: 3,
                creditosP: 3,
                gruposT: 1,
                gruposTI: 1,
                gruposP: 5,
                gruposPI: 0,
                num_alumnos: 80,
                num_grupos: 3,
                num_desdobles: 4
              }
            ]
          },

          {
            total: 0,
            asignaturas: []
          },

          {
            total: 0,
            asignaturas: [
              {
                nombre: 'Agentes de la Informacion',
                creditosT: 2,
                creditosP: 2,
                gruposT: 2,
                gruposTI: 0,
                gruposP: 2,
                gruposPI: 0,
                num_alumnos: 60,
                num_grupos: 2,
                num_desdobles: 2
              }
            ]
          }
        ],
        'Master Web': [
          {
            total: 0,
            asignaturas: [
              {
                nombre: 'Opensource Frameworks',
                creditosT: 5,
                creditosP: 1,
                gruposT: 2,
                gruposTI: 1,
                gruposP: 6,
                gruposPI: 0,
                num_alumnos: 30,
                num_grupos: 3,
                num_desdobles: 6
              }
            ]
          },

          {
            total: 0
          }
        ]
      };

      self.estadoGrupo = function (titulacion, ano, asignatura) {
        var a = self.cursos[titulacion][ano].asignaturas[asignatura];

        if (a.num_grupos > (a.gruposT + a.gruposTI)) {
          return 'celda-amarilla';
        }
        else if (a.num_grupos < (a.gruposT + a.gruposTI)) {
          return 'celda-roja';
        }

        return '';
      };

      self.estadoDesdoble = function (titulacion, ano, asignatura) {
        var a = self.cursos[titulacion][ano].asignaturas[asignatura];

        if (a.num_desdobles > (a.gruposP + a.gruposPI)) {
          return 'celda-amarilla';
        }
        else if (a.num_desdobles < (a.gruposP + a.gruposPI)) {
          return 'celda-roja';
        }

        return '';
      };
    }])

    .controller('EditarGrupoCtrl', ['$routeParams', function ($routeParams) {

      var self = this;

      // Variable de control, cuando hay cambios se habilita la opcion de guardar.
      self.cambios = false;

      self.titulacion = decodeURI($routeParams.titulacion);
      self.asignatura = decodeURI($routeParams.asignatura);
      self.tipo = $routeParams.tipo === 'T' ? 'Teoría' : 'Práctica';

      self.elecciones = [
        {
          nombre: 'Buzz',
          apellidos: 'Lightyear',
          categoria: {
            categoria: 'CATEDRATICO DE E.U.',
            orden: 1
          },
          dedicacion: '6 + 8'
        },
        {
          nombre: 'James',
          apellidos: 'Bond',
          categoria: {
            categoria: 'PROFESOR TITULAR DE E.U.',
            orden: 2
          },
          dedicacion: '6 + 8'
        },
        {
          nombre: 'Bruce',
          apellidos: 'Wayne',
          categoria: {
            categoria: 'PROFESOR ASOCIADO',
            orden: 3
          },
          dedicacion: '6 + 6'
        },
        {
          nombre: 'Steven',
          apellidos: 'Gerrard',
          categoria: {
            categoria: 'PROFESOR TITULAR UNIVERSITARIO',
            orden: 3
          },
          dedicacion: '6 + 6'
        }
      ];

      self.cursos = {
        'Ingenieria Software': [
          {
            total: 0,
            asignaturas: [
              {
                nombre: 'Analisis Matematico',
                creditosT: 5,
                creditosP: 0,
                gruposT: 2,
                gruposTI: 1,
                gruposP: 0,
                gruposPI: 0,
                num_alumnos: 100,
                num_grupos: 3,
                num_desdobles: 0
              }
            ]
          },

          {
            total: 0,
            asignaturas: [
              {
                nombre: 'Sistemas Operativos',
                creditosT: 3,
                creditosP: 3,
                gruposT: 2,
                gruposTI: 0,
                gruposP: 4,
                gruposPI: 0,
                num_alumnos: 100,
                num_grupos: 3,
                num_desdobles: 4

              },
              {
                nombre: 'POOA',
                creditosT: 3,
                creditosP: 3,
                gruposT: 1,
                gruposTI: 1,
                gruposP: 5,
                gruposPI: 0,
                num_alumnos: 80,
                num_grupos: 3,
                num_desdobles: 4
              }
            ]
          },

          {
            total: 0,
            asignaturas: []
          },

          {
            total: 0,
            asignaturas: [
              {
                nombre: 'Agentes de la Informacion',
                creditosT: 2,
                creditosP: 2,
                gruposT: 2,
                gruposTI: 0,
                gruposP: 2,
                gruposPI: 0,
                num_alumnos: 60,
                num_grupos: 2,
                num_desdobles: 2
              }
            ]
          }
        ],
        'Master Web': [
          {
            total: 0,
            asignaturas: [
              {
                nombre: 'Opensource Frameworks',
                creditosT: 5,
                creditosP: 1,
                gruposT: 2,
                gruposTI: 1,
                gruposP: 6,
                gruposPI: 0,
                num_alumnos: 30,
                num_grupos: 3,
                num_desdobles: 6
              }
            ]
          },

          {
            total: 0
          }
        ]
      };

      self.numGrupos = function () {
        var titul = this.cursos[this.titulacion];
        var ano;
        var asig;
        for (ano = 0; ano < titul.length; ano++) {
          for (asig = 0; asig < titul[ano].asignaturas.length; asig++) {
            if (titul[ano].asignaturas[asig].nombre === this.asignatura) {
              if (this.tipo === 'Teoría') {
                return titul[ano].asignaturas[asig].num_grupos;
              }

              return titul[ano].asignaturas[asig].num_desdobles;
            }
          }
        }
      }

      self.seleccionar = '';
      self.profesores = [
        {
          nombre: 'James',
          apellidos: 'Rodriguez',
          categoria: {
            categoria: 'CATEDRATICO DE E.U.',
            orden: 1
          },
          dedicacion: '6 + 6'
        },
        {
          nombre: 'Frank',
          apellidos: 'Abagnale Jr.',
          categoria: {
            categoria: 'PROFESOR TITULAR DE E.U.',
            orden: 2
          },
          dedicacion: '6 + 6'
        },
        {
          nombre: 'Roger',
          apellidos: 'Waters',
          categoria: {
            categoria: 'PROFESOR TITULAR DE E.U.',
            orden: 2
          },
          dedicacion: '6 + 8'
        },
        {
          nombre: 'Marlon',
          apellidos: 'Brando',
          categoria: {
            categoria: 'CATEDRATICO DE LA UNIVERSIDAD',
            orden: 1
          },
          dedicacion: '6 + 8'
        }
      ];
      self.seleccionado = function (item, model, label, profesor) {

        var index = self.elecciones.indexOf(profesor);
        self.elecciones[index] = item;
        self.seleccionar = '';
        self.cambios = true;
      };
      self.agregar = function () {
        var item = {
          nombre: '',
          apellidos: '',
          categoria: {
            categoria: '',
            orden: null
          },
          dedicacion: ''
        };

        self.elecciones.push(item);
      };

      self.eliminar = function (item) {
        var index = self.elecciones.indexOf(item);
        self.elecciones.splice(index, 1);
        self.cambios = true;
      };
    }]);
}());