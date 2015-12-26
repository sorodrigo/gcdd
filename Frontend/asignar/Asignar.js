/**
 * Created by Rodrigo on 20/12/15.
 */

(function () {
    angular.module('SGCD')

        //Controller encargado de cargar y manejar la tabla de las gestionar elegidas
        .controller('AsignarCtrl', [function () {

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

            this.estadoGrupo = function (titulacion, ano, asignatura) {
                var a = this.cursos[titulacion][ano].asignaturas[asignatura];

                if (a.num_grupos > (a.gruposT + a.gruposTI)) {
                    return 'celda-amarilla';
                }
                else if (a.num_grupos < (a.gruposT + a.gruposTI)) {
                    return 'celda-roja';
                }

                return '';
            }

            this.estadoDesdoble = function (titulacion, ano, asignatura) {
                var a = this.cursos[titulacion][ano].asignaturas[asignatura];

                if (a.num_desdobles > (a.gruposP + a.gruposPI)) {
                    return 'celda-amarilla';
                }
                else if (a.num_desdobles < (a.gruposP + a.gruposPI)) {
                    return 'celda-roja';
                }

                return '';
            }
        }])

        .controller('EditarGrupoCtrl', ['$routeParams', function ($routeParams) {

            //Variable de control, cuando hay cambios se habilita la opcion de guardar.
            this.cambios = false;
            this.titulacion = decodeURI($routeParams.titulacion);
            this.asignatura = decodeURI($routeParams.asignatura);
            this.tipo = $routeParams.tipo == 'T' ? 'Teoría' : 'Práctica';

            this.elecciones = [
                {
                    nombre: "Buzz",
                    apellidos: "Lightyear",
                    categoria: {
                        categoria: "CATEDRATICO DE E.U.",
                        orden: 1
                    },
                    dedicacion: "6 + 8"
                },
                {
                    nombre: "James",
                    apellidos: "Bond",
                    categoria: {
                        categoria: "PROFESOR TITULAR DE E.U.",
                        orden: 2
                    },
                    dedicacion: "6 + 8"
                },
                {
                    nombre: "Bruce",
                    apellidos: "Wayne",
                    categoria: {
                        categoria: "PROFESOR ASOCIADO",
                        orden: 3
                    },
                    dedicacion: "6 + 6"
                },
                {
                    nombre: "Steven",
                    apellidos: "Gerrard",
                    categoria: {
                        categoria: "PROFESOR TITULAR UNIVERSITARIO",
                        orden: 3
                    },
                    dedicacion: "6 + 6"
                }
            ];

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

            this.numGrupos = function() {
                var titul = this.cursos[this.titulacion];
                for(var ano in titul){
                    for(var asig in titul[ano].asignaturas){
                        if(titul[ano].asignaturas[asig].nombre == this.asignatura)
                        {
                            if(this.tipo == 'Teoría')
                            {
                                return titul[ano].asignaturas[asig].num_grupos;
                            }
                            else {
                                return titul[ano].asignaturas[asig].num_desdobles;
                            }

                        }
                    }
                }
            }

            this.seleccionar = "";
            this.profesores = [
                {
                    nombre: "James",
                    apellidos: "Rodriguez",
                    categoria: {
                        categoria: "CATEDRATICO DE E.U.",
                        orden: 1
                    },
                    dedicacion: "6 + 6"
                },
                {
                    nombre: "Frank",
                    apellidos: "Abagnale Jr.",
                    categoria: {
                        categoria: "PROFESOR TITULAR DE E.U.",
                        orden: 2
                    },
                    dedicacion: "6 + 6"
                },
                {
                    nombre: "Roger",
                    apellidos: "Waters",
                    categoria: {
                        categoria: "PROFESOR TITULAR DE E.U.",
                        orden: 2
                    },
                    dedicacion: "6 + 8"
                },
                {
                    nombre: "Marlon",
                    apellidos: "Brando",
                    categoria: {
                        categoria: "CATEDRATICO DE LA UNIVERSIDAD",
                        orden: 1
                    },
                    dedicacion: "6 + 8"
                }
            ];
            this.seleccionado = function (item, model, label, profesor) {

                var index = this.elecciones.indexOf(profesor);
                this.elecciones[index] = item;
                this.seleccionar = "";
                this.cambios = true;
            };
            this.agregar = function () {
                var item = {
                    nombre: "",
                    apellidos: "",
                    categoria: {
                        categoria: "",
                        orden: null
                    },
                    dedicacion: ""
                };

                this.elecciones.push(item);
            };

            this.eliminar = function (item) {
                var index = this.elecciones.indexOf(item);
                this.elecciones.splice(index, 1);
                this.cambios = true;
            };

        }])
})();