/**
 * This file is for testing the use of primitives in JavaScript. We will see how to use them and how they work.
 */

let name = 'Peter Sagan';
console.log(name); // Peter Sagan

name = 'Greg LeMond';
console.log(name); // Greg LeMond

// we can use typeof to check the type of a variable
console.log(typeof name); // string

// javascript dynamically infers the type of a variable
name = 24234;
console.log(name); // 24234
console.log(typeof name); // number

let myBoolead = true;
console.log(myBoolead); // true
console.log(typeof myBoolead); // boolean

let lastRace = 'paris-roubaix';
console.log(lastRace);

// in javascript null is a object except the primitive type XD hahahaha fucking crazy
let imNull = null;
console.log(imNull); // null
console.log(typeof imNull); // object

//lets talk about symbols, they are a new primitive type in javascript, they are unique and immutable, they are used to create unique identifiers for objects, they are not enumerable and they are not iterable, they are not coercible to string or number, they are not callable and they are not constructible, they are not JSON serializable and they are not clonable, they are not comparable and they are not assignable, they are not deletable and they are not overwritable, they are not configurable and they are not extensible, they are not enumerable and they are not iterable, they are not coercible to string or number, they are not callable and they are not constructible, they are not JSON serializable and they are not clonable, they are not comparable and they are not assignable, they are not deletable and they are not

let mySymbol1 = Symbol('n');
let mySymbol2 = Symbol('n');

console.log(mySymbol1); // Symbol(n)
console.log(mySymbol2); // Symbol(n)
console.log(mySymbol1 === mySymbol2); // false

console.log(typeof mySymbol1); // symbol


// symbols are not enumerable, they are not iterable, they are not coercible to string or number, they are not callable and they are not constructible, they are not JSON serializable and they are not clonable, they are not comparable and they are not assignable, they are not deletable and they are not overwritable, they are not configurable and they are not extensible, they are not enumerable and they are not iterable, they are not coercible to string or number, they are not callable and they are not constructible, they are not JSON serializable and they are not clonable, they are not comparable and they are not assignable, they are not deletable and they are not