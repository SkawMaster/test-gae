'use strict';

angular.module('appLibreria')
    .controller('libreriaCtrl', function ($scope, libreria) {

        $scope.cargar = function() {
        	libreria.cargar(function (listado) {
                $scope.listadoNombreLibros = listado.nombre;
            });
        }

        $scope.guardar = function() {
        	libreria.guardar($scope.formulario, function() {
                $scope.cargar();
            });
        }

        $scope.formulario = {};

        $scope.cargar();
    });
