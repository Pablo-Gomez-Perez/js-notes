
const cyclist = {
    name: 'Isaac del Toro',
    team: 'UAE Team Emirates',
    country: 'Mexico',
    age: 22,
    wins: 15,
    isActive: true,
    bycicles: ['road bike', 'mountain bike', 'time trial bike'],
    sponsor: {
        name: 'UAE Team Emirates',
        industry: 'Sports',
        country: 'United Arab Emirates',
        totalSponsorship: 1000000
    },
    'last-race': 'Tour de France'
};

console.log({ cyclist }); // Output: { cyclist: { name: 'Isaac del Toro', team: 'UAE Team Emirates', country: 'Mexico', age: 22, wins: 15, isActive: true, bycicles: [ 'road bike', 'mountain bike', 'time trial bike' ] } }
console.log(cyclist.name); // Output: Isaac del Toro

// we can acces to a property of an object like if it were an array
console.log(cyclist['team']); // Output: UAE Team Emirates


console.log("Total bycycles: " + cyclist.bycicles.length, cyclist.bycicles); // Output: mountain bike

const x = 'team';
console.log('Team: ', cyclist[x]); // Output: UAE Team Emirates

console.log(cyclist.sponsor); // Output: UAE Team Emirates


// with Object.entries() we can get an array of key-value pairs of the object
const entriesProperties = Object.entries(cyclist);
console.log(entriesProperties);

/**
 * when we declare a literal object as a const, we canot reassign the variable, but we can still modify the value of their properties, because the object is mutable. In other words, 
 * we can change the properties of the object, but we cannot reassign the variable to a new object.
 * But sometimes we want to prevent the modification of the properties of an object, so, we can use Object.freeze() to freeze the object, which means that we cannot modify 
 * the properties of the object, but we can still read them.
 */

console.log('Before freeze: ', {cyclist});

Object.freeze(cyclist);

// lets try to modify a property of the frozen object
cyclist.age = 23; // This will not change the age property of the cyclist object
console.log('After freeze: ', {cyclist}); // Output: { cyclist: { name: 'Isaac del Toro', team: 'UAE Team Emirates', country: 'Mexico', age: 22, wins: 15, isActive: true, bycicles: [ 'road bike', 'mountain bike', 'time trial bike' ] } }

/**
 * with Object.getOwnPropertyNames() we can get an array of the property names of the object, including the non-enumerable properties.
 */
const propertyArray = Object.getOwnPropertyNames(cyclist);
console.log({propertyArray});

/**
 * what if one of the properties of the object is another object?
 */
const sponsorArray = Object.getOwnPropertyNames(cyclist.sponsor);
console.log({sponsorArray});
