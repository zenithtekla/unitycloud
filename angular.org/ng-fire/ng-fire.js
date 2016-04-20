var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseAuth, $firebaseArray) {
    var ref = new Firebase("https://ng-yo.firebaseio.com");
    
    // create an instance of the authentication service
    var auth = $firebaseAuth(ref);
    // login with Google
    auth.$authWithOAuthPopup("google").then(function(authData) {
        console.log("Logged in as:", authData.uid);
            // create a synchronized array
        $scope.messages = $firebaseArray(ref);
    
        // add new items to the array
        // the message is automatically added to our Firebase database!
          
        $scope.addMessage = function() {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
        };
    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });
    
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
