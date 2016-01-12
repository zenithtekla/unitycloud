// ---------- ARRAYS ----------
// Arrays have variable sizes and can contain multiple types in JS
var customer = ["Tom Smith", "123 Main", 120.50];
 
// Access first array item
console.log("1st Index : ", customer[0]);
 
// Add an item
customer[3] = "tsmith@aol.com";

// Overwrite index 2 and fit everything else after index 2 without
// overwriting (Put 0 for second parameter to not overwrite)
customer.splice(2, 1, "Pittsburgh", "PA"); // [ 'Tom Smith', '123 Main', 'Pittsburgh', 'PA', 'tsmith@aol.com' ]

// Delete the 4th index item
customer.splice(4,1); // [ 'Tom Smith', '123 Main', 'Pittsburgh', 'PA' ]
 
// Convert an array into a string (Also use toString())
console.log("Array : ", customer.valueOf());
 
console.log("Str : '", customer.join(", "), "'"); // Str : ' Tom Smith, 123 Main, Pittsburgh, PA '
customer[4] = " last str";

// Delete an array element
customer.splice( customer.indexOf("PA"), 1 );
console.log(customer); // no leaving empty slot [ 'Tom Smith', '123 Main', 'Pittsburgh', ' last str' ]

// Delete an index
delete customer[2]; // leave an empty slot
console.log(customer);


// Sort an array (reverse() for reverse sort)
// Works for sorting strings
customer.sort();
console.log(customer);

var asiakas = ["Mary Jane", "123 Main", 120.50, " Roseland"];
console.log(asiakas.pop()); // take the last

// Sort numbers
var numbers = [4,3,9,1,20,43];
 
// Descending sort return y - x
numbers.sort(function(x,y){ return x - y }); // Ascending sort
console.log("Num Array : ", numbers.toString(), "<br />");
 
// Combine arrays
var combinedArray = numbers.concat(customer);
console.log("combinedArray :" , combinedArray);

var times3 = function (num){
  return num * 3;
}
 
function multiply(func, num){
  return func(num);
}
 var s = "times3";
console.log("3 * 15 = ", multiply(times3, 15), "<br />");
// console.log("3 * 15 = ", multiply(window[s], 15), "<br />");

// Closure
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(add());
console.log(add());
console.log(add());

/*var add = (function () {
    var counter = 0;
    return counter += 1;
})();

console.log(add());
console.log(add());
console.log(add());*/

// Through exception handling we can catch and manage errors rather then
// crashing by surrounding problem code in a try block and handling it
// in a catch block
 
var custArray = ["Tom", "Bob", "Sally", "Sue"];
 
var getCust = function(idx){
  if(idx > custArray.length){
    throw new RangeError("Index must be >= 0 and <= " + custArray.length );
  } else {
    return custArray[idx];
  }
};

try {
  console.log("Customer : ", getCust(5));
}
catch(ex){
  if (ex instanceof RangeError){
    console.log(ex.message);
  }
}

