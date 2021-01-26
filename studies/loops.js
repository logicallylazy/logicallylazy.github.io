// Loops

// Here we will be discussing loops, discussing, loops, discussing loops...

// while, for, and for-in loops!



// Loop through objects with a for in loop



var myObj = {};

for(let key in myObj){
    console.log(key);
    console.log(myObj[key]);
}

let myObject = {
  name: 'Chris',
  age: 30,
  favColor: 'Green'
};


for(var key in myObject){
  console.log(key);  // logs key
  console.log(myObject[key]);  // logs key and value
}



// Looping through Arrays (fowards and backwards)

// here we can use i represents increment

// for loops bare bones are a starting point, a stopping point and an incrament.  

 for(var i = 0; i < 10; i++){
     
 }

var anArray = [];

for(let i = 0; i < anArray.length; i++){
    return 'we move forward!';
}

// backwards!
for(let i = anArray.length; i > 0; i--){
    return '!esrever ni era eW';
}



// While loop

// The while loop loops through a block of code as long as a specified condition is true.

var count = 0;
while(count < 5){
    console.log(count);
    count ++;
}