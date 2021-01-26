// Operators


/**
 * There are 4 types of operaters we use in Javascript
 * Assignment
 * Arithmetic
 * Comparison
 * Logical
 */
 
 // Assignment Operaters
 
 // Assignment Operaters assigned a value to a variable
 
 var x = 5; // x is now assigned to value of 5
 
 x += 2; // adds value to variable
 x -= 2; // subtracts value to a variable
 x *= 2; // multiplies value to a variable
 x /= 2; // divides value to a variable
 x %= 2; // assigns remander value to a variable
 
 
 // Arithmetic Operators
 
 // These operators are used to perform arithmetic on numbers
 
 // litteral use
 var x = 20 + 10 // x = 30
 
 // variable use
 var x = 4;
 var y = 2;
 
 var z = x + y; // z = 6: Addition
 var z = x - y; // z = 2: Subtraction
 var z = x * y; // z = 8: Multiplication
 var z = x / y; // z = 2: Division
 
 // there are also increments and decrements
 
 // for(i = start; i < end; i++){} // for loop with increment opp
 // for(i = start; i < end; i--){} // for loop with decrement opp
 
 // Comparison Operators 
 
 // Comparision operators are use to compare one value to another
 // will leave you with a boolean result
 
 var a = 2
 var b = 5
 
 a > b // false: greater than
 a < b // true:  less that
 a >= b // false: greater than/equal to
 a <= b // true: less than/equal to
 
 if(a !== b){
     console.log('this is true') // using not equal to
 }
 
 if(a === b){
     console.log('this is false') // using strictly equal to
 }
 
 
 // Logical Operators
 
 // Logical Operators along with comparison operators are used to determin
 // to test true or false a.k.a. conditional statements (more in control flow)
 
 if (!1 === 1){
     return false;  // "Borat voice" this is NOT operator
 }
 
 if(1 === 1 && 2 === 2){ // There here is the AND operator
     return true;
 }
 
 if(1===1 || 2 === 1){  // dis ones the OR operator
     return true;
 }
 
 
 // Unary Operators 
 
 // The unary plus operator (+) precedes its operand and evaluates to its operand 
 // but attempts to convert it into a number, if it isn't already.
 
const f = 1;
const g = -1;

console.log(+f);
// expected output: 1

console.log(+g);
// expected output: -1

console.log(+'');
// expected output: 0

console.log(+true);
// expected output: 1

console.log(+false);
// expected output: 0

console.log(+'hello');
// expected output: NaN

 
// Although unary negation (-) also can convert non-numbers,
// unary plus is the fastest and preferred way of converting something into a number,
// because it does not perform any other operations on the number.



// Ternary operator 

/**
 *  The conditional (ternary) operator is the only JavaScript operator
 *  that takes three operands:
 *  a condition followed by ( ? ), 
 *  an expression to execute if the condition is truthy followed by a colon ( : ) 
 *  and lastly the expression to execute if the condition is falsy
 */
 
// condition ? true : false
 
 
 var age = 31;
var beverage = (age >= 21) ? "Enjoy your Old Fashioned" : "Hell No! H20";
console.log(beverage); // "Enjoy your Old Fahsioned"