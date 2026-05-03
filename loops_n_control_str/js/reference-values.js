
// All the primiteves are passed as value
let a = 10;
let b = 20;

console.log({a, b});

// All the object are passed by reference
let juan = {
    name: 'juan',
    age: 21,
};

let ana = juan;
console.log({juan, ana});

ana.name = 'Ana';

console.log({juan, ana});

// if we want to break a reference in order to create another object we can use the spread operator {...}

let spiderMan = { name : 'Peter'};

const changeName = ({...person}) => {
    spiderMan.name = 'peter';
    return spiderMan;
}

/**
 * to breack the reference to the spiderMan object its necesary to add {...} before the 
 * assign.
 * this way, ironMan is a diferent object in memory.
 */
let ironMan = changeName('Tony');
ironMan = {...spiderMan};
ironMan.name = 'Tony';
console.log({spiderMan, ironMan});

// lets try the same but with arrays

const fruits = ['Apple', 'Pinapple', 'Pear'];
const anotherFruits = fruits;

// lets breack the reference in this new array
const anotherFruitsArray = [...fruits];

anotherFruits.push('Wathermellon');
anotherFruitsArray.push('Mangoes');

console.table({fruits, anotherFruits, anotherFruitsArray});

/**
 * there is a better way to brack the reference to the original array, and is usign ths .slice() method.
 * this method will return a new array from the original.
 */

console.time('slice');
const slicedFruitsArray = fruits.slice();
console.timeEnd('slice');

console.time('spread');
const spreadedFruitsArray = [...fruits]
console.timeEnd('spread');

slicedFruitsArray.push('Orange');
spreadedFruitsArray.push('Cucumber');

console.table({fruits,anotherFruits,anotherFruitsArray,slicedFruitsArray,spreadedFruitsArray});