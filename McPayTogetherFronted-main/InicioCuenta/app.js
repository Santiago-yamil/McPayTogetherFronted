angular.module('loginApp', [])
  .controller('LoginCtrl', function($scope) {

    // Función para manejar el inicio de sesión con distintos métodos
    $scope.login = function(metodo) {
      switch(metodo) {
        case 'telefono':
          alert('Iniciar sesión con teléfono');
          break;
        case 'facebook':
          alert('Iniciar sesión con Facebook');
          break;
        case 'google':
          alert('Iniciar sesión con Google');
          break;
        case 'apple':
          alert('Iniciar sesión con Apple');
          break;
        case 'email':
          alert('Iniciar sesión con correo electrónico');
          break;
        default:
          alert('Método de inicio de sesión no reconocido');
          break;
      }
    };

    // Función para continuar como visitante
    $scope.continuarComoVisitante = function() {
      window.location.href = "QR_MC/indexQr.html"; // Aquí cambia a la URL de tu otro archivo HTML
    };

  });
