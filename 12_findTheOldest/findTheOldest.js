const findTheOldest = function(people) {

    var thisYear = new Date().getFullYear();
    var age = 0;

    let firstDeathCheck = people[0].hasOwnProperty('yearOfDeath');
    if (!(firstDeathCheck)) {
        age = (thisYear - people[0].yearOfBirth);
    } else {
        age = (people[0].yearOfDeath - people[0].yearOfBirth);
    }
    var oldestSoFar = people[0];
    
    for (var i = 1; i < people.length; i++) {
        var currAge = 0;
        let deathCheck = people[i].hasOwnProperty('yearOfDeath');
        if (!(deathCheck)) {
            currAge = (thisYear - people[i].yearOfBirth);

        } else {
            currAge = (people[i].yearOfDeath -
                people[i].yearOfBirth);
        }

        if (currAge > age) {
            oldestSoFar = people[i];
            age = currAge;
        }

    }

return oldestSoFar;

};
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
