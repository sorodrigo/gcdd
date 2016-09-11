/**
 * Created by Rodrigo on 07/09/16.
 */
"use strict";

(function () {
    angular.module('SGCD')

    //TODO: Preguntar como tratar la carga (creditos) de PIE. 1 PIE = 1hr/semana = 3 Creditos. Max creditos = 3 aprox
        .controller('TrabajosCtrl', [function () {
            this.cambios = 0;
            this.profesores = [
                {
                    idProfesor: 0,
                    nombre: "John",
                    apellidos: "Appleseed",
                    carga: {
                        trabajosFinales: {
                            tfg: 2,
                            tfm: 0
                        }
                    }
                },
                {
                    idProfesor: 1,
                    nombre: "James",
                    apellidos: "Rodriguez",
                    carga: {
                        trabajosFinales: {
                            tfg: 1,
                            tfm: 1
                        }
                    }
                },
                {
                    idProfesor: 2,
                    nombre: "Roger",
                    apellidos: "Waters",
                    carga: {
                        trabajosFinales: {
                            tfg: 0,
                            tfm: 3
                        }
                    }
                }
            ];

            this.editando = [this.profesores.length];
            this.valoresOriginales = [this.profesores.length];

            this.edicion = function (item) {
                this.editando[item.idProfesor] = true;
                this.valoresOriginales[item.idProfesor] = item.carga.trabajosFinales;
                this.cambios++;
            };

            this.cancelar = function (item) {
                this.editando[item.idProfesor] = false;
                item.carga.trabajosFinales = this.valoresOriginales[item.idProfesor];
                this.cambios--;
            };

            this.restablecer = function (item) {
                item.carga.trabajosFinales = 0;
                this.cambios++;
            };

            var that = this;
            var init = function () {
                for (var i = 0; i < that.profesores.length; i++) {
                    that.editando[i] = false;
                }
            };
            init();
        }])
})();