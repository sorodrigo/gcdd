"use strict";

(function () {
    angular.module('SGCD')

        .controller('PersonalCtrl', ['$uibModal', '$scope', function ($uibModal, $scope) {

            this.personal = [
                {
                    categoria: {
                        idCategoria: 1,
                        categoria: "CATEDRATICO UNIVERSIDAD",
                        orden: 1
                    },
                    dedicacion: {
                        idDedicacion: 1,
                        dedicacion: "6 + 8",
                        equivalencia: 1
                    },
                    numero: 1
                },
                {
                    categoria: {
                        idCategoria: 1,
                        categoria: "TITULAR UNIVERSIDAD",
                        orden: 1
                    },
                    dedicacion: {
                        idDedicacion: 2,
                        dedicacion: "6 + 8",
                        equivalencia: 1
                    },
                    numero: 23
                },
                {
                    categoria: {
                        idCategoria: 1,
                        categoria: "CATEDRATICO DE E.U.",
                        orden: 1
                    },
                    dedicacion: {
                        idDedicacion: 2,
                        dedicacion: "6 + 8",
                        equivalencia: 1
                    },
                    numero: 3
                },
                {
                    categoria: {
                        idCategoria: 1,
                        categoria: "CATEDRATICO DE E.U.",
                        orden: 1
                    },
                    dedicacion: {
                        idDedicacion: 2,
                        dedicacion: "6 + 6",
                        equivalencia: 0.75
                    },
                    numero: 14
                },
                {
                    categoria: {
                        idCategoria: 1,
                        categoria: "TITULAR DE E.U.",
                        orden: 1
                    },
                    dedicacion: {
                        idDedicacion: 2,
                        dedicacion: "6 + 8",
                        equivalencia: 1
                    },
                    numero: 47
                },
                {
                    categoria: {
                        idCategoria: 1,
                        categoria: "CONTRATADO DOCTOR",
                        orden: 1
                    },
                    dedicacion: {
                        idDedicacion: 2,
                        dedicacion: "6 + 8",
                        equivalencia: 1
                    },
                    numero: 5
                },
                {
                    categoria: {
                        idCategoria: 1,
                        categoria: "COLABORADOR",
                        orden: 1
                    },
                    dedicacion: {
                        idDedicacion: 2,
                        dedicacion: "6 + 8",
                        equivalencia: 1
                    },
                    numero: 2
                },
                {
                    categoria: {
                        idCategoria: 1,
                        categoria: "TITULAR UNIVERSIDAD INTERINO",
                        orden: 1
                    },
                    dedicacion: {
                        idDedicacion: 2,
                        dedicacion: "6 + 8",
                        equivalencia: 1
                    },
                    numero: 6
                },
                {
                    categoria: {
                        idCategoria: 1,
                        categoria: "AYUDANTE DOCTOR",
                        orden: 1
                    },
                    dedicacion: {
                        idDedicacion: 2,
                        dedicacion: "6 + 6",
                        equivalencia: 0.75
                    },
                    numero: 2
                }
            ];

            this.info = function (cat) {
                $uibModal.open({
                    templateUrl: './gestionar/personal/infoPersonalView.html',
                    controller: 'InfoPersonal as info',
                    size: 'md',
                    resolve: {
                        categoriaSeleccionada: function () {
                            return angular.copy(cat);
                        }
                    }
                });
            };

        }])

        .controller('InfoPersonal', ['$uibModalInstance', 'categoriaSeleccionada', function ($uibModalInstance, categoriaSeleccionada) {

            this.categoriaConDedicacion = categoriaSeleccionada;

            //TODO: API Get Profesores by categoriaConDedicacion
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

            this.close = function() {
                $uibModalInstance.dismiss('close');
            };

        }])
})();