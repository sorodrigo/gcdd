/**
 * Created by Rodrigo on 17/10/15.
 */

(function () {

    angular.module('Home', ['ui.bootstrap']);

    angular.module('SGCD', ['ngRoute', 'ui.bootstrap', 'nvd3'])

        //Controller encargado de las funciones globales en la aplicacion
        .controller('AppCtrl', [function () {
            this.usuario = {
                nombre: "John",
                apellidos: "Appleseed",
                admin: true
            };

            this.nav = {
                isCollapsed: true,
                collapse: function (reset) {
                    if (reset)
                    {
                        this.isCollapsed = true;
                    }
                    else {
                        this.isCollapsed = !this.isCollapsed;
                    }
                }
            }

        }])

        //Filter that url encodes a string
        .filter('encode', [function () {
            return function (value) {
                return encodeURI(value);
            };
        }])

        .filter('integer', [function () {
            return function (value) {
                return parseInt(value, 10);
            };
        }])

        .directive('dropdownSelector', function() {
            return {
                restrict: 'E',
                templateUrl: './dropdown-selector.html',
                scope: {
                    data: "=data",
                    actual: "=actual"
                },
                link: function(scope, element, attributes, ctrl) {

                    scope.actual = scope.data[0];

                    scope.updateDropdown = function (opcion) { //Actualiza el valor de la titulacion seleccionada
                        scope.actual = opcion;
                    }
                }
            };
        })

})();
