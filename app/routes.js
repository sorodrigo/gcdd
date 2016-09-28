/**
 * Created by Rodrigo on 08/11/15.
 */
'use strict';

angular.module('SGCD')

  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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

      .when('/asignar/:titulacion/:asignatura/:tipo', {
        templateUrl: './asignar/grupoView.html',
        controller: 'EditarGrupoCtrl',
        controllerAs: 'grupo'
      })

      .when('/asignaturas', {
        templateUrl: 'gestionar/asignaturas/index.html',
        controller: 'AsignaturasCtrl',
        controllerAs: 'asignaturas'
      })

      .when('/titulaciones', {
        templateUrl: 'gestionar/titulaciones/index.html',
        controller: 'TitulacionesCtrl',
        controllerAs: 'titulacionesCtrl'
      })

      .when('/profesores', {
        templateUrl: 'gestionar/profesores/index.html',
        controller: 'ProfesoresCtrl',
        controllerAs: 'profesoresCtrl'
      })

      .when('/cargos', {
        templateUrl: 'gestionar/cargos/index.html',
        controller: 'CargosCtrl',
        controllerAs: 'cargosCtrl'
      })

      .when('/innovacion', {
        templateUrl: 'gestionar/innovacion/index.html',
        controller: 'InnovacionCtrl',
        controllerAs: 'innovacionCtrl'
      })

      .when('/trabajos', {
        templateUrl: 'gestionar/trabajos/index.html',
        controller: 'TrabajosCtrl',
        controllerAs: 'trabajosCtrl'
      })

      .when('/personal', {
        templateUrl: 'gestionar/personal/index.html',
        controller: 'PersonalCtrl',
        controllerAs: 'personalCtrl'
      })

      .when('/', {
        templateUrl: './elegir/index.html',
        controller: 'ElegirCtrl',
        controllerAs: 'elegir'
      })

      .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
  }]);
