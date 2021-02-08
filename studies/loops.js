// Loops

// Here we will be discussing loops, discussing, loops, discussing loops...

// while, for, and for-in loops!



// Loop through objects with a for in loop
// For in loops, loop through enumerable, non-Symbol properties
// Iterates through key value pairs making it easier to manipulate the object
// the in keywords tells the code to itterate IN the object!


var myObj = {}; // declaring an object callied myObj

for(let key in myObj){ // looping through keys in myObj
    console.log(key); // printing keys to console
    console.log(myObj[key]); // printing key and value of myObj
}

let myObject = {
  name: 'Chris',
  age: 30,
  favColor: 'Green'
};


for(var key in myObject){ // looping through myObject
  console.log(key);  // logs keys: => name age favColor
  console.log(myObject[key]);  // logs key and value: => name Chris age 30 favColor Green 
}



// Looping through Arrays (fowards and backwards)

// looping through an array allows us to iterate through the array in search of a value
// You can even make a new array by pushing your search into a new array

// here we can use i represents increment

// for loops bare bones are a starting point, a stopping point and an increment.  

 for(var i = 0; i < 10; i++){ // for( var i = start; i < end; i increment) 
     
 }

var anArray = []; // created an array literal

for(let i = 0; i < anArray.length; i++){ // this loop represents a loop moving through an array, starting at the 0 index and ending at the end of anArray.
    return 'we move forward!';
}

// backwards!
for(let i = anArray.length - 1; i > 0; i--){ // this loop represents a loop moving through array from the back of anArray.length - 1 and ending at the zero index. 
    return '!esrever ni era eW';
}



// While loop

// The while loop loops through a block of code as long as a specified condition is true.

var count = 0; // count is assinged to 0
while(count < 5){ // while the count is < 5
    console.log(count); // console.log the count
    count ++; // increment upwards!
}