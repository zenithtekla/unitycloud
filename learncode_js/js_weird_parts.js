/*  -> First class functions
    -> Event-Driven Env
    -> Closures
    -> Scope
    -> Context */
"use strict";
    
// 1. First class functions
function add(first, second, callback){
    console.log(first+second);
    if (callback) callback();
}

function logDone(){
    console.log('done');
}

function logDoneAgain(){
    console.log('done Again');
}
add(2,3, logDone);
add(3,5, logDoneAgain);
add(4,7);

// 2. Event-Driven Env JS is not just infomation , it's user-event
/* global $*/
var a = 1;
console.log('setting this up');
$(function(){
   $('button').on('click', function(){
      console.log(a); 
      // only log a as this event fires, setting this up does not appear more than once in the console
   });
});

// 3. Closures: is sth retains state and scope after it executes
$(function(){
    var a = 1;
   $('button').on('click', function(){
       a++;
      console.log(a); 
      // only log a as this event fires, setting this up does not appear more than once in the console
   });
});

// 4.Scope

var a = 1;
// parent
function foo(){
    // child
    var b = 2;
    console.log(a); // log out 1;
    var a = 2;
    console.log(window.a); // 1
    console.log(a); // 2
}
foo();
console.log(b); //unable to log b, undefined
console.log(a); // 1

// 5. Context, context === this, by default window === this
var a = 1
console.log(this.a); // 1 ~ console.log(window.a);

function goo(){
    // child scope
    console.log(this);
}
goo(); // log window object, scope has changed but context remains the same, window.goo();

var obj = {
    foo:function(){
        console.log(this); // log obj
    },
    goo: function(){
        console.log(this===obj);// true, === window // false
    },
    bar: function(){
        console.log(this===window);
    },
    loo: function(one, two, three){
        console.log(this===window);
    }
};

// 3 magic methods to change context are: call, apply, bind
obj.bar.call(window); // true, seeing window
obj.loo.call(window, 1,2,3);
obj.loo.apply(window, [1,2,3]); // apply takes 2 args, it takes new context and an array
// bind only takes one arg
var myBoundLoo = obj.loo.bind(window); // returns a bound func
myBoundLoo(); // myBoundLoo is a function that always executes 'loo' in 'window' context
// running myBoundLoo() returns true in the console
// but obj.loo() returns false!
obj.loo();

$('#parent').on('click', function() {
    var self = this; // that = this; parent, _self, _this
    $('#child').slideToggle(300, function(){
        $(self).toggleClass("active");
    });
});
// the other way to get around is to bind the parent context right within the child
$('#parent').on('click', function() {
    $('#child').slideToggle(300, function(){
        $().toggleClass("active"); // $() = parent, the disadvantage is I have no way to access the inside 'this', the child context
    }.bind(this));
});

// further here Javascript Context Tutorial - What makes Javascript Weird...and Awesome Pt5
// https://www.youtube.com/playlist?list=PLoYCgNOIyGABI011EYc-avPOsk1YsMUe_