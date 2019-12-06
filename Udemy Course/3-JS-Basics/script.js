///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1965);
// Used before declaring * Most important use case, using functions before declared *

function calculateAge(year) {
  console.log(2016 - year);
}

calculateAge(1990);


//            With functions that are expressions:
// retirement(1960); This doesnt work with hoisting
var retirement = function(year) {
  console.log(65 - (2016 - year));
};

retirement(1990);

//               Variables:
console.log(age); 
//  Variables are scanned with hoisting but set to UNDEFINED
var age  = 23;
// Now it reads as defined
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
// Returns the global execution object 23, the function did not chaneg global scope


///////////////////////////////////////
// Lecture: Scoping

 
// First scoping example

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

