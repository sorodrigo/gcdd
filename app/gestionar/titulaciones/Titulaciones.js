'use strict';

(function () {
  angular.module('SGCD')

    .controller('TitulacionesCtrl', ['$uibModal', '$scope', function ($uibModal, $scope) {
      var self = this;
      self.cambios = false;

      self.titulaciones = [
        {
          idTitulacion: 1,
          nombre: 'Ingeniería Del Software (2009)',
          plan: 2009,
          prevision: 100,
          valida: true
        },
        {
          idTitulacion: 2,
          nombre: 'Ingeniería Del Software (2011)',
          plan: 2011,
          prevision: 150,
          valida: true
        },
        {
          idTitulacion: 3,
          nombre: 'Ingeniería De Computadores (2009)',
          plan: 2009,
          prevision: 100,
          valida: true
        },
        {
          idTitulacion: 4,
          nombre: 'Ingeniería De Computadores (2011)',
          plan: 2011,
          prevision: 150,
          valida: true
        },
        {
          idTitulacion: 5,
          nombre: 'Máster en Ingeniería Web',
          plan: 2009,
          prevision: 150,
          valida: true
        }
      ];

      self.eliminar = function (item) {
        var i;
        var index;
        for (i = 0; i < self.titulaciones.length; i++) {
          if (self.titulaciones[i].idTitulacion === item.idTitulacion) {
            index = i;
            break;
          }
        }
        if (angular.isUndefined(index)) {
          self.titulaciones.splice(index, 1);
        }
        self.cambios = true;
      };

      self.edicion = function (titul) {
        var agregarModal = $uibModal.open({
          templateUrl: './gestionar/titulaciones/edicionTitulacionesView.html',
          controller: 'EditarTitulacionCtrl as edicion',
          size: 'lg',
          resolve: {
            titulacionSeleccionada: function () {
              return angular.copy(titul);
            }
          }
        });

        agregarModal.result.then(function (agregado) {
          if (agregado.versionAntigua.titulacion != null) {
            self.eliminar(agregado.versionAntigua.titulacion);
          }
          self.cambios = false;
          self.titulaciones.push(agregado.titulacion);
        });
      };
    }])

    .controller('EditarTitulacionCtrl', ['$uibModalInstance', '$scope', 'titulacionSeleccionada', function ($uibModalInstance, $scope, titulacionSeleccionada) {
      var self = this;
      self.titulacion = titulacionSeleccionada;

      self.inputBool = [
        { value: true, label: 'True' },
        { value: false, label: 'False' }
      ];

      self.close = function () {
        $uibModalInstance.dismiss('cancel');
      };

      self.guardar = function () {
        if (self.titulacion.idTitulacion == null) {   // TODO API CREATE titulacion AQUI!!
          self.titulacion.idTitulacion = 'placeholder';
        }
        else {
          // TODO API EDIT titulacion AQUI!!
        }

        $scope.result = {
          titulacion: self.titulacion,
          versionAntigua: {
            titulacion: titulacionSeleccionada
          }
        };


        $uibModalInstance.close($scope.result);
      };
    }]);
}());
