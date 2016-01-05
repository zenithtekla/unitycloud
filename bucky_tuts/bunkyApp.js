// basic User class
function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gives one life to " + targetPlayer.name); // lang_dict
    };
    this.getLife = function () {
        console.log(this.name + " has life point of " + this.life);
        return this.life;
    };
    this.setLife = function(value){
        if(!isNaN(value))
            return this.life = value;
        else console.log("input ERROR"); // error text goes to lang_dict, use error handler for retrieval.
    }
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky:"+Bucky.life);

// use getter
var life = Wendy.getLife();
console.log("Wendy:"+life);

// setters
Bucky.setLife(500);
Wendy.setLife("nan"); // input ERROR
console.log(Bucky.life);
Wendy.getLife();

// adding a special prototype method to User class
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
    // body...
}

Wendy.uppercut(Bucky);

console.log("Bucky:"+Bucky.life);
console.log("Wendy:"+Wendy.life);

// adding a property to object 'this' in User class
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);

function f() {
    console.log(bar);  // undefined
    var bar = 'abc';
    console.log(bar);  // abc
}
f();

(function () {

}());

var regex = /([0-9]{3}).-([0-9]{3})/g; 
var input = "+1-(800)-555-2468"; 
if(regex.test(input)) {
  var matches = input.match(regex);
  for(var match in matches) {
	console.log(matches[match]);
  } 
} else {
  console.log("No matches found!");
}

function placeOrder(orderNumber){
    console.log("customer order ", orderNumber);
    cookAnddeliverFood(function(){
        console.log("Delivered food order: ", orderNumber);
    });
}

// simulate 5 second operation
function cookAnddeliverFood(callback) {
    setTimeout(callback,5000);
}

// simulate users web request
placeOrder(1);
placeOrder(2);
placeOrder(10);
placeOrder(5);
placeOrder(7);
