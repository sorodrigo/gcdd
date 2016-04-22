(function () {
    angular.module('SGCD')

        .controller('CargosCtrl', ['$uibModal', '$scope', function ($uibModal, $scope) {

            this.modos = ["Profesores", "Cargos"];
            this.modoActual = "Profesores";

            this.profesoresConCargo = [{
                idProfesor: 1,
                nombre: "James",
                apellidos: "Rodriguez",
                cargo: {
                    idCargo: 1,
                    tipo: "Director De Escuela",
                    horas: 15,
                    carga: 5
                }

            }];
            this.cargos = [
                {idCargo: 1, tipo: "Director De Escuela", carga: 15, horas: 5},
                {idCargo: 2, tipo: "Secretario de Escuela", carga: 12, horas: 4},
                {idCargo: 3, tipo: "Director Departamento", carga: 9, horas: 3},
            ];

            this.eliminar = function(item){

                if(this.modoActual = "Profesores"){
                    this.eliminarProfesorCargo(item);
                }

                else{
                    this.eliminarCargo(item);
                }
            };

            this.eliminarProfesorCargo = function (item) {

                for (var i = 0; i < this.profesoresConCargo.length; i++) {
                    if (this.profesoresConCargo[i].idProfesor == item.idProfesor) {
                        var index = i;
                        break;
                    }
                }
                this.profesoresConCargo.splice(index, 1);

                this.cambios = true;

            };

            this.eliminarCargo = function (item) {

                for (var i = 0; i < this.cargos.length; i++) {
                    if (this.cargos[i].idCargo == item.idCargo) {
                        var index = i;
                        break;
                    }
                }
                this.cargos.splice(index, 1);

                this.cambios = true;
            };

            this.edicion = function (item) {


                if (this.modoActual == "Profesores") {
                    this.edicionProfesoresCargo(item);
                }
                else {
                    this.edicionCargos(item);
                }
            };

            var that = this;

            this.edicionProfesoresCargo = function (profesorConCargo) {
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
                        that.eliminar(agregado.versionAntigua.profesorConCargo);
                    }
                    that.cambios = false;
                    console.log(agregado.profesorConCargo);
                    that.profesoresConCargo.push(agregado.profesorConCargo);
                });
            };

            this.edicionCargos = function (cargo) {
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
                    if (agregado.versionAntigua.cargo != null) {
                        that.eliminar(agregado.versionAntigua.cargo);
                    }
                    that.cambios = false;
                    console.log(agregado.cargo);
                    that.cargos.push(agregado.cargo);
                });
            };

        }])

        .controller('EditarProfesoresCargoCtrl', ['$uibModalInstance', '$scope', 'profCargoSeleccionado', function ($uibModalInstance, $scope, profCargoSeleccionado) {

            this.inputCargos = [
                {idCargo: 1, tipo: "Director De Escuela", carga: 15, horas: 5},
                {idCargo: 2, tipo: "Secretario de Escuela", carga: 12, horas: 4},
                {idCargo: 3, tipo: "Director Departamento", carga: 9, horas: 3},
            ];


            this.profesorConCargo = profCargoSeleccionado;

            this.close = function () {
                $uibModalInstance.dismiss('cancel');
            };

            this.guardar = function () {

                if (this.profesorConCargo.idProfesor == null) {   //TODO
                    console.log("API CREATE cargo AQUI!!");
                    this.profesorConCargo.idProfesor = "placeholder";
                }
                else {
                    //TODO
                    console.log("API EDIT cargo AQUI!!");
                }

                $scope.result = {
                    profesorConCargo: this.profesorConCargo,
                    versionAntigua: {
                        profesorConCargo: profCargoSeleccionado
                    }
                };


                $uibModalInstance.close($scope.result);
            }

        }])
    
        .controller('EditarCargoCtrl', ['$uibModalInstance', '$scope', 'cargoSeleccionado', function ($uibModalInstance, $scope, cargoSeleccionado){
            
        }]);
})();