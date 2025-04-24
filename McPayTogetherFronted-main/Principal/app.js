angular.module('miApp', [])
.controller('FormularioCtrl', function($scope, $timeout) {
  $scope.campos = [
    {
      label: 'Selecciona sucursal',
      texto: '',
      mostrar: false,
      opciones: ['Centro', 'Norte', 'Sur', 'Sucursal Playa', 'Sucursal Plaza']
    },
    {
      label: 'Ingresa Número de personas',
      texto: '',
      mostrar: false,
      opciones: ['2', '3', '4', '5', '6','7','8','9','10']
    },
    {
      label: 'Consumidor a pagar',
      texto: '',
      mostrar: false,
      opciones: ['Individual', 'Entre todos']
    },
    {
      label: 'Forma de pago',
      texto: '',
      mostrar: false,
      opciones: ['Efectivo', 'Tarjeta', 'Transferencia']
    }
  ];

  $scope.seleccionar = function(campo, opcion) {
    campo.texto = opcion;
    campo.mostrar = false;
  };

  $scope.ocultar = function(campo) {
    $timeout(function() {
      campo.mostrar = false;
    }, 200);
  };
});


