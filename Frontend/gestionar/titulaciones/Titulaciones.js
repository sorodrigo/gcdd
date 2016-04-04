(function () {
    angular.module('SGCD')

        .controller('TitulacionesCtrl', ['$uibModal', '$scope', function ($uibModal, $scope) {

            this.titulaciones = [
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

            this.eliminar = function (item) {
                for (var i = 0; i < this.titulaciones.length; i++){
                    if (this.titulaciones[i].idTitulacion == item.idTitulacion){
                        var index = i;
                        break;
                    }
                }
                this.titulaciones.splice(index, 1);
                this.cambios = true;


            };

            var that = this;

            this.edicion = function (titul) {
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
                        that.eliminar(agregado.versionAntigua.titulacion);
                    }
                    that.cambios = false;
                    console.log(agregado.titulacion);
                    that.titulaciones.push(agregado.titulacion);
                });
            };

        }])

        .controller('EditarTitulacionCtrl', ['$uibModalInstance', '$scope', 'titulacionSeleccionada', function ($uibModalInstance, $scope, titulacionSeleccionada) {

            this.titulacion = titulacionSeleccionada;

            this.inputBool = [
                {value: true, label: 'True'},
                {value: false, label: 'False'}
            ];

            this.close = function () {
                $uibModalInstance.dismiss('cancel');
            };

            this.guardar = function () {

                if(this.titulacion.idTitulacion == null)
                {   //TODO
                    console.log("API CREATE titulacion AQUI!!");
                    this.titulacion.idTitulacion = "placeholder";
                }
                else{
                    //TODO
                    console.log("API EDIT titulacion AQUI!!");
                }

                $scope.result = {
                    titulacion: this.titulacion,
                    versionAntigua: {
                        titulacion: titulacionSeleccionada
                    }
                };


                $uibModalInstance.close($scope.result);
            }

        }]);

})();