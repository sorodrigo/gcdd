/**
 * Created by Rodrigo on 20/12/15.
 */
"use strict";

(function () {

    angular.module('SGCD')

    //Directive encargada de cargar por medio de un elemento las tablas de las gestionar
        .directive('asignaturasTable', function () {
            return {
                restrict: 'E',
                templateUrl: './elegir/asignaturas-table.html'
            };
        })

        //Controller encargado de el boton que selecciona la titulacion
        // y de cargar los panels de cada curso dependiendo de que titulacion se haya elegido.
        .controller('ElegirCtrl', ['$window', function ($window) {

            //lista de titulaciones
            this.titulaciones = [
                'Ingenieria Software',
                'Ingenieria Computadores',
                'Master Web',
                'Master Sistemas Distribuidos'];

            //tituacion seleccionada
            this.actual = "";

            this.accordion = {
                oneAtATime: true,
                setOneAtATime: function () { //Permite abrir solo un accordion a la vez
                    if ($window.innerWidth >= 1024) {
                        this.oneAtATime = false;
                    }
                    else {
                        this.oneAtATime = true;
                    }
                }
            };

            //Diccionario que contiene las titulaciones, sus cursos, y las gestionar de dichos cursos
            this.cursos = {
                'Ingenieria Software': [
                    {
                        total: 0,
                        asignaturas: [
                            {
                                nombre: 'Analisis Matematico',
                                creditosT: 6,
                                creditosP: 0,
                                gruposT: 0,
                                gruposTI: 0,
                                gruposP: 0,
                                gruposPI: 0
                            }
                        ]
                    },

                    {
                        total: 0,
                        asignaturas: [
                            {
                                nombre: 'Sistemas Operativos',
                                creditosT: 3,
                                creditosP: 3,
                                gruposT: 0,
                                gruposTI: 0,
                                gruposP: 0,
                                gruposPI: 0

                            },
                            {
                                nombre: 'POOA',
                                creditosT: 3,
                                creditosP: 3,
                                gruposT: 0,
                                gruposTI: 0,
                                gruposP: 0,
                                gruposPI: 0
                            }
                        ]
                    },

                    {
                        total: 0,
                        asignaturas: []
                    },

                    {
                        total: 0,
                        asignaturas: [
                            {
                                nombre: 'Agentes de la Informacion',
                                creditosT: 2,
                                creditosP: 2,
                                gruposT: 0,
                                gruposTI: 0,
                                gruposP: 0,
                                gruposPI: 0
                            }
                        ]
                    }
                ],
                'Master Web': [
                    {
                        total: 0
                    },

                    {
                        total: 0
                    }
                ]
            };

            this.grupoMas = function (tipo, ano, asignatura) {

                var grupo = 'grupos' + tipo;

                if (tipo.length > 1) {
                    var creditos = 'creditos' + tipo.substring(0, 1);
                }
                else {
                    var creditos = 'creditos' + tipo;
                }
                var numCreditos = this.cursos[this.actual][ano]['asignaturas'][asignatura][creditos];

                if (numCreditos > 0) {
                    var gruposElegidos = this.cursos[this.actual][ano]['asignaturas'][asignatura][grupo];

                    gruposElegidos++;
                    this.cursos[this.actual][ano]['asignaturas'][asignatura][grupo] = gruposElegidos;

                    this.getTotalAno(ano);

                    this.cambios = true;
                }
            };

            this.grupoMenos = function (tipo, ano, asignatura) {

                var grupo = 'grupos' + tipo;
                var numGrupos = this.cursos[this.actual][ano]['asignaturas'][asignatura][grupo];
                numGrupos--;

                //Si es menor que 0 se devuelve 0.
                (numGrupos < 0) ? (this.cursos[this.dropdown.data[this.dropdown.actual]][ano]['asignaturas'][asignatura][grupo] = 0)
                    : this.cursos[this.actual][ano]['asignaturas'][asignatura][grupo] = numGrupos;

                this.getTotalAno(ano);

                this.cambios = true;
            };

            this.getTotalAno = function (ano) {
                var total = 0;
                var asignaturas = this.cursos[this.actual][ano]['asignaturas'];
                for (var a in asignaturas) {
                    var teoricos = (asignaturas[a].creditosT * asignaturas[a].gruposT) + (asignaturas[a].creditosT * asignaturas[a].gruposTI * 1.5);
                    var practicos = (asignaturas[a].creditosP * asignaturas[a].gruposP) + (asignaturas[a].creditosP * asignaturas[a].gruposPI * 1.5);
                    total += teoricos + practicos;
                    console.log(total)
                }
                this.cursos[this.actual][ano].total = total;
            }


        }])

})();

