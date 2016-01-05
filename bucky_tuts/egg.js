/*var bunky = {
  firstName: "Bucky",
  lastName: "Joe",
  age: 28
};
var person = bunky;
console.log(person);
console.log(person.age);
var printBacon = function(){
  console.log("bacon is good, don't believe the doctor");
}
printBacon();
setTimeout(printBacon,2000);

function placeOrder(orderNumber){
    console.log("customer order: ", orderNumber);
    cookAnddeliverFood(function(){
        console.log("delivered food for order #", orderNumber);
    });
}

// simulate 5 seconds operation
function cookAnddeliverFood(callback){
    setTimeout(callback,3000);
}

// simulate requests
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(10);
placeOrder(5);

var myCust = {
    printFirstName: function(){
        console.log("my customer firstName is Bunky");
        console.log(this === myCust);
    }
};
console.log(myCust);
myCust.printFirstName();

function printmyVar(){
        console.log("\n print my GlobalVar");
        console.log(this ===global);
}
printmyVar();

var aFunc = function (){
    
}*/

var Obj = {
    firstName: "Tam",
    lastName: "Tran",
    nestedObj: {
        fixe: "0663841577",
        office: {
            ext1: "-207",
            getExt: function(){
                return this.ext1;
            }
        },
        portable: "0908303069",
        natel: "0938303069"
    }
};
// console.log(Obj.nestedObj);
var myObj = Obj.nestedObj;
console.log(Obj.nestedObj['office'].getExt());
console.log(myObj.office.ext1);

var customer = {
    assembly: {
        revision:{
            format:{
                type1: "<<()",
                type2: "#.."
            }
        }
    }
};

// .getExt();
var newObj = {
    office1: {
            ext1: "-209",
            getExt: function(){
                return this.ext1;
            }
    },
    office2: {
            ext1: "-210",
            getExt: function(){
                return this.ext1;
            }
    }
}
console.log(newObj['office1']);
for (var key in newObj) {
    // console.log(key[1].getExt());
      console.log(newObj[key].getExt());
}

var obj = {
  one: {
    id: 1,
    name: 'one',
    getName: function() {
      return this.name;
    }
  },
  two: {
    id: 2,
    name: 'two',
    getName: function() {
      return this.name;
    }
  }
};
console.log(obj);
for (var key in obj) {
  console.log(obj[key].getName());
}

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']
for (var key in arr){
    console.log(arr[key]);
}
