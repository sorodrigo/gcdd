/**
 * Created by Rodrigo on 17/10/15.
 */

(function () {
    //home.html
    angular.module('Home', ['ui.bootstrap'])

        //Controller encargado de lanzar el login modal.
        .controller('LoginCtrl', function ($uibModal) {

            this.modalLogin = function () {

                $uibModal.open({
                    templateUrl: 'loginView.html',
                    controller: 'ModalCtrl as modal',
                    size: 'sm'

                });
            };


        })
        //Controller encargado del template que utiliza el login modal.
        .controller('ModalCtrl', function ($uibModalInstance) {
            this.correo = "";
            this.password = "";

            this.close = function () {
                $uibModalInstance.dismiss('cancel');
            }

            this.login = function () {
                alert(this.correo + " " + this.password);
                $uibModalInstance.close();
            }

        });


    angular.module('SGCD', ['ngRoute', 'ui.bootstrap', 'nvd3'])

        //Filter that url encodes a string
        .filter('encode', function () {
            return function (value) {
                return encodeURI(value);
            };
        })

        //Controller encargado de las funciones globales en la aplicacion
        .controller('AppCtrl', function () {
            this.usuario = {
                nombre: "John",
                apellidos: "Appleseed",
                admin: true
            };
        })

        //Controller encargado de el boton que selecciona la titulacion y de cargar los panels de cada curso dependiendo de que titulacion se haya elegido.
        .controller('ElegirCtrl', function () {

            this.titulaciones = [
                'Ingenieria Software',
                'Ingenieria Computadores',
                'Master Web',
                'Master Sistemas Distribuidos'
            ];

            //Titulacion seleccionada
            this.actual = this.titulaciones[0];

            //Actualiza el valor de la titulacion seleccionada
            this.updateDropdown = function (opcion) {
                this.actual = opcion;
            };

            //Permite abrir solo un accordion a la vez
            this.oneAtATime = true;

            //variable que determina si un accordion esta abierto o cerrado
            this.isopen = false;

            this.collapse = function () {
                this.isopen = !this.isopen;
            };

            //Diccionario que contiene las titulaciones, sus cursos, y las asignaturas de dichos cursos
            this.cursos = {
                'Ingenieria Software': [
                    {
                        ano: 1,
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
                        ano: 2,
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
                        ano: 1,
                        total: 0
                    },

                    {
                        ano: 2,
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
                (numGrupos < 0) ? (this.cursos[this.actual][ano]['asignaturas'][asignatura][grupo] = 0)
                    : this.cursos[this.actual][ano]['asignaturas'][asignatura][grupo] = numGrupos;

                this.getTotalAno(ano);

                this.cambios = true;
            };

            this.getTotalAno = function (ano) {
                var total = 0;
                var asignaturas = this.cursos[this.actual][ano]['asignaturas'];
                for (a in asignaturas) {
                    var teoricos = (asignaturas[a].creditosT * asignaturas[a].gruposT) + (asignaturas[a].creditosT * asignaturas[a].gruposTI * 1.5);
                    var practicos = (asignaturas[a].creditosP * asignaturas[a].gruposP) + (asignaturas[a].creditosP * asignaturas[a].gruposPI * 1.5);
                    total += teoricos + practicos;
                    console.log(total)
                }
                this.cursos[this.actual][ano].total = total;
            }


        })

        //Directive encargada de cargar por medio de un elemento las tablas de las asignaturas
        .directive('asignaturasTable', function () {
            return {
                restrict: 'E',
                templateUrl: './elegir/asignaturas-table.html'
            };
        })

        .controller('PerfilCtrl', function ($uibModal) {

            this.profesor = {
                correo: "john.appleseed@example.com",
                nombre: "John",
                apellidos: "Appleseed",
                titulacion: "Ingenieria Informatica",
                categoria: "Catedratico E.U.",
                dedicacion: "Tiempo Completo",
                despacho: "4310",
                num_sexenio: 0,
                doctor: true,
                telefono: 623456789,
                fecha_alta: "01/06/2008",
                fecha_posesion: "03/04/2011",
                carga: {
                    prevision: 30,
                    proyectosInnovacion: 3,
                    practicasProfesionales: 1,
                    trabajosFinales: 3,
                    cargo: 2,
                    sexenioActivo: true

                }
            };

            this.modificar = function () {
                $uibModal.open({
                    templateUrl: './perfil/modificarView.html',
                    controller: 'ModificarCtrl as modificar',
                    size: 'md'

                });
            };
            this.cargaTotal = function () {
                var carga = this.profesor.carga;
                var total = carga.prevision - carga.proyectosInnovacion - carga.practicasProfesionales - carga.trabajosFinales - carga.cargo;

                if (carga.sexenioActivo) {
                    total = total * 0.75;
                }
                return total;
            }
        })

        .controller('DonutGraficoCtrl', ['$scope', function ($scope) {

            this.profesor = {
                correo: "john.appleseed@example.com",
                nombre: "John",
                apellidos: "Appleseed",
                titulacion: "Ingenieria Informatica",
                categoria: "Catedratico E.U.",
                dedicacion: "Tiempo Completo",
                despacho: "4310",
                num_sexenio: 0,
                doctor: true,
                telefono: 623456789,
                fecha_alta: "01/06/2008",
                fecha_posesion: "03/04/2011",
                carga: {
                    prevision: 30,
                    proyectosInnovacion: 3,
                    practicasProfesionales: 1,
                    trabajosFinales: 3,
                    cargo: 2,
                    sexenioActivo: true

                }
            };

            this.sexenioActivo = function () {
                return this.profesor.carga.sexenioActivo ? 0.75 : 1;
            };

            this.donutToPie = function () {
                this.options.chart.donut = !this.options.chart.donut;
            };


            this.options = {
                chart: {
                    type: 'pieChart',
                    height: 450,
                    x: function (d) {
                        return d.key;
                    },
                    y: function (d) {
                        return d.y;
                    },
                    donut: true,
                    showLabels: false,
                    duration: 500,
                    legend: {
                        margin: {
                            top: 5,
                            right: 0,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };

            this.data = [
                {
                    key: "Proyectos Innovacion",
                    y: this.profesor.carga.proyectosInnovacion * this.sexenioActivo()
                },
                {
                    key: "Practicas Profesionales",
                    y: this.profesor.carga.practicasProfesionales * this.sexenioActivo()
                },
                {
                    key: "Trabajos Finales",
                    y: this.profesor.carga.trabajosFinales * this.sexenioActivo()
                },
                {
                    key: "Cargo",
                    y: this.profesor.carga.cargo * this.sexenioActivo()
                },
                {
                    key: "Total a Elegir",
                    y: (this.profesor.carga.prevision - this.profesor.carga.proyectosInnovacion - this.profesor.carga.practicasProfesionales - this.profesor.carga.trabajosFinales - this.profesor.carga.cargo) * this.sexenioActivo()
                },
                {
                    key: "Créditos Elegidos",
                    y: 6
                }
            ];
        }])

        //Controller encargado del modal utilizado para modificar los datos del perfil de usuario
        .controller('ModificarCtrl', function ($uibModalInstance) {
            this.profesor = {
                correo: "john.appleseed@example.com",
                password: "password"
            };
            this.correo = "";
            this.password = "";
            this.newPassword = "";
            this.newPassword2 = "";

            this.close = function () {
                $uibModalInstance.dismiss('cancel');
            };

            this.guardar = function () {
                alert(this.correo + ' ' + this.newPassword);
                $uibModalInstance.close();
            }
        })

        //Controller encargado de cargar y manejar la tabla de las asignaturas elegidas
        .controller('AsignarCtrl', function () {

            //Diccionario que contiene las titulaciones, sus cursos, y las asignaturas de dichos cursos
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
        })

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
                    nombre: "Jimmy",
                    apellidos: "Page",
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

        }]);

})();
