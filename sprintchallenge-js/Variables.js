// Variables Review. 
// Var let const differences
// Anatomy of a variable Declaration
// Variable Scope link https://wesbos.com/javascript-scoping/
var myVar = 'example';

// Values - strings numbers Objects +;

// Variable Scope

// Function Scope 
function example1 () {

    if(true) {
        var myVar = 'Hello';
    }

    console.log(myVar);

}
example1();
// Block Scope 
function example2 () {

    if(true) {
        let myVar1 = 'Hello';
    }

    // Reference Error
    console.log(myVar1);

}
//example2();
// Without var declaration instantly Global. let is also global.

var myVar3 = 'I am now glbal, unless declared in a function';

myVar1 = 'I am now global';

let myVar2 = 'I am also global';

// Advice, use const until you can't. 

function setWidth() {
    var width = 100;
    console.log(width);
  }
  setWidth();

  // console.log(width); // error, not defined. 

  // Globally Defined. 
  var width1;
  function setWidth1() {
    width1 = 100;
    console.log(width1);
  }
  setWidth1();
  console.log(width1); // No error. 

// Block scoping / gone wrong? 

var age = 100;
if(age > 12) {
  var dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old!`);
}

// Block Scoping with let.  
var age1 = 100;
if(age1 > 12) {
  let dogYears1 = age * 7;
  console.log(`You are ${dogYears1} dog years old!`);
}

// console.log(dogYears1); // Error

