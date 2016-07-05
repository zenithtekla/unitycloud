var app14 = angular.module('app14',["ngSanitize"]);

/*app14.service('HelloService', function(){
   this.helloService = function(){
       console.log('Hello Service');
   }
});

app14.factory('HelloFactory', function(){
   var factory = {};
   factory.helloFactory = function(){
       console.log('Hello Factory');
   };
   return factory;
});*/
// pass Service into a Controller
app14.controller('mainCtrl',function(
    $scope, $window, $location, $interval, $log, $exceptionHandler, $sanitize){
    $scope.greetUser = function(userName){
        $window.alert("Hello " + userName);
    };
    $scope.currURL = $location.absUrl();
    $scope.baseURL = $location.protocol() + "://" + $location.host();
    $scope.dirURL = $scope.currURL.substring(0, $scope.currURL.lastIndexOf('/'));
    $scope.theProtocol = $location.protocol();
    $scope.currHost = $location.host();
    $scope.currPort = $location.port();
    
    $location.path("#/the/path");
    $scope.currPath = $location.path();

    $location.search("random=stuff");
    $scope.currSearch = $location.search();

    $interval(function () {
        var hour = new Date().getHours();
        var minutes = ( '0' + new Date().getMinutes()).slice(-2);
        var seconds = ( '0' + new Date().getSeconds()).slice(-2);
        $scope.time = hour + ":" + minutes + ":" + seconds;
    }, 1000);
    $scope.$log = $log;
    $scope.throwException = function(){
        try {
           throw new Error(" Exception Thrown");
        } catch (e) {
            $exceptionHandler(e.message, "Caught Exception");
        }
    };
    $scope.badStuff = "";

    $scope.players = [{name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444},
    {name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374},
    {name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474},
    {name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482}];

    $scope.$watch("badStuff", function(value){
        $scope.htmlData = $sanitize(value);
    });
    // Data used by compile below
});

// compile service
app14.directive("getPlayerInfo", function($compile){
    return function(scope, element, attrs){
        // define playerList template in this directive
        var playerList = "<ul><li ng-repeat='player in players'>{{player.name}}</li></ul>";
        var listElement = angular.element(playerList);
        var compileFunc = $compile(listElement);
        compileFunc(scope);
        element.append(listElement);
    };
});