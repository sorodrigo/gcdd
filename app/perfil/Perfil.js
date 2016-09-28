/**
 * Created by Rodrigo on 20/12/15.
 */
'use strict';

(function () {
  angular.module('SGCD')

  // Controller encargado de actualizar el correo del usuario y calcular la carga docente
    .controller('PerfilCtrl', ['$uibModal', function ($uibModal) {
      var self = this;
      self.profesor = {
        correo: "john.appleseed@example.com",
        nombre: "John",
        apellidos: "Appleseed",
        titulacion: "Ingenieria Informatica",
        categoria: "Catedratico E.U.",
        dedicacion: "Tiempo Completo",
        despacho: "4310",
        num_sexenio: 0,
        doctor: true,
        telefono: 623456789,
        fecha_alta: "01/06/2008",
        fecha_posesion: "03/04/2011",
        carga: {
          prevision: 30,
          proyectosInnovacion: 3,
          practicasProfesionales: 1,
          trabajosFinales: 3,
          cargo: 2,
          sexenioActivo: true

        }
      };

      self.modificar = function () {
        $uibModal.open({
          templateUrl: './perfil/modificarView.html',
          controller: 'ModificarCtrl as modificar',
          size: 'md'
        });
      };
      // TODO: cargaTotal
      self.cargaTotal = function () {
        var carga = self.profesor.carga;
        var total = carga.prevision - carga.proyectosInnovacion - carga.practicasProfesionales
          - carga.trabajosFinales - carga.cargo;
        return total;
      };
    }])

    // Controller encargado de crear el Pie Chart
    .controller('PieGraficoCtrl', [function () {
      var self = this;
      self.profesor = {
        correo: "john.appleseed@example.com",
        nombre: "John",
        apellidos: "Appleseed",
        titulacion: "Ingenieria Informatica",
        categoria: "Catedratico E.U.",
        dedicacion: "Tiempo Completo",
        despacho: "4310",
        num_sexenio: 0,
        doctor: true,
        telefono: 623456789,
        fecha_alta: "01/06/2008",
        fecha_posesion: "03/04/2011",
        carga: {
          prevision: 30,
          proyectosInnovacion: 3,
          practicasProfesionales: 1,
          trabajosFinales: 3,
          cargo: 2,
          sexenioActivo: true

        }
      };

      self.options = {
        chart: {
          type: 'pieChart',
          height: 450,
          x: function (d) {
            return d.key;
          },
          y: function (d) {
            return d.y;
          },
          donut: false,
          showLabels: false,
          duration: 500,
          legend: {
            margin: {
              top: 5,
              right: 0,
              bottom: 5,
              left: 0
            }
          }
        }
      };

      // TODO: data (proyectos innovacion)
      self.data = [
        {
          key: 'Proyectos Innovacion',
          y: self.profesor.carga.proyectosInnovacion
        },
        {
          key: 'Practicas Profesionales',
          y: self.profesor.carga.practicasProfesionales
        },
        {
          key: 'Trabajos Finales',
          y: self.profesor.carga.trabajosFinales
        },
        {
          key: 'Cargo',
          y: self.profesor.carga.cargo
        },
        {
          key: 'Total a Elegir',
          y: (self.profesor.carga.prevision - self.profesor.carga.proyectosInnovacion
          - self.profesor.carga.practicasProfesionales - self.profesor.carga.trabajosFinales
          - self.profesor.carga.cargo)
        },
        {
          key: 'Créditos Elegidos',
          y: 6
        }
      ];
    }]);
}());
