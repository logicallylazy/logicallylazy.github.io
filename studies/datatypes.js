// Lets talk about DATATYPES!!!!


// there are several datatypes we will be going through them here


var types = [5, 'This is a string', true, [], {}, undefined, null, NaN];

/**
 * Numbers
 * String
 * Boolean
 * Function
 * Array
 * Object
 * Undifined
 * Null
 * NaN
 */


// numbers: 

// Javascript has only one type of numbers
// they can be written with or withou decimals

var y = 5;
var y2 = 5.5;



// Strings:

// strings are a series of characters

var string = 'This is a string';

var string2 = 'Yes, this is also a string';

// Boolean:

// Booleans result to two values: true or false
// used a lot in if statements as a condition

// boolean(3 < 5) // true
// boolean(4 > 8) // false


if(1 === 1){
    console.log(true);
} else console.log(false);



// Array:

// Array hold a list of properties
// An Array can hold strings, numbers, booleans, other array and objects

 let friendsList = ['Darnyll', 'Roger', 'Ryan'];
 let listofWhatev = ['Some name', true, 8, ['blah', 'blah'], {food: 'pizza'}];

// Arrays can be manipulated with different methods

 friendsList.push('Erin'); // ==> ['Darnyll', 'Roger', 'Ryan', 'Erin'] // Hey Erin!
 friendsList.shift() // ==> ['Roger', 'Ryan'] // Bye Darnyll!



// Object:

// Obejcts hold key: value pairs and are identified with curlybraces {}

 let myCar = {make: 'Mazda', model: 'Miata', year: 1995, colr: 'Black'}

// you can add and replace keys and values in your object using dot or bracket notation

// using dot noations to add to myCar object
 myCar.model = 'Mx-5'
 myCar.trans = 'Manual'
// using bracket notation to add to my myCar object
 myCar['forced induction'] = true


// Function:


// A function is a block of code designed to do a certain task
// A function is executed when invoked
// a function holds parameters witch are placeholders for aurgments

function add(parm1, parm2){ // keyword: function(paramiter1, paramiter2)
return parm1 + parm2        // keyword: return paramiter1 plus paramiter2
}

// add(1, 2)  // ==> 3  // calling function with aruguments


// undefined

// undefiend is a variable without a value

var favColor
 console.log(favColor) // ==> undefined

// an empty value is not the same as undefined

 var favColor = '';

// note: var favColor is now assigned to a string

// null 

// null stands for nothing, and represents something that doesn't exsist.

 let americanCars = ['Ford', 'Chevy', 'Dodge']
 americanCars = null // value is now true I mean...null


// NaN

// NaN is a global value that equals to Not a Number

 isNaN(8) // false
 isNaN(NaN) // true


// Infinity and -Infinity

// infinity is a numeric value representing infinity

 console.log(Infinity) // ==> Infinity
 console.log(-Infinity) // ===> -Infinity



// Primative data type:

// a single simple data type value with no additional properties or methods
// we use the typeof operator to return strings, number, booleans, and undefined

 typeof "Chris"             // Returns "string"
 typeof 5.25                // Returns "number"
 typeof true                // Returns "boolean"
 typeof false               // Returns "boolean"
 typeof y                   // Returns "undefined"


// Complex data type:

// in the case of Complex data types the typeof operator can return one of two
// complex types: function and object

 typeof {name:'Chris', age:31} // Returns "object"
 typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
 typeof null                  // Returns "object"
 typeof function myFunc(){}   // Returns "function"



// Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.
// What does that mean, and how are they different?

// When a parameter is passed by reference, the caller and the callee
// use the same variable for the parameter. 
// If the callee modifies the parameter variable, 
// the effect is visible to the caller's variable.

var myName = {
  firstName: "Christopher"
};
var identity = myName;
myName.firstName = "Joseph";

console.log(myName.firstName); // "Joseph"
console.log(identity.firstName); // "Joseph"



// When a parameter is passed by value,
// the caller and callee have two independent variables with the same value. 
// If the callee modifies the parameter variable,
// the effect is not visible to the caller.

var name = "Christopher";
var firstName = name;
name = "Joseph";

console.log(name); // "Joseph"
console.log(firstName); // "Christopher"