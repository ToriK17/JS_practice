// var firstName = 'Smitty';
// console.log(firstName);


// var age = 28;
// var fullAge = true;
// console.log(fullAge);

// var job1;
// console.log(job1);
// not assigning a variable makes this undefined

// job1 = 'Teacher';
// console.log(job1);

// variables: letter, $, or _
// var _3years = 3;
// var $2years = 2;

// Variable mutation and type coercion 

// Type coercion  
// console.log(firstName + ' ' + age);



// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried); 

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
// console.log(typeof age);
// console.log(typeof isMarried);

// operator order  

// var now = 2019;
// var yearJohn = 1989;
// var legalAge = 21;

// var isLegalAge = now - yearJohn >= legalAge;
// console.log(isLegalAge);

// here assignment works from right to left, thats why this works
// var x, y;
// x = y = (3 + 5) * 5 - 6;
// console.log(x, y);

// challenge

// Store both mass and height in variables
// var markMass = 167;
// var johnMass = 148;
// var markHeight = 177;
// var johnHeight = 155;

// calculate both BMI
// var markBmi = markMass / (markHeight * markHeight);
// var johnBmi = johnMass / (johnHeight * johnHeight);

// create a boolean variable to show if Mark has a higher BMI than john 


// var markHigherBmi;

// if (markBmi > johnBmi) {
//   markHigherBmi =  true;
// } else {
//   markHigherBmi = false;
// }

// print string stating boolean above
// console.log("Is Mark's BMI higher than John's?" + "it is "+ markHigherBmi);

// another way to solve
// var markHighestBMI =  markBmi > johnBmi;
// console.log("Is Mark's BMI higher than John's?" + "it is "+ markHighestBMI);

/*************************
* if/else statements
*/

// var name = 'Bob';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//   console.log(name + 'is married');
// } else {
//   console.log(name + 'not married');
// }

// dont need to write isMarried === true as condition because it is a boolean, this is enough for the condition
// var isMarried = true;

// if (isMarried) {
//   console.log(name + 'is married');
// } else {
//   console.log(name + 'is not married');
// }

/*******************
* Boolean logic
*/

// var firstName = 'Jim';
// var age = 17;

// if (age < 13) {
//   console.log(firstName + 'is a boy.');
// } else if (age >= 13 && age < 19) {
//   console.log(firstName + 'is a teen');
// } else {
//   console.log(firstName + 'is a man.');
// }

/********************* 
* The Ternary Operator and Switch statements
*/

// var firstName = 'John';
// var age = 16;

// Ternary Operator   ? : ;
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// Switch statement
// var job = 'teacher';
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + 'teaches to code.');
//     break;
//   case 'driver':
//     console.log(firstName + 'drives for Uber');
//     break;
//   case 'designer': 
//     console.log(firstName + 'designs websites');
//     break;
//   default: 
//     console.log(firstName + 'does somethig else.');      
// }

// Another switch example
// age = 12;

// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + 'is a teenager');
//     break;  
//   default:
//     console.log(firstName + ' is a man'); 
// }



/**********************************
* Truthy and Falsy values and equality operators 
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;

// if (height || height === 0 ) {
//   console.log('variable is defined');
// } else {
//   console.log('Variable has NOT been defined');
// }

// Equality Operators: == does type coersion, so '23' == 23 is TRUE but with triple equals '23' === 23 is FALSE



/* Coding Chalenge 2 */ 

// 1. Caluclate the average score for each team
// var johnTeamAvg = (89 + 120 + 103) / 3;
// var mikeTeamAvg = (116 + 94 + 123) / 3;

// 2. Decide which team wins and print to console

// if (johnTeamAvg > mikeTeamAvg) {
//   console.log('john\'s team wins');
// } else {
//   console.log('mike\'s team wins');
// }

// 3. take in account the option of a draw
// johnTeamAvg = 12;
// mikeTeamAvg = 12;

// if (johnTeamAvg === mikeTeamAvg) {
//   console.log('They draw, no one wins');
// } else if (johnTeamAvg > mikeTeamAvg) {
//   console.log('john\'s team wins');
// } else {
//   console.log('mike\'s team wins');
// } 

// 4. 
// var maryTeamAvg = (97 + 134 + 105) / 3;
// maryTeamAvg = 12;

// if (johnTeamAvg === mikeTeamAvg && maryTeamAvg === mikeTeamAvg) {
//   console.log('They draw, no one wins');
// } else if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
//   console.log('john\'s team wins');
// } else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
//   console.log('mike\'s team wins');
// } else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
//   console.log('mary\'s team wins');
// }


// function  calculateAge(birthYear) {
//   return 2019 - birthYear;
// }

// var ageMe = calculateAge(1989);
// var ageBear = calculateAge(1990);
// var agedoggo = calculateAge(2017);
// console.log(ageMe, ageBear, agedoggo);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0 ) {
//     console.log(firstName + ' retires in ' + retirement + ' years');
//   } else {
//     console.log(firstName + 'is already retired');
//   }
// }

// yearsUntilRetirement(1940, 'John');


/******************************
* Function Statements and Expressions  
*/

// Function declaration 
// function whatDoYouDo(job, firstName) {}

// Function Expression
// returns a single value, this function, 2 + 3, typeof 23, 
// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case 'teacher': 
//       return firstName + ' teaches kids to code';
//     case 'driver': 
//       return firstName + ' drive a cab';
//     case 'designer':
//       return firstName + ' makes beautiful websites';
//     default:
//       return firstName + ' does something else';      
//   }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('retired', 'Jim'));

/*********************************
* Arrays 
*/

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// alternative to shoveling 
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// another alternative to shoveling: push adds to end of an array
// names.push('Bob');
// console.log(names);

// to put an element at the begining of an array: unshift
// names.unshift('Mabel');
// console.log(names);
// removes last element: pop
// names.pop();
// console.log(names);
// removes first element: shift 
// names.shift();
// console.log(names);

// returns index of an element, good for checking if something exists in an array
// console.log(names.indexOf('Ben'));

// var isLast = names.indexOf('Mabel') === -1 ? 'They are not last' : 'They are last';
// console.log(isLast);


/***************************************
* Coding Challenge # 3  
*/ 

// var restaurantBills = [124, 48, 268];
// var allTips = [];
// var allTotals = [];

// function tipCalculator(billedAmt) {
//   var total; 
//   var tip;
//   if (billedAmt > 200) {
//     tip = (billedAmt * .1); 
//     total = tip + billedAmt;
//   } else if (billedAmt < 200 && billedAmt >= 50) {
//     tip = (billedAmt * .15); 
//     total = tip + billedAmt;
//   } else {
//     tip = (billedAmt * .2);
//     total = tip + billedAmt;
//   }
//   allTips.push(tip);
//   allTotals.push(total);
// }

// tipCalculator(restaurantBills[0]);
// tipCalculator(restaurantBills[1]);
// tipCalculator(restaurantBills[2]);

// console.log(allTotals);
// console.log(allTips);


/*************************************
* Objects and Properties
*/

// An object literal, defined with {}
// This is an obect named john

// var john = {
//   firstName: 'John', 
//   lastName: 'Smith', 
//   birthYear: 1990, 
//   family: ['Jane', 'Bob', 'Ed', 'Edd', 'Eddie'], 
//   job: 'teacher', 
//   isMarried: false
// };

// To access a property of our object we can use dot notation or brackets
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// New object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/*****************************************
* Objects and Methods
*/

// This keyword refers to a value within our object
// var john = {
//   firstName: 'John', 
//   lastName: 'Smith', 
//   birthYear: 1990, 
//   family: ['Jane', 'Bob', 'Ed', 'Edd', 'Eddie'], 
//   job: 'teacher', 
//   isMarried: false, 
//   calcAge: function() {
//     this.age = 2019 - this.birthYear;
//   }
// };

// we can also set properties like this, using the this property in the object ~this~ is special and powerful. 

// john.calcAge();
// console.log(john);

/*********************************************
* Coding Challenge 4 
*/

// var mark = {
//   fullName: 'Mark Smith', 
//   mass: 90,
//   height: 1.40, 
//   calcBmi: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// var john = {
//   fullName: 'John Smith', 
//   mass: 99,
//   height: 1.40,
//   calcBmi: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }  
// };


// if (mark.calcBmi() > john.calcBmi()) {
//   console.log('Mark has a heigher BMI');
// } else if (john.calcBmi() > mark.calcBmi()) {
//   console.log('john has a heigher BMI');
// } else {
//   console.log('They both have the same BMI');
// }

// console.log(mark['bmi']);
// console.log(john.bmi);

/**********************************************
* Loops and iteration
*/

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// We use .length because it dynamically changes the length.

// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// The While loop
// var john = ['John', 'Smith', 1990, 'designer', false];
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
// }
// The main difference is that we define the iterator outside of the loop


// Continue and Break Statements
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }
// replacing the continue with break is a hard exit, continue will skip through but keep running the loop

// Looping Backwards

// var j = john.length - 1;
// while (j > -1) {
//   console.log(john[j]);
//   j --; 
// }

// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

/***********************************************
*Coding Challenge #5 
*/

// var johnHoliday = {
//   bills: [124, 48, 268, 180, 42],  
//   calcTip: function() {
//     var totalTips = [];
//     var totalBilled = [];
//     var tip;
//     var fullBill;
//     for (var i = 0; i < this.bills.length; i++)
//       if (this.bills[i] < 50) {
//         tip = (this.bills[i] * .2);
//         totalTips.push(tip);
//         fullBill = this.bills[i] + tip;
//         totalBilled.push(fullBill);
//       } else if (this.bills[i] > 50 && this.bills[i] < 200) {
//         tip = (this.bills[i] * .15);
//         totalTips.push(tip);
//         fullBill = this.bills[i] + tip;
//         totalBilled.push(fullBill);
//       } else {
//         tip = (this.bills[i] * .1);
//         totalTips.push(tip);
//         fullBill = this.bills[i] + tip;
//         totalBilled.push(fullBill);
//       }  

//     console.log(totalBilled);
//     console.log(totalTips);
//   }
    
// };

// johnHoliday.calcTip();
// console.log(johnHoliday);


/****************************************************
*   
*/

