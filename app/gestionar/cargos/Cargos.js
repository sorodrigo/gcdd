'use strict';

(function () {
  angular.module('SGCD')

    .controller('CargosCtrl', ['$uibModal', function ($uibModal) {
      var self = this;
      self.modos = ['Profesores', 'Cargos'];
      self.actual = '';
      self.cambios = false;

      self.profesores = [{
        idProfesor: 1,
        nombre: "James",
        apellidos: "Rodriguez",
        categoria: {
          idCategoria: 1,
          categoria: "CATEDRATICO DE E.U.",
          orden: 1
        },
        cargo: {
          idCargo: 1,
          tipo: "Director De Escuela",
          carga: 15,
          horas: 5
        }

      }];
      self.cargos = [
        { idCargo: 1, tipo: "Director De Escuela", carga: 15, horas: 5 },
        { idCargo: 2, tipo: "Secretario de Escuela", carga: 12, horas: 4 },
        { idCargo: 3, tipo: "Director Departamento", carga: 9, horas: 3 }
      ];

      self.eliminar = function (item) {
        if (self.actual === 'Profesores') {
          self.eliminarProfesorCargo(item);
        }

        else if (self.actual === 'Cargos') {
          self.eliminarCargo(item);
        }
      };

      self.eliminarProfesorCargo = function (item) {
        var i;
        var index;
        for (i = 0; i < self.profesores.length; i++) {
          if (self.profesores[i].idProfesor === item.idProfesor) {
            index = i;
            break;
          }
        }
        if (angular.isUndefined(index)) {
          self.profesores.splice(index, 1);
        }

        self.cambios = true;
      };

      self.eliminarCargo = function (item) {
        var i;
        var index;
        for (i = 0; i < self.cargos.length; i++) {
          if (self.cargos[i].idCargo === item.idCargo) {
            index = i;
            break;
          }
        }
        if (angular.isUndefined(index)) {
          self.cargos.splice(index, 1);
        }

        self.cambios = true;
      };

      self.edicion = function (item) {
        if (self.actual === 'Profesores') {
          self.edicionProfesoresCargo(item);
        }
        else {
          self.edicionCargos(item);
        }
      };

      self.edicionProfesoresCargo = function (profesorConCargo) {
        var agregarModal = $uibModal.open({
          templateUrl: './gestionar/cargos/edicionProfesoresCargosView.html',
          controller: 'EditarProfesoresCargoCtrl as edicion',
          size: 'lg',
          resolve: {
            profCargoSeleccionado: function () {
              return angular.copy(profesorConCargo);
            }
          }
        });

        agregarModal.result.then(function (agregado) {
          if (agregado.versionAntigua.profesorConCargo != null) {
            self.eliminar(agregado.versionAntigua.profesorConCargo);
          }
          self.cambios = false;
          self.profesores.push(agregado.profesorConCargo);
        });
      };

      self.edicionCargos = function (cargo) {
        var agregarModal = $uibModal.open({
          templateUrl: './gestionar/cargos/edicionCargosView.html',
          controller: 'EditarCargoCtrl as edicion',
          size: 'lg',
          resolve: {
            cargoSeleccionado: function () {
              return angular.copy(cargo);
            }
          }
        });

        agregarModal.result.then(function (agregado) {
          self.actual = 'Cargos';
          if (agregado.versionAntigua.cargo != null) {
            self.eliminar(agregado.versionAntigua.cargo);
          }
          self.cambios = false;
          self.cargos.push(agregado.cargo);
        });
      };
    }])

    .controller('EditarProfesoresCargoCtrl', ['$uibModalInstance', '$scope', 'profCargoSeleccionado', function ($uibModalInstance, $scope, profCargoSeleccionado) {
      var self = this;
      self.profesor = profCargoSeleccionado;

      self.cargo = profCargoSeleccionado ? profCargoSeleccionado.cargo : null;

      self.inputProfesores = [
        {
          idProfesor: 1,
          nombre: "James",
          apellidos: "Rodriguez",
          categoria: {
            idCategoria: 1,
            categoria: "CATEDRATICO DE E.U.",
            orden: 1
          },
          dedicacion: {
            idDedicacion: 2,
            dedicacion: "6 + 6"
          },
          titulacion: "Ing. en Asistencias y Goles",
          despacho: 1010,
          doctor: false
        },
        {
          idProfesor: 2,
          nombre: "Frank",
          apellidos: "Abagnale Jr.",
          categoria: {
            idCategoria: 1,
            categoria: "PROFESOR TITULAR DE E.U.",
            orden: 2
          },
          dedicacion: {
            idDedicacion: 2,
            dedicacion: "6 + 6"
          },
          titulacion: "Master en Fraude Bancario",
          despacho: 2020,
          doctor: false
        },
        {
          idProfesor: 3,
          nombre: "Roger",
          apellidos: "Waters",
          categoria: {
            idCategoria: 2,
            categoria: "PROFESOR TITULAR DE E.U.",
            orden: 2
          },
          dedicacion: {
            idDedicacion: 1,
            dedicacion: "6 + 8"
          },
          titulacion: "Pink Floyd Lead Singer",
          despacho: 3003,
          doctor: false
        },
        {
          idProfesor: 4,
          nombre: "Marlon",
          apellidos: "Brando",
          categoria: {
            idCategoria: 3,
            categoria: "CATEDRATICO DE LA UNIVERSIDAD",
            orden: 1
          },
          dedicacion: {
            idDedicacion: 1,
            dedicacion: "6 + 8"
          },
          titulacion: "The Don",
          despacho: 4004,
          doctor: true
        }
      ];

      self.inputCargos = [
        { idCargo: 1, tipo: "Director De Escuela", carga: 15, horas: 5 },
        { idCargo: 2, tipo: "Secretario de Escuela", carga: 12, horas: 4 },
        { idCargo: 3, tipo: "Director Departamento", carga: 9, horas: 3 }
      ];


      self.close = function () {
        $uibModalInstance.dismiss('cancel');
      };

      self.guardar = function () {
        self.profesor.cargo = self.cargo;

        if (self.profesor.idProfesor == null) {   // TODO API CREATE profesor con cargo AQUI!!
          self.profesor.idProfesor = 'placeholder';
        }
        else {
          // TODO API EDIT profesor con cargo AQUI!!
        }


        $scope.result = {
          profesorConCargo: self.profesor,
          versionAntigua: {
            profesorConCargo: profCargoSeleccionado
          }
        };


        $uibModalInstance.close($scope.result);
      };
    }])

    .controller('EditarCargoCtrl', ['$uibModalInstance', '$scope', 'cargoSeleccionado', function ($uibModalInstance, $scope, cargoSeleccionado) {
      var self = this;
      self.inputCargos = [
        { idCargo: 1, tipo: "Director De Escuela", carga: 15, horas: 5 },
        { idCargo: 2, tipo: "Secretario de Escuela", carga: 12, horas: 4 },
        { idCargo: 3, tipo: "Director Departamento", carga: 9, horas: 3 }
      ];

      self.cargo = cargoSeleccionado;

      self.close = function () {
        $uibModalInstance.dismiss('cancel');
      };

      self.setCarga = function (horas) {
        self.cargo.carga = horas * 3;
      };

      self.guardar = function () {
        if (self.cargo.idCargo == null) {   // TODO API CREATE cargo AQUI!!
          self.cargo.idCargo = 'placeholder';
        }
        else {
          // TODO API EDIT cargo AQUI!!
        }

        $scope.result = {
          cargo: self.cargo,
          versionAntigua: {
            cargo: cargoSeleccionado
          }
        };

        $uibModalInstance.close($scope.result);
      };
    }]);
}());
