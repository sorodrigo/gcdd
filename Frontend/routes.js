/**
 * Created by Rodrigo on 08/11/15.
 */

angular.module('SGCD')

    .config(function ($routeProvider) {

        $routeProvider.when('/elegir', {
                templateUrl: './elegir/index.html',
                controller: 'ElegirCtrl',
                controllerAs: 'elegir'
            })

            .when('/perfil', {
                templateUrl: './perfil/index.html',
                controller: 'PerfilCtrl',
                controllerAs: 'perfil'
            })

            .when('/asignar', {
                templateUrl: './asignar/index.html',
                controller: 'AsignarCtrl',
                controllerAs: 'asignar'
            })

            .when('/asignar/:titulacion/:asignatura/:tipo',{
                templateUrl: './asignar/grupoView.html',
                controller: 'EditarGrupoCtrl',
                controllerAs: 'grupo'
            })

            .when('/', {
                templateUrl: './elegir/index.html',
                controller: 'ElegirCtrl',
                controllerAs: 'elegir'
            })

            .otherwise({redirectTo: '/'});

    });