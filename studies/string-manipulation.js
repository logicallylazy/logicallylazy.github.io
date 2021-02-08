// String manipulation!

// string methods help you to manipulat your string into what you need
// using .length returns the length of the string

// with Operators

// created a var name holding my name
var name = 'Chris';
// adding name into string
console.log('Hi! ' + name + ' here!');


// with String methods

// .length returns the length of the string

let string = 'How long this string be?';

// .toUpperCase returns the string all in CAPS!
let upperString = string.toUpperCase();

console.log(upperString); // HOW LONG THIS STRING BE?

// .toLowerCase returns the string all lowercased!
let lowerString = string.toLowerCase();

console.log(lowerString);

// .replace replace a string with a string of your choice
let replaceString = string.replace('long', 'big');

console.log(replaceString); // 'How big this string be?'

// .split splits a string into an array making each value an index
let splitString = string.split(' ');

console.log(splitString); // ['How', 'long', 'this', 'string', 'be?'] 

// .slice returns a shallowed verson of your string! (start, end)
let sliceString = string.slice(14, 20);

console.log(sliceString); // string


// .strike stikes a....strike through the string
let strikeString = string.strike();

console.log(strikeString); // <strike>How long this string be?</strike> Looks like a top secret document!!!