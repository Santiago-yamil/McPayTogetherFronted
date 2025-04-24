angular.module('telefonoApp', [])
  .controller('TelefonoCtrl', function($scope) {
    $scope.numero = '';

    $scope.continuar = function() {
      alert("Número ingresado: " + $scope.numero);
      // Aquí podrías redirigir a verificación
    };

    $scope.regresar = function() {
      alert("Regresando a la vista anterior");
      // window.history.back(); o usar rutas si tienes SPA
    };
  });
