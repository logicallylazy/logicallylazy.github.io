// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
// return strings length

return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

// return string toLowercase

return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

// return string toUpperCase

return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
  // in: a string
  // out: the string all lowercase and with hyphens instead of spaces
  
   return string.toLowerCase(string).replace(/\s+/g, '-');
// from what i understand /\s+/g means that / = for , \s = spaces, +/g = globally(in the whole string) , '-' = add a hyphen


// // split method splits string into an array
// var res = str.split(" ");

// // join method to join it back
// var finalStr = res.join(".");

// // re-assigning to finalStr 
// finalStr = finalStr.toLowerCase()
// return finalStr;
  
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    
    // create an if statement to check if first character of any string is equal to itself
    // check to make sure it accepts character lower or upper case
    // return false if neigh apply
    
    // YOUR CODE BELOW HERE //

    if(string[0] === char.toUpperCase() || string[0] === char.toLowerCase()){
        return true;
        
    }
    else return false; 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    
    // create if statement to check last characters (length - 1) are the same character
    // passes whether upperCase or LowerCase
    // return false neigh apply
    
    // YOUR CODE BELOW HERE //
if(string[string.length - 1] === char.toUpperCase() || string[string.length - 1] === char.toLowerCase()){
    return true;
    
} 
else return false;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {

    // concate two strings into one
    
    // YOUR CODE BELOW HERE //

return stringOne.concat(stringTwo);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    
    // take all strings .join them to one string
    // return string
    
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    return args.join('');


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // check and compare both strings
    // return longer string
    
    // YOUR CODE BELOW HERE //
if(stringOne.length > stringTwo.length){
    return stringOne;
} 
else return stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return -1 if the first is higher in alphabetical order than
 * the second, return 1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    
    // checking if letter is higer or lower in alphabet
    // return -1 if first letter is >
    // return 1 if lower if firstletter is <
    // return 0 other wise
    
    // YOUR CODE BELOW HERE //
return -stringTwo.localeCompare(stringOne);
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return -1 if the first is lower in alphabetical order than
 * the second, return 1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    
    // check if letter is higher or lower in alphabet
    // return -1 if number is lower
    // return 1 if number is higer
    // return 0 if both are equal
    
    // YOUR CODE BELOW HERE //
return -stringOne.localeCompare(stringTwo);
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
