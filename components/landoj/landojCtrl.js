app.controller("landojCtrl", function ($scope, $rootScope, $window,
                                       $http, config, auth) {

  $scope.init = function() {
    auth.ensalutita();

    if (($window.localStorage.getItem('token') == null) ||
        ($window.localStorage.getItem('token') == 0)) {
      $window.location.href = '#!/login';
    }

    $rootScope.menuo = true;
    $http.get(config.api_url + "/landoj").then(function(response) {
        $scope.landoj = response.data;
    });
  }

  $scope.novaLando = function() {
   var req = {
       method: 'POST',
       url: config.api_url + '/landoj',
       headers: {'x-access-token': $window.localStorage.getItem('token')},
       data: $scope.lando
     }
    $http(req).then(
      function(sucess){
          $window.location.reload();
      });
  }

  $scope.deleteLando = function(idLando) {
    var req = {
        method: 'DELETE',
        url: config.api_url + '/landoj/' + idLando,
        headers: {'x-access-token': $window.localStorage.getItem('token')}
      }

   $http(req).then(
     function(response){
       if(response.status == '204') {
        $window.location.reload();
      } else {
        window.alert("Okazis eraro en la servilo." +
                     " Provu elsaluti kaj ensaluti denove");
      }
   });
  }

  $scope.updateLando = function(id, valoro, kampo) {
    var data = {valoro: valoro, kampo: kampo};
    var req = {
        method: 'PUT',
        url: config.api_url + '/landoj/' + id,
        headers: {'x-access-token': $window.localStorage.getItem('token')},
        data: data
      }
      $http(req);
  }

});