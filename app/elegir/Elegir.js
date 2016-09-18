/**
 * Created by Rodrigo on 20/12/15.
 */
'use strict';

(function () {
  angular.module('SGCD')

  // Directive encargada de cargar por medio de un elemento las tablas de las gestionar
    .directive('asignaturasTable', function () {
      return {
        restrict: 'E',
        templateUrl: './elegir/asignaturas-table.html'
      };
    })

    // Controller encargado de el boton que selecciona la titulacion
    // y de cargar los panels de cada curso dependiendo de que titulacion se haya elegido.
    .controller('ElegirCtrl', ['$window', function ($window) {
      var self = this;
      // lista de titulaciones
      self.titulaciones = [
        'Ingenieria Software',
        'Ingenieria Computadores',
        'Master Web',
        'Master Sistemas Distribuidos'];

      // tituacion seleccionada
      self.actual = '';

      self.accordion = {
        oneAtATime: true,
        // Permite abrir solo un accordion a la vez
        setOneAtATime: ($window.innerWidth >= 1024)
      };

      // Diccionario que contiene las titulaciones, sus cursos, y las gestionar de dichos cursos
      self.cursos = {
        'Ingenieria Software': [
          {
            total: 0,
            asignaturas: [
              {
                nombre: 'Analisis Matematico',
                creditosT: 6,
                creditosP: 0,
                gruposT: 0,
                gruposTI: 0,
                gruposP: 0,
                gruposPI: 0
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
                gruposT: 0,
                gruposTI: 0,
                gruposP: 0,
                gruposPI: 0

              },
              {
                nombre: 'POOA',
                creditosT: 3,
                creditosP: 3,
                gruposT: 0,
                gruposTI: 0,
                gruposP: 0,
                gruposPI: 0
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
                gruposT: 0,
                gruposTI: 0,
                gruposP: 0,
                gruposPI: 0
              }
            ]
          }
        ],
        'Master Web': [
          {
            total: 0
          },

          {
            total: 0
          }
        ]
      };

      self.grupoMas = function (tipo, ano, asignatura) {
        var grupo = 'grupos' + tipo;
        var creditos;
        var numCreditos;
        var gruposElegidos;
        if (tipo.length > 1) {
          creditos = 'creditos' + tipo.substring(0, 1);
        }
        else {
          creditos = 'creditos' + tipo;
        }
        numCreditos = self.cursos[self.actual][ano]['asignaturas'][asignatura][creditos];

        if (numCreditos > 0) {
          gruposElegidos = self.cursos[self.actual][ano]['asignaturas'][asignatura][grupo];

          gruposElegidos++;
          self.cursos[self.actual][ano]['asignaturas'][asignatura][grupo] = gruposElegidos;

          self.getTotalAno(ano);

          self.cambios = true;
        }
      };

      self.grupoMenos = function (tipo, ano, asignatura) {
        var tipoGrupo = 'grupos' + tipo;
        var numGrupos = self.cursos[self.actual][ano]['asignaturas'][asignatura][tipoGrupo];
        numGrupos--;
        // Si es menor que 0 se devuelve 0.
        self.cursos[self.dropdown.data[self.dropdown.actual]][ano]['asignaturas'][asignatura][tipoGrupo] = numGrupos < 0 ? 0 : numGrupos;

        self.getTotalAno(ano);

        self.cambios = true;
      };

      self.getTotalAno = function (ano) {
        var total = 0;
        var asignaturas = self.cursos[self.actual][ano].asignaturas;
        var teoricos;
        var practicos;
        var i;
        for (i = 0; i < asignaturas.length; i++) {
          teoricos = (asignaturas[i].creditosT * asignaturas[i].gruposT)
            + (asignaturas[i].creditosT * asignaturas[i].gruposTI * 1.5);
          practicos = (asignaturas[i].creditosP * asignaturas[i].gruposP)
            + (asignaturas[i].creditosP * asignaturas[i].gruposPI * 1.5);
          total += teoricos + practicos;
        }
        self.cursos[self.actual][ano].total = total;
      };
    }]);
}());

