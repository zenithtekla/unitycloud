var app13 = angular.module('app13',[]);

app13.service('HelloService', function(){
   this.helloService = function(){
       console.log('Hello Service');
   }
});

app13.factory('HelloFactory', function(){
   var factory = {};
   factory.helloFactory = function(){
       console.log('Hello Factory');
   };
   return factory;
});
// pass Service into a Controller
app13.controller('mainCtrl',function(HelloService, HelloFactory){
    HelloService.helloService();
    HelloFactory.helloFactory();
});