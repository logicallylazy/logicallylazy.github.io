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

var firstLetterCount = function(array, string){
    let allMembers = _.filter(array, function(customerObj){
        return customerObj.name[0].toUpperCase() === string[0].toUpperCase();
    });
    return allMembers.length;
};

var friendFirstLetterCount = function(array, customer, letter){
 var firstLetCount = _.reduce(array, function(acc, customerObj){
     if(customerObj.name === customer){
        let acc = _.filter(customerObj.friends, function(friend, i, friends){
            return friend.name[0].toLowerCase() === letter.toLowerCase();
        });
       // console.log(acc);
        return acc;
     }
     return acc;
 }, []);
 return firstLetCount.length;
};

var friendsCount = function(array, customer){
    
    let resultArr = _.filter(array, function(customerObj){
        let customerObjFriendsArr = customerObj.friends;
        for(let i = 0; i < customerObjFriendsArr.length; i++){
            if(customerObjFriendsArr[i].name === customer){
                return customerObj;
            }
        }
    });
    return _.pluck(resultArr, 'name');
};

var topThreeTags = function(arr){
    //declare variable result
var result = []
//assign the variable of tagsArray to a reduced version of the input array.
var tagsArray = _.reduce(arr, function(acc, curr){
    //get the tags from the current customer object and let it equal tags
let tags = curr.tags;
//concat all tags from each person into empty seed array
acc = acc.concat(tags); 
     return acc;
},[]);
// console.log(tagsArray);
//code that counts the tags and puts them in a counter object with the objects as keys and numbers as values
var tagsCountObj =_.reduce(tagsArray, function(acc, curr){
    if(acc[curr]){
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    } return acc;
}, {});
//code that gets the counters with the max value
    var getMax = object => {
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
       });
    };
result = getMax(tagsCountObj);
return result;
};

function genderCount(customerArray, obj = {}){
    if(!customerArray.length){
      //base case
      return obj;
    } else {
      let gender = customerArray[0].gender;
      if(obj[gender]){
        obj[gender]++;
      } else {
        obj[gender] = 1;
      }
      return genderCount(customerArray.slice(1), obj);
    }
}
console.log(genderCount(customers));

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
