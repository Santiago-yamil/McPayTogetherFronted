angular.module('miApp', [])
  .controller('MenuCtrl', function($scope) {
    $scope.searchQuery = '';
  })
  .controller('UsuariosCtrl', function($scope) {
    $scope.usuarios = [
      {
        nombre: 'Carlos',
        foto: 'sinFoto.webp',
        pedido: [
          { nombre: 'Hamburguesa', precio: 56 },
          { nombre: 'Papas', precio: 78 }
        ],
        total: 134
      },
      {
        nombre: 'Ana',
        foto: 'sinFoto.webp',
        pedido: [
          { nombre: 'Refresco', precio: 28 },
          { nombre: 'Postre', precio: 45 }
        ],
        total: 73
      },
      {
        nombre: 'Ana',
        foto: 'sinFoto.webp',
        pedido: [
          { nombre: 'Refresco', precio: 28 },
          { nombre: 'Postre', precio: 45 },
          { nombre: 'Postre', precio: 45 },
          { nombre: 'Postre', precio: 45 },
          { nombre: 'Postre', precio: 45 }
        ],
        total: 73
      }
    ];

    $scope.total = 150;
    $scope.persona = 'Carlos';
  });


  