angular.module('verificacionApp', [])
  .controller('VerificacionCtrl', function($scope, $interval, $timeout) {
    $scope.telefono = '+52 123 456 7890';
    $scope.segundos = 30;
    $scope.reenviable = false;

    let timer;

    function iniciarTemporizador() {
      $scope.reenviable = false;
      $scope.segundos = 30;
      timer = $interval(() => {
        if ($scope.segundos > 0) {
          $scope.segundos--;
        } else {
          $interval.cancel(timer);
          $scope.reenviable = true;
        }
      }, 1000);
    }

    iniciarTemporizador();

    $scope.reenviarCodigo = function () {
      if ($scope.reenviable) {
        iniciarTemporizador();
      }
    };

    $timeout(() => {
      const inputs = document.querySelectorAll('.codigo-input input');
      inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
          if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
          }
        });
      });
    });
  });
