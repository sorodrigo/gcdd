'use strict';

(function () {
  angular.module('SGCD')
    .controller('ProfesoresCtrl', ['$uibModal', function ($uibModal) {
      var self = this;
      self.cambios = false;

      self.profesores = [
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

      self.eliminar = function (item) {
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

      self.edicion = function (prof) {
        var agregarModal = $uibModal.open({
          templateUrl: './gestionar/profesores/edicionProfesoresView.html',
          controller: 'EditarProfesorCtrl as edicion',
          size: 'lg',
          resolve: {
            profesorSeleccionado: function () {
              return angular.copy(prof);
            }
          }
        });

        agregarModal.result.then(function (agregado) {
          if (agregado.versionAntigua.profesor != null) {
            self.eliminar(agregado.versionAntigua.profesor);
          }
          self.cambios = false;
          self.profesores.push(agregado.profesor);
        });
      };
    }])

    .controller('EditarProfesorCtrl', ['$uibModalInstance', '$scope', 'profesorSeleccionado', function ($uibModalInstance, $scope, profesorSeleccionado) {
      var self = this;
      self.profesor = profesorSeleccionado;

      self.inputCategorias = [
        { idCategoria: 1, categoria: "CATEDRATICO DE E.U.", orden: 1 },
        { idCategoria: 2, categoria: "PROFESOR TITULAR DE E.U.", orden: 2 },
        { idCategoria: 3, categoria: "CATEDRATICO DE LA UNIVERSIDAD", orden: 1 }
      ];

      self.inputDedicacion = [
        { idDedicacion: 1, dedicacion: "6 + 8" },
        { idDedicacion: 2, dedicacion: "6 + 6" }
      ];

      self.inputBool = [
        { value: true, label: 'True' },
        { value: false, label: 'False' }
      ];

      self.close = function () {
        $uibModalInstance.dismiss('cancel');
      };

      self.guardar = function () {
        if (self.profesor.idProfesor == null) {   // TODO API CREATE profesor AQUI!!
          self.profesor.idProfesor = 'placeholder';
        }
        else {
          // TODO API EDIT profesor AQUI!!
        }

        $scope.result = {
          profesor: self.profesor,
          versionAntigua: {
            profesor: profesorSeleccionado
          }
        };

        $uibModalInstance.close($scope.result);
      };
    }]);
}());
