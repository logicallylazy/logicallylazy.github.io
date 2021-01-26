// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underscore');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./logicallylazy.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

let maleNumbers = _.filter(array, function(customerObj){
    return customerObj.gender === 'male';
});

return maleNumbers.length;
};

var femaleCount = function(array){
    let femaleNumbers = _.filter(array, function(customerObj){
        return customerObj.gender === 'female';
    });
    return femaleNumbers.length;
};

var oldestCustomer = function(array){
  
    var oldestAge = 0;
   return array.reduce((acc, a) => {
        if(a.age > oldestAge){
            acc = a.name;
            oldestAge = a.age;
        }
        return acc;
    }, "");
};

var youngestCustomer = function(array){
    
    var youngestAge = 200;
    return array.reduce((acc, a) => {
        if(a.age < youngestAge){
            acc = a.name;
            youngestAge = a.age;
        }
        return acc;
    }, "");
};



var averageBalance = function(array){
    var avg = array.reduce((total, person) => total + (Number(person.balance.replace(/[^0-9.-]+/g,""))), 0) / array.length;
    return avg;
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
