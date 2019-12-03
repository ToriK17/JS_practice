var firstName = 'Smitty';
console.log(firstName);


var age = 28;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
// not assigning a variable makes this undefined

job = 'Teacher';
console.log(job);

// variables: letter, $, or _
var _3years = 3;
var $2years = 2;

// Variable mutation and type coercion 

// Type coercion  
console.log(firstName + ' ' + age);



var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried); 

// variable mutation

// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried); 
// var lastName = prompt('what is his last Name?');
// console.log(firstName + ' ' + lastName);

/*******************
*Basic operators
*/

// typeof operator
console.log(typeof age);
console.log(typeof isMarried);

// operator order  

var now = 2019;
var yearJohn = 1989;
var legalAge = 21;

var isLegalAge = now - yearJohn >= legalAge;
console.log(isLegalAge);

// here assignment works from right to left, thats why this works
var x, y;
x = y = (3 + 5) * 5 - 6;
console.log(x, y);

// challenge

// Store both mass and height in variables
var markMass = 167;
var johnMass = 148;
var markHeight = 177;
var johnHeight = 155;

// calculate both BMI
var markBmi = markMass / (markHeight *markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

// create a boolean variable to show if Mark has a higher BMI than john 


var markHigherBmi;

if (markBmi > johnBmi) {
  markHigherBmi =  true;
} else {
  markHigherBmi = false;
}

// print string stating boolean above
console.log("Is Mark's BMI higher than John's?" + "it is "+ markHigherBmi);