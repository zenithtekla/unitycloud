var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", ["$scope", "$firebaseAuth",
  function($scope, $firebaseAuth) {
    var ref = new Firebase("https://zetek.firebaseio.com");
    auth = $firebaseAuth(ref);

    $scope.login = function() {
      $scope.authData = null;
      $scope.error = null;

      auth.$authAnonymously().then(function(authData) {
        $scope.authData = authData;
      }).catch(function(error) {
        $scope.error = error;
      });
    };
  }
]);