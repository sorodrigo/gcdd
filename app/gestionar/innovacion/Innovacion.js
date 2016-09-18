'use strict';

(function () {
  angular.module('SGCD')
  // TODO: Preguntar como tratar la carga (creditos) de PIE.
  // TODO: 1 PIE = 1hr/semana = 3 Creditos. Max creditos = 3 aprox
    .controller('InnovacionCtrl', [function () {
      var self = this;
      self.cambios = 0;
      self.profesores = [
        {
          idProfesor: 0,
          nombre: "John",
          apellidos: "Appleseed",
          carga: {
            proyectosInnovacion: 1
          }
        },
        {
          idProfesor: 1,
          nombre: "James",
          apellidos: "Rodriguez",
          carga: {
            proyectosInnovacion: 0
          }
        },
        {
          idProfesor: 2,
          nombre: "Roger",
          apellidos: "Waters",
          carga: {
            proyectosInnovacion: 2
          }
        }
      ];

      self.editando = [self.profesores.length];
      self.valoresOriginales = [self.profesores.length];

      self.edicion = function (item) {
        self.editando[item.idProfesor] = true;
        self.valoresOriginales[item.idProfesor] = item.carga.proyectosInnovacion;
        self.cambios++;
      };

      self.aceptar = function (item) {
        self.editando[item.idProfesor] = false;
      };

      self.cancelar = function (item) {
        self.editando[item.idProfesor] = false;
        item.carga.proyectosInnovacion = self.valoresOriginales[item.idProfesor];
        self.cambios--;
      };

      self.restablecer = function (item) {
        item.carga.proyectosInnovacion = 0;
        self.cambios++;
      };

      function init() {
        var i;
        for (i = 0; i < self.profesores.length; i++) {
          self.editando[i] = false;
        }
      }

      init();
    }]);
}());
