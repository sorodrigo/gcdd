"use strict";

(function () {
    angular.module('SGCD')

    //TODO: Preguntar como tratar la carga (creditos) de PIE. 1 PIE = 1hr/semana = 3 Creditos. Max creditos = 3 aprox
        .controller('InnovacionCtrl', [function () {
            this.cambios = 0;
            this.profesores = [
                {
                    idProfesor: 0,
                    nombre: "John",
                    apellidos: "Appleseed",
                    carga: {
                        proyectosInnovacion: 1
                    }
                },
                {
                    idProfesor: 1,
                    nombre: "James",
                    apellidos: "Rodriguez",
                    carga: {
                        proyectosInnovacion: 0
                    }
                },
                {
                    idProfesor: 2,
                    nombre: "Roger",
                    apellidos: "Waters",
                    carga: {
                        proyectosInnovacion: 2
                    }
                }
            ];

            this.editando = [this.profesores.length];
            this.valoresOriginales = [this.profesores.length];

            this.edicion = function (item) {
                this.editando[item.idProfesor] = true;
                this.valoresOriginales[item.idProfesor] = item.carga.proyectosInnovacion;
                this.cambios++;
            };

            this.aceptar = function (item) {
                this.editando[item.idProfesor] = false;
            };

            this.cancelar = function (item) {
                this.editando[item.idProfesor] = false;
                item.carga.proyectosInnovacion = this.valoresOriginales[item.idProfesor];
                this.cambios--;
            };

            this.restablecer = function (item) {
                item.carga.proyectosInnovacion = 0;
                this.cambios++;
            };

            var that = this;
            var init = function () {
                for (var i = 0; i < that.profesores.length; i++){
                    that.editando[i] = false;
                }
            };
            init();
        }])
})();