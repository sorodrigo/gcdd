/**
 * Created by Rodrigo on 20/12/15.
 */

(function () {
    angular.module('SGCD')

        .controller('AsignaturasCtrl', [function () {

            this.titulaciones = [
                'Ingenieria Software',
                'Ingenieria Computadores',
                'Master Web',
                'Master Sistemas Distribuidos'];

            this.actual = "";

            //Diccionario que contiene las titulaciones, sus cursos, y las gestionar de dichos cursos
            this.cursos = {
                'Ingenieria Software': [
                    {
                        ano: 1,
                        total: 0,
                        asignaturas: [
                            {
                                nombre: 'Analisis Matematico',
                                creditosT: 5,
                                creditosP: 0,
                                gruposT: 2,
                                gruposTI: 1,
                                gruposP: 0,
                                gruposPI: 0,
                                num_alumnos: 100,
                                num_grupos: 3,
                                num_desdobles: 0
                            }
                        ]
                    },

                    {
                        ano: 2,
                        total: 0,
                        asignaturas: [
                            {
                                nombre: 'Sistemas Operativos',
                                creditosT: 3,
                                creditosP: 3,
                                gruposT: 2,
                                gruposTI: 0,
                                gruposP: 4,
                                gruposPI: 0,
                                num_alumnos: 100,
                                num_grupos: 3,
                                num_desdobles: 4

                            },
                            {
                                nombre: 'POOA',
                                creditosT: 3,
                                creditosP: 3,
                                gruposT: 1,
                                gruposTI: 1,
                                gruposP: 5,
                                gruposPI: 0,
                                num_alumnos: 80,
                                num_grupos: 3,
                                num_desdobles: 4
                            }
                        ]
                    },

                    {
                        ano: 3,
                        total: 0,
                        asignaturas: []
                    },

                    {
                        ano: 4,
                        total: 0,
                        asignaturas: [
                            {
                                nombre: 'Agentes de la Informacion',
                                creditosT: 2,
                                creditosP: 2,
                                gruposT: 2,
                                gruposTI: 0,
                                gruposP: 2,
                                gruposPI: 0,
                                num_alumnos: 60,
                                num_grupos: 2,
                                num_desdobles: 2
                            }
                        ]
                    }
                ],
                'Master Web': [
                    {
                        ano: 1,
                        total: 0,
                        asignaturas: [
                            {
                                nombre: 'Opensource Frameworks',
                                creditosT: 5,
                                creditosP: 1,
                                gruposT: 2,
                                gruposTI: 1,
                                gruposP: 6,
                                gruposPI: 0,
                                num_alumnos: 30,
                                num_grupos: 3,
                                num_desdobles: 6
                            }
                        ]
                    },

                    {
                        ano: 2,
                        total: 0
                    }
                ]
            };

        }]);
})();