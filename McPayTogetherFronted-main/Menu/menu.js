angular.module('miApp', [])
  .controller('MainCtrl', function($scope) {
    // Búsqueda
    $scope.searchQuery = '';

    // Ítems del menú
    $scope.menuItems = [
      { nombre: 'Hamburguesa', img: 'imagenAmbu.png',precio:55.45 },
      { nombre: 'Papas', img: 'imagenAmbu.png',precio:130 },
      { nombre: 'Refresco', img: 'imagenAmbu.png' ,precio:123},
      { nombre: 'Postre', img: 'imagenAmbu.png',precio:34 },
      { nombre: 'Postre', img: 'imagenAmbu.png',precio:1 },
      { nombre: 'Postre', img: 'imagenAmbu.png',precio:100 },
    ];
  });
