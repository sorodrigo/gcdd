"use strict";

(function () {
    angular.module('SGCD')

        .controller('PersonalCtrl', [function () {

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
        }]);
})();