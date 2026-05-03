
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

/**
 * to breack the reference to the spiderMan object its necesary to add {...} before the 
 * assign.
 * this way, ironMan is a diferent object in memory.
 */
let ironMan = { ...spiderMan };
ironMan.name = 'Tony';
console.log({spiderMan, ironMan});