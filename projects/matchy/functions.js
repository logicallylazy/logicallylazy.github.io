/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// animals = array

// I: array and a string
// O: object or null

// look through animal array
// if animal names in array is equal to name string return animals obj
// return null if there is no object
function search(animals, string){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === string){
            return animals[i];
        }
    } return null;
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacment){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
         animals[i] = replacment;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals.splice(i);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(anArray, newAnObj){
    var result = true;
    for(let i = 0; i < anArray.length; i++){
    if(newAnObj.name.length <= 0 || newAnObj.species.length <= 0 || newAnObj.name === anArray[i].name){
        result = false;
    }
    }
    if(result === true){
        anArray.push(newAnObj);
} 
return anArray;
}
// checking if object name has a property > 0
// checking if object species has a property > 0
 

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
