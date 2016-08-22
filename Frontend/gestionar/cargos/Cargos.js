"use strict";

(function () {
    angular.module('SGCD')

        .controller('CargosCtrl', ['$uibModal', '$scope', function ($uibModal, $scope) {

            this.modos = ["Profesores", "Cargos"];
            this.actual = "";
            this.cambios = false;

            this.profesores = [{
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
            this.cargos = [
                {idCargo: 1, tipo: "Director De Escuela", carga: 15, horas: 5},
                {idCargo: 2, tipo: "Secretario de Escuela", carga: 12, horas: 4},
                {idCargo: 3, tipo: "Director Departamento", carga: 9, horas: 3},
            ];

            this.eliminar = function (item) {
                if (this.actual == "Profesores") {
                    this.eliminarProfesorCargo(item);
                }

                else if (this.actual == "Cargos") {
                    this.eliminarCargo(item);
                }
            };

            this.eliminarProfesorCargo = function (item) {

                for (var i = 0; i < this.profesores.length; i++) {
                    if (this.profesores[i].idProfesor == item.idProfesor) {
                        var index = i;
                        break;
                    }
                }
                if (typeof(index) != 'undefined') {
                    this.profesores.splice(index, 1);
                }

                this.cambios = true;

            };

            this.eliminarCargo = function (item) {
                for (var i = 0; i < this.cargos.length; i++) {
                    if (this.cargos[i].idCargo == item.idCargo) {
                        var index = i;
                        break;
                    }
                }
                if (typeof(index) != 'undefined') {
                    this.cargos.splice(index, 1);
                }

                this.cambios = true;
            };

            this.edicion = function (item) {


                if (this.actual == "Profesores") {
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
                    that.profesores.push(agregado.profesorConCargo);
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
                    that.actual = "Cargos";
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

            this.profesor = profCargoSeleccionado;

            this.cargo = profCargoSeleccionado ? profCargoSeleccionado.cargo : null;

            this.inputProfesores = [
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

            this.inputCargos = [
                {idCargo: 1, tipo: "Director De Escuela", carga: 15, horas: 5},
                {idCargo: 2, tipo: "Secretario de Escuela", carga: 12, horas: 4},
                {idCargo: 3, tipo: "Director Departamento", carga: 9, horas: 3},
            ];


            this.close = function () {
                $uibModalInstance.dismiss('cancel');
            };

            this.guardar = function () {

                this.profesor.cargo = this.cargo;

                if (this.profesor.idProfesor == null) {   //TODO
                    console.log("API CREATE profesor con cargo AQUI!!");
                    this.profesor.idProfesor = "placeholder";
                }
                else {
                    //TODO
                    console.log("API EDIT profesor con cargo AQUI!!");
                }


                $scope.result = {
                    profesorConCargo: this.profesor,
                    versionAntigua: {
                        profesorConCargo: profCargoSeleccionado
                    }
                };


                $uibModalInstance.close($scope.result);
            }

        }])

        .controller('EditarCargoCtrl', ['$uibModalInstance', '$scope', 'cargoSeleccionado', function ($uibModalInstance, $scope, cargoSeleccionado) {
            this.inputCargos = [
                {idCargo: 1, tipo: "Director De Escuela", carga: 15, horas: 5},
                {idCargo: 2, tipo: "Secretario de Escuela", carga: 12, horas: 4},
                {idCargo: 3, tipo: "Director Departamento", carga: 9, horas: 3},
            ];

            this.cargo = cargoSeleccionado;

            this.close = function () {
                $uibModalInstance.dismiss('cancel');
            };

            this.setCarga = function (horas) {
                this.cargo.carga = horas * 3;
                console.log(this.cargo.carga);
            };

            this.guardar = function () {

                if (this.cargo.idCargo == null) {   //TODO
                    console.log("API CREATE cargo AQUI!!");
                    this.cargo.idCargo = "placeholder";
                }
                else {
                    //TODO
                    console.log("API EDIT cargo AQUI!!");
                }

                $scope.result = {
                    cargo: this.cargo,
                    versionAntigua: {
                        cargo: cargoSeleccionado
                    }
                };

                $uibModalInstance.close($scope.result);
            }
        }]);
})();