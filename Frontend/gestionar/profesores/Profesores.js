(function () {
    angular.module('SGCD')

        .controller('ProfesoresCtrl', ['$uibModal', '$scope', function ($uibModal, $scope) {

            this.profesores = [
                {
                    idProfesor: 1,
                    nombre: "James",
                    apellidos: "Rodriguez",
                    categoria: {
                        categoria: "CATEDRATICO DE E.U.",
                        orden: 1
                    },
                    dedicacion: "6 + 6",
                    titulacion: "Ing. en Asistencias y Goles",
                    despacho: 1010
                },
                {
                    idProfesor: 2,
                    nombre: "Frank",
                    apellidos: "Abagnale Jr.",
                    categoria: {
                        categoria: "PROFESOR TITULAR DE E.U.",
                        orden: 2
                    },
                    dedicacion: "6 + 6",
                    titulacion: "Master en Fraude Bancario",
                    despacho: 2020
                },
                {
                    idProfesor: 3,
                    nombre: "Roger",
                    apellidos: "Waters",
                    categoria: {
                        categoria: "PROFESOR TITULAR DE E.U.",
                        orden: 2
                    },
                    dedicacion: "6 + 8",
                    titulacion: "Pink Floyd Lead Singer",
                    despacho: 3003
                },
                {
                    idProfesor: 4,
                    nombre: "Marlon",
                    apellidos: "Brando",
                    categoria: {
                        categoria: "CATEDRATICO DE LA UNIVERSIDAD",
                        orden: 1
                    },
                    dedicacion: "6 + 8",
                    titulacion: "Don Vito Corleone",
                    despacho: 4004
                }
            ];

            this.eliminar = function (item) {
                for (var i = 0; i < this.profesores.length; i++){
                    if (this.profesores[i].idProfesor == item.idProfesor){
                        var index = i;
                        break;
                    }
                }
                this.profesores.splice(index, 1);
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

        .controller('EditarProfesorCtrl',  ['$uibModalInstance', '$scope', 'profesorSeleccionado', function ($uibModalInstance, $scope, profesorSeleccionado) {

            this.profesor = profesorSeleccionado;

            this.close = function () {
                $uibModalInstance.dismiss('cancel');
            };

            this.guardar = function () {

                if(this.profesor.idProfesor == null)
                {   //TODO
                    console.log("API CREATE profesor AQUI!!");
                    this.profesor.idProfesor = "placeholder";
                }
                else{
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