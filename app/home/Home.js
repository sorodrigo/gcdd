'use strict';

(function () {
  angular.module('Home')

  // Controller encargado de lanzar el login modal.
    .controller('HomeCtrl', ['$uibModal', function ($uibModal) {
      var self = this;
      self.modal = function () {
        $uibModal.open({
          templateUrl: 'loginView.html',
          controller: 'ModalCtrl as modal',
          size: 'sm'
        });
      };
    }])

    .controller('ModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
      var self = this;
      self.login = {
        correo: '',
        password: '',
        close: function () {
          $uibModalInstance.dismiss('cancel');
        },
        send: function () {
          alert(self.correo + ' ' + self.password);
          $uibModalInstance.close();
        }
      };
    }]);
}());
