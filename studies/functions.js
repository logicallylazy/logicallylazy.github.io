// What's your Function!!!!

/*
* A function is block of code executed when invoked
* You can reuse code: Define the code once, and use it many times.
*
* You can use the same code many times with different arguments, to produce different results.
* A function is defined with the function keyword, followed by a name, followed by parentheses ().
* Function names can contain letters, digits, underscores, and dollar signs (just like variables).
* The parentheses may include parameter names separated by commas:
* (parameter1, parameter2, ...)
* The code to be executed, by the function, is placed inside curly brackets: {}
*
* Paramaters are the place holders of aurguments in the function
*
* When JavaScript reaches a return statement, the function will stop executing.
* If the function was invoked from a statement, "return" will excute the code after
* an invoked statement
*
*
*
*/

function multiply(num1, num2) {
  return num1 * num2;   // The function returns the product of p1 and p2
}


// invoking a function is a funtion call and having the code be excuted through said call

multiply(2, 5); // ==> 10


// assigning a functions to a variable

// of using a variable to store the return value of a function:




function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Chris");

// Scope:

// JavaScript has function scope: Each function creates a new scope.
// Scope determines the accessibility (visibility) of these variables.

// Variables defined inside a function are not accessible (visible) from outside the function.


// There are two scopes when it comes to funtion


// Local Scope:

// These are variable declared inside the the function
// they can only be accesessed inside of that funtion

// code here can NOT use carModel

function carFunc() {
  var carModel = "Mazda";

  // code here CAN use carModel

}




// Global Scope:

// A variable declared outside a function, becomes GLOBAL.
// A global variable has global scope: All scripts and functions on a web page can access it. 

var carModel = 'Mazda';

// code carModel can be used here

function carFunc(){
    // and here as well
}


// Closer 

// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function.
// Closures are created every time a function is created, at function creation time.

 function makeMulti(x){
  return function(y){
    return x * y;
  };
}

var mult2 = makeMulti(2);
var mult5 = makeMulti(5);

console.log(mult2(4));
console.log(mult5(10));