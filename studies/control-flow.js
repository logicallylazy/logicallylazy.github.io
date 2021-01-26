// Control flow

// Control flow is the order in which the program executes statements

// to control these actions we use if, else if, and else statements

// if statements are started with the key word if then are followed with a 
// conditional statement which leaves a boolean value, lastly the code is 
// executed

// if(this === true){
//     return true;
// }

// When you have more than one condition that must be met, you add your
// else if statement
// you can have as many else if as needs be

// if(this === true){
//     return true;
// } else if(that === false){
//     return false;
// }

// else is used lastly and closes your if statement

if(this === true){
    return true;
} else if(this === false){
    return false;
} else {
    console.log("Well what else could it be?");
}


// lastly there is the Switch Statement
// this is used to perform different action based on different conditions

// Note: default does NOT have to be last in the code to be executed
// Note: the break keywod break out of the switch block and will stop
// the execution of inside the block. The last case does NOT need a break


let a = 2 + 2;

switch (a) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 5:
    console.log('Too large');
    break;
  default:
    console.log("I don't know such values");
}






// Control flow is a very useful tool, it helps us to program disicions
// and gives the user differnet paths to go through. 