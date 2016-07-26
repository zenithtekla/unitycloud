/* global angular */
var app = angular.module('chirpApp', ['ngRoute']);

/* REMARKS
* register app configuration using 'ngRoute' module appended above
* To review .jade and the rendering of them in yo-ng app
* yo-ng.r2 major build
   - npm jade install --save
   - It is NOW: npm install pug --save, for Express: var pug = require('pug');
   - converting *.html to *.jade and fix routes.
   - r2 added Gruntfile.js build script for *.jade files
   - r2 also fixed livereload ports on C9
* yo-ng.r1 To review diff of
        $routeProvide ['ngRoute'] vs $stateProvider ['ui.router']
* What I love about Python Django is that the framework support routes and configuration
*/
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'main.html',
        controller:'mainController'
    })
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'authController'
    })
    .when('/register', {
        templateUrl: 'register.html',
        controller: 'authController'
    });
});

app.controller('mainController', function($scope){
   $scope.posts = [];
   $scope.newPost = {
       created_by: '',
       text: '',
       created_at: ''
   };
   $scope.post = function(){
       $scope.newPost.created_at = Date.now();
       $scope.posts.push($scope.newPost);
       $scope.newPost = {
           created_by: '',
           text: '',
           created_at: ''
       };
   };
});
app.controller('authController', function($scope){
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';
    $scope.login = function(){
        // placeholder until authentication is implemented
        $scope.error_message = 'login request for ' + $scope.user.username;
    };
    $scope.register = function(){
        // placeholder until authentication is implemented
        $scope.error_message = 'registration request for ' + $scope.user.username;
    };
});