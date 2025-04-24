angular.module('menuApp', [])
  .controller('MenuController', function($scope) {
    $scope.seccionActual = 'recomendacion';

    $scope.menu = {
      recomendacion: [
        { nombre: 'Big Mac', precio: 89, imagen: 'Imagenes/logoMC.png' },
        { nombre: 'McNuggets', precio: 75, imagen: 'Imagenes/logoMcD.webp' }
      ],
      completo: [
        { nombre: 'Big Mac', precio: 89, imagen: 'Imagenes/logoMcD.webp' },
        { nombre: 'McNuggets', precio: 75, imagen: 'Imagenes/logoMC.png' },
        { nombre: 'McPollo', precio: 79, imagen: 'Imagenes/logoMC.png' },
        { nombre: 'Papas Grandes', precio: 49, imagen: 'Imagenes/logoMcD.webp' }
      ]
    };

    $scope.mostrar = function(seccion) {
      $scope.seccionActual = seccion;
    };
  });