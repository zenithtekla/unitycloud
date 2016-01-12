// Source: http://www.2ality.com/2014/01/object-assign.html
var o1 = { a: 1 };
var o2 = { [Symbol('foo')]: 2 };
var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol("foo")]: 2 }
// Conclusion: Object.assign() requires ECMAScript 6 to work.
// test play at https://babeljs.io/repl/ 