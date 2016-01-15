var app = angular.module("sampleApp", ["firebase"]);
app.factory("ListWithTotal", ["$firebaseArray",
  function($firebaseArray) {
    // create a new service based on $firebaseArray
    var ListWithTotal = $firebaseArray.$extend({
      getTotal: function() {
        var total = 0;
        // the array data is located in this.$list
        angular.forEach(this.$list, function(rec) {
          total += rec.amount;
        });
        return total;
      }
    });
    return function(listRef) {
      // create an instance of ListWithTotal (the new operator is required)
      return new ListWithTotal(listRef);
    }
  }
]);
app.controller("SampleCtrl", function($scope, $firebaseAuth, ListWithTotal, $firebaseArray) {
    var ref = new Firebase("https://zetek.firebaseio.com/");
    
    // create an instance of the authentication service
    var auth = $firebaseAuth(ref);
    // login with Google
    auth.$authWithOAuthPopup("google").then(function(authData) {
        console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });
    
    // create a synchronized array
    $scope.messages = $firebaseArray(ref);
    $scope.total = ListWithTotal(ref);
      // add new items to the array
      // the message is automatically added to our Firebase database!
      
    $scope.addMessage = function() {
        $scope.messages.$add({
          total: $scope.total,
          text: $scope.newMessageText
        });
    };
    /*var authData = ref.getAuth();
    if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
    } else {
        console.log("User is logged out");
    }*/
});

/*var method = function($scope, $firebaseArray) {
  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
  // click on `index.html` above to see $remove() and $save() in action
}; */

/* // from IONIC framework -- create Modal for text input https://www.youtube.com/watch?v=0Z1QYfRox-g
$ionicModal.fromTemplateUrl('new-msg.html', function(modal){
   $scope.messageModal = modal;
}, {
    scope: $scope,
    animation: 'slide-in-up'
});

$scope.showModal = function(){
    $scope.messageModal.show();
};
$scope.hideModal = function(){
    $scope.messageModal.hide();
}; 

$scope.messages = [];
$scope.addMessage = function(msg){
    msg.time = new Date().getTime();
    $scope.messages.push(msg);
    $scope.messageModal.hide();
    msg = "";
};
*/