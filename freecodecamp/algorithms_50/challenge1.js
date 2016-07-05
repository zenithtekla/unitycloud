/*jshint esversion: 6 */
/*jshint curly:true, debug:true */

function reverseString(str) {
  var arr = str.split("");
  arr = arr.reverse();
  return arr.join("");
}

reverseString("hello");
// OR
/*var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join('');*/

var factorial = function(n){
    return (n<=1) ? 1 : n*factorial(n-1);
};
console.log(factorial(5));

function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

// spread operator es6
/*function findLongestWord(str) {
  var arr = str.split(" ");
  var len = [];
  for (var i=0; i < arr.length; i++){
      len.push(arr[i].length);
  }
  return Math.max(...len);
}*/

/*function findLongestWord(str) {
  var arr = str.split(" ");
  var maxLength = 0;
  for (var word of arr){
    if (word.length>maxLength)
        maxLength = word.length;
  }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
*/


function titleCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");


/*function largestOfFour(arr) {
  var array = [];
  
  for (var num of arr){
    array.push(Math.max(...num));
  }
  // You can do this!
  return array;
}*/
function largestOfFour(arr) {
  var array = [];
  for (var num of arr){
    var max = 0;
    for (var n of num){
      if (max < n){
        max = n;
      }
    }
    array.push(max);
  }
  // You can do this!
  console.log(array);
  return array;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  // repeat after me
  return (num<0) ? "": function(num){
    for (var i=0; i<num; i++){
      str += str;
    }
    console.log(str);
    return str;
  };
} 

repeatStringNumTimes("abc", 3);

function reverseString(str) {
    return str.length > 1 ? reverseString(str.slice(1)) + str[0] : str;
}
console.log(reverseString("hello"));

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66 [developer.mozilla.org - Array/Reduce]
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]