//lets declare a cyclist arrays
const cyclists = [ 'Chris Froome', 'Geraint Thomas', 'Egan Bernal', 'bradly wiggins' ];

//if we want to know the length of the array, we can use the length property
console.log(cyclists.length); //4

// what if we want to know the last element of the array? we can use the length property to get the last index
console.log(cyclists[cyclists.length - 1]); //bradly wiggins

//if we want to run through the array, we can use the .forEach method
cyclists.forEach( (item, index, array) => {
    console.warn({item, index, array});
});

// if we want to add an element to the end of the array we can use the push method
let newLength = cyclists.push('Nairo Quintana');
console.log({newLength, cyclists}); // ['Chris Froome', 'Geraint Thomas', 'Egan Bernal', 'bradly wiggins', 'Nairo Quintana']

// if we want to add an element at the beginning of the array we can use the unshift method
newLength = cyclists.unshift('Alberto Contador');
console.log({newLength, cyclists}); // ['Alberto Contador', 'Chris Froome', 'Geraint Thomas', 'Egan Bernal', 'bradly wiggins', 'Nairo Quintana']

let removedCyclist = cyclists.pop(); // removes the last element of the array
console.log({removedCyclist, cyclists}); // ['Alberto Contador', 'Chris Froome', 'Geraint Thomas', 'Egan Bernal', 'bradly wiggins']

// what if we want to remove an specific element of the array? we can use the splice method
let index = 2;
removedCyclist = cyclists.splice(index, 2); // removes the element at the index 2
console.log({removedCyclist, cyclists}); // ['Alberto Contador', 'Chris Froome', 'bradly wiggins']
