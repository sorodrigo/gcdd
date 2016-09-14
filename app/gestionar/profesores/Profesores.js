"use strict";

(function () {
    angular.module('SGCD')

        .controller('ProfesoresCtrl', ['$uibModal', '$scope', function ($uibModal, $scope) {

            this.cambios = false;

            this.profesores = [
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

            this.eliminar = function (item) {
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

            var that = this;

            this.edicion = function (prof) {
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
                        that.eliminar(agregado.versionAntigua.profesor);
                    }
                    that.cambios = false;
                    console.log(agregado.profesor);
                    that.profesores.push(agregado.profesor);
                });
            };

        }])

        .controller('EditarProfesorCtrl', ['$uibModalInstance', '$scope', 'profesorSeleccionado', function ($uibModalInstance, $scope, profesorSeleccionado) {

            this.profesor = profesorSeleccionado;

            this.inputCategorias = [
                {idCategoria: 1, categoria: "CATEDRATICO DE E.U.", orden: 1},
                {idCategoria: 2, categoria: "PROFESOR TITULAR DE E.U.", orden: 2},
                {idCategoria: 3, categoria: "CATEDRATICO DE LA UNIVERSIDAD", orden: 1}
            ];

            this.inputDedicacion = [
                {idDedicacion: 1, dedicacion: "6 + 8"},
                {idDedicacion: 2, dedicacion: "6 + 6"},
            ];

            this.inputBool = [
                {value: true, label: 'True'},
                {value: false, label: 'False'}
            ];

            this.close = function () {
                $uibModalInstance.dismiss('cancel');
            };

            this.guardar = function () {

                if (this.profesor.idProfesor == null) {   //TODO
                    console.log("API CREATE profesor AQUI!!");
                    this.profesor.idProfesor = "placeholder";
                }
                else {
                    //TODO
                    console.log("API EDIT profesor AQUI!!");
                }

                $scope.result = {
                    profesor: this.profesor,
                    versionAntigua: {
                        profesor: profesorSeleccionado
                    }
                };


                $uibModalInstance.close($scope.result);
            }
        }]);

})();