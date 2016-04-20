/* global angular*/
angular.module('app10', [])
  .directive("bbPlayerList", function() {
    return function(scope, element, attrs) {
      // Get the data by passing the value associated with
      // bbPlayerList to the scope object
      var data = scope[attrs["bbPlayerList"]];
      console.log(data);
      // Verify that I have an array of data
      if (angular.isArray(data)) {
        
        // Get the item to display from the array-item attribute
        var arrayItem = attrs["arrayItem"];
        
        // angular.element wraps the DOM element as a JQuery
        // element
        var listElem = angular.element("<ul>");
        
        // The ul element is the container in which the li
        // elements will be assigned
        element.append(listElem);
        for (var i = 0; i < data.length; i++){
          
          // Get the matching data stored in the defined key requested
          // $eval eliminates the filter and leaves just the attribute
          // name to pull from the array
          listElem.append(angular.element('<li>')
            .text(scope.$eval(arrayItem, data[i])));
        }
      }
      
      // Add a span after the list
        listElem.after(angular.element("<span id='mays'>").text("Willy Mays"));
        
        // Add a span before the list
        listElem.prepend(angular.element("<span id='cobb'>").text("Ty Cobb"));
        
        // Remove an element
        angular.element(document.querySelector('#mays')).remove();
        
        // Replace an element
        var gehrigHTML = "<span id='gehrig'>Lou Gehrig</span>";
        var replacement = angular.element(gehrigHTML);
        angular.element(document.querySelector('#cobb'))
        .replaceWith(replacement);
    };
  })
  .controller("mainCtrl", function($scope) {
    $scope.bbPlayers = [
      {name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444},
      {name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374},
      {name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474},
      {name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482}
    ];
})