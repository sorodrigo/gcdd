/**
 * Created by Rodrigo on 20/12/15.
 */
(function (){
    angular.module('SGCD')

        //Controller encargado de actualizar el correo del usuario y calcular la carga docente
        .controller('PerfilCtrl', ['$uibModal', function ($uibModal) {

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

                return total;
            }
        }])

        //Controller encargado de crear el Pie Chart
        .controller('PieGraficoCtrl', ['$scope', function ($scope) {

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
                    donut: false,
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
                    y: this.profesor.carga.proyectosInnovacion
                },
                {
                    key: "Practicas Profesionales",
                    y: this.profesor.carga.practicasProfesionales
                },
                {
                    key: "Trabajos Finales",
                    y: this.profesor.carga.trabajosFinales
                },
                {
                    key: "Cargo",
                    y: this.profesor.carga.cargo
                },
                {
                    key: "Total a Elegir",
                    y: (this.profesor.carga.prevision - this.profesor.carga.proyectosInnovacion - this.profesor.carga.practicasProfesionales - this.profesor.carga.trabajosFinales - this.profesor.carga.cargo)
                },
                {
                    key: "Créditos Elegidos",
                    y: 6
                }
            ];
        }])

        //Controller encargado del modal utilizado para modificar los datos del perfil de usuario
        .controller('ModificarCtrl', ['$uibModalInstance', function ($uibModalInstance) {
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
        }]);
})();