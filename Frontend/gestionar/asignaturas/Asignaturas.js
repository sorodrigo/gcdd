/**
 * Created by Rodrigo on 20/12/15.
 */

(function () {
    angular.module('SGCD')

        .controller('AsignaturasCtrl', ['$uibModal', '$scope', function ($uibModal, $scope) {

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
                        total: 0,
                        asignaturas: [
                            {
                                idAsignatura: 1,
                                nombre: 'Analisis Matematico',
                                creditosT: 5,
                                creditosP: 0,
                                gruposT: 2,
                                gruposTI: 1,
                                gruposP: 0,
                                gruposPI: 0,
                                prevision: 100,
                                num_grupos: 3,
                                num_desdobles: 0,
                                semestre: 1,
                                caracter: 'OB'
                            }
                        ]
                    },

                    {
                        total: 0,
                        asignaturas: [
                            {
                                idAsignatura: 2,
                                nombre: 'Sistemas Operativos',
                                creditosT: 3,
                                creditosP: 3,
                                gruposT: 2,
                                gruposTI: 0,
                                gruposP: 4,
                                gruposPI: 0,
                                prevision: 100,
                                num_grupos: 3,
                                num_desdobles: 4,
                                semestre: 2,
                                caracter: 'OB'

                            },
                            {
                                idAsignatura: 3,
                                nombre: 'POOA',
                                creditosT: 3,
                                creditosP: 3,
                                gruposT: 1,
                                gruposTI: 1,
                                gruposP: 5,
                                gruposPI: 0,
                                prevision: 80,
                                num_grupos: 3,
                                num_desdobles: 4,
                                semestre: 2,
                                caracter: 'OB'
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
                                idAsignatura: 4,
                                nombre: 'Agentes de la Informacion',
                                creditosT: 2,
                                creditosP: 2,
                                gruposT: 2,
                                gruposTI: 0,
                                gruposP: 2,
                                gruposPI: 0,
                                prevision: 60,
                                num_grupos: 2,
                                num_desdobles: 2,
                                semestre: 5,
                                caracter: 'OP'
                            }
                        ]
                    }
                ],
                'Ingenieria Computadores': [
                {
                    total: 0,
                    asignaturas: []
                },
                {
                    total: 0,
                    asignaturas: []
                },
                    {
                        total: 0,
                        asignaturas: []
                    },
                    {
                        total: 0,
                        asignaturas: []
                    }
            ],
                'Master Web': [
                    {
                        total: 0,
                        asignaturas: [
                            {
                                idAsignatura: 5,
                                nombre: 'Opensource Frameworks',
                                creditosT: 5,
                                creditosP: 1,
                                gruposT: 2,
                                gruposTI: 1,
                                gruposP: 6,
                                gruposPI: 0,
                                prevision: 30,
                                num_grupos: 3,
                                num_desdobles: 6,
                                semestre: 1,
                                caracter: 'OP'
                            }
                        ]
                    },

                    {
                        total: 0,
                        asignaturas: []
                    }
                ],
                'Master Sistemas Distribuidos' : [
                    {
                        total: 0,
                        asignaturas: []
                    },
                    {
                        total: 0,
                        asignaturas: []
                    }
                ]
            };

            this.eliminar = function (item, ano) {
                for (var i = 0; i < this.cursos[this.actual][ano].asignaturas.length; i++){
                    if (this.cursos[this.actual][ano].asignaturas[i].idAsignatura == item.idAsignatura){
                        var index = i;
                        break;
                    }
                }
                    this.cursos[this.actual][ano].asignaturas.splice(index, 1);
                    this.cambios = true;


            };

            var that = this;

            this.edicion = function (asign, ano) {

                var agregarModal = $uibModal.open({
                    templateUrl: './gestionar/asignaturas/edicionAsignaturasView.html',
                    controller: 'EditarAsignaturaCtrl as edicion',
                    size: 'lg',
                    resolve: {
                        curso: function(){
                            return that.cursos[that.actual];

                        },
                        asignaturaSeleccionada: function(){
                            return angular.copy(asign);
                        },
                        anoAsignatura: function (){
                            return ano;
                        }
                    }
                });

                agregarModal.result.then(function (agregado) {
                    if(agregado.versionAntigua.asignatura != null) {
                        that.eliminar(agregado.versionAntigua.asignatura, agregado.versionAntigua.ano);
                        that.cambios = false;
                    }
                        console.log(agregado.asignatura);
                        that.cursos[that.actual][agregado.ano].asignaturas.push(agregado.asignatura);
                });
            };






        }])

        .controller('EditarAsignaturaCtrl', ['$uibModalInstance', '$scope', 'curso', 'asignaturaSeleccionada', 'anoAsignatura', function ($uibModalInstance, $scope, curso, asignaturaSeleccionada, anoAsignatura) {

            this.curso = curso;

            this.asignatura = asignaturaSeleccionada;
            this.ano = anoAsignatura;

            this.close = function () {
                $uibModalInstance.dismiss('cancel');
            };

            this.guardar = function () {

                if(this.asignatura.idAsignatura == null)
                {   //TODO
                    console.log("API CREATE asignatura AQUI!!");
                    this.asignatura.idAsignatura = "placeholder";
                }
                else{
                    //TODO
                    console.log("API EDIT asignatura AQUI!!");
                }
                $scope.result = {
                    asignatura: this.asignatura,
                    ano: this.ano,
                    versionAntigua: {
                        ano: anoAsignatura,
                        asignatura: asignaturaSeleccionada
                    }
                };


                $uibModalInstance.close($scope.result);
            }

        }]);
})();