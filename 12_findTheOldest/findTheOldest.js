const findTheOldest = function(people) {
     return people.reduce((oldestPerson, currentPerson) => { 
        let currentYear = new Date().getFullYear();
        if (!oldestPerson.hasOwnProperty('yearOfDeath')) {
            oldestPerson.yearOfDeath = currentYear;
        }
        if (!currentPerson.hasOwnProperty('yearOfDeath')) {
            currentPerson.yearOfDeath = currentYear;
        }
        let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        return oldestAge > currentAge ? oldestPerson : currentPerson;});
    // return people.sort((a, b) => { return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth); })[people.length - 1] ;
};

// Do not edit below this line
module.exports = findTheOldest;
