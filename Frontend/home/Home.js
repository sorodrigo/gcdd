/**
 * Created by Rodrigo on 20/12/15.
 */
(function() {
    angular.module('Home')

        //Controller encargado de lanzar el login modal.
        .controller('HomeCtrl', ['$uibModal', function ($uibModal) {

            this.modal = function () {

                $uibModal.open({
                    templateUrl: 'loginView.html',
                    controller: 'ModalCtrl as modal',
                    size: 'sm'
                });
            };


        }])

        .controller('ModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {

            this.login = {
                correo: "",
                password: "",
                close: function () {
                    $uibModalInstance.dismiss('cancel');
                },
                send: function () {
                    alert(this.correo + " " + this.password);
                    $uibModalInstance.close();
                }
            };

        }]);
})();