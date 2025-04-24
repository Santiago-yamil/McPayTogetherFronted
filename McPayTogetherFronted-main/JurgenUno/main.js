angular.module('menuApp', [])
  .controller('MenuCtrl', function($scope) {
    // Valores por defecto (puedes asignar dinámicamente)
    $scope.sucursal    = 'Orizaba';
    $scope.numPersonas = 5;
    $scope.consumidor  = 'Conjunto o individual';

    // Campos opcionales
    $scope.sentiHoy   = '';
    $scope.rolGrupo   = '';
    $scope.tipoComida = '';

    $scope.toggleMenu = function() {
      alert('Menú desplegado (simulado)');
    };

    $scope.generarLink = function() {
      // Aquí podrías generar un enlace real
      const params = [
        'sucursal=' + encodeURIComponent($scope.sucursal),
        'personas=' + encodeURIComponent($scope.numPersonas),
        'consumidor=' + encodeURIComponent($scope.consumidor),
        'sentiHoy=' + encodeURIComponent($scope.sentiHoy),
        'rolGrupo=' + encodeURIComponent($scope.rolGrupo),
        'tipoComida=' + encodeURIComponent($scope.tipoComida)
      ].join('&');
      const url = 'https://mcpay.example.com/?' + params;
      window.open(url, '_blank');
    };
  });