'use strict';

(function () {
  angular.module('SGCD')

  // TODO: Preguntar como tratar la carga (creditos) de PIE.
  // TODO: 1 PIE = 1hr/semana = 3 Creditos. Max creditos = 3 aprox
    .controller('TrabajosCtrl', [function () {
      var self = this;
      self.cambios = 0;
      self.profesores = [
        {
          idProfesor: 0,
          nombre: "John",
          apellidos: "Appleseed",
          carga: {
            trabajosFinales: {
              tfg: 2,
              tfm: 0
            }
          }
        },
        {
          idProfesor: 1,
          nombre: "James",
          apellidos: "Rodriguez",
          carga: {
            trabajosFinales: {
              tfg: 1,
              tfm: 1
            }
          }
        },
        {
          idProfesor: 2,
          nombre: "Roger",
          apellidos: "Waters",
          carga: {
            trabajosFinales: {
              tfg: 0,
              tfm: 3
            }
          }
        }
      ];

      self.editando = [self.profesores.length];
      self.valoresOriginales = [self.profesores.length];

      self.edicion = function (item) {
        self.editando[item.idProfesor] = true;
        self.valoresOriginales[item.idProfesor] = item.carga.trabajosFinales;
        self.cambios++;
      };

      self.cancelar = function (item) {
        self.editando[item.idProfesor] = false;
        item.carga.trabajosFinales = self.valoresOriginales[item.idProfesor];
        self.cambios--;
      };

      self.restablecer = function (item) {
        item.carga.trabajosFinales = 0;
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
