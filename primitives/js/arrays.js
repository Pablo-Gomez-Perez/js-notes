//they are some ways to create or declare arrays in javascript

//here we create an array with 10 void elements inside
const myArray = new Array(10);
console.log(myArray); // [ <10 empty items> ]

let bestCyclists = ['peter sagan', 'mark cavendish', 'greg lemond'];
console.log({bestCyclists});
// to access an element in the array
console.log(bestCyclists[0]); // peter sagan

// while other languages obligates you to declare a typed array, in javascript you can add diferent types of data in the same array
const mixedArray = [1, 'hello', true, null, undefined, {name: 'john'}, [1, 2, 3], /*we can add operations here even*/ 5 + 3];
console.log({mixedArray});

// we can create a array of functions
const funcArray = [
    function() { return 'hello'; },
    () => {},
]

console.log({funcArray}); // hello

const newOtherArray = [
    'hello',
    42,
    true,
    ['inside array', 'john doe', 'verilog', 'systemverilog']
]

//now we want to acces to an element inside the nested array
// like in other languajes we can just use the index of the element we want to access
console.log(newOtherArray/*acces to the fourth element that is actually the nested array*/[3]/*we writte the index of the element we want to access*/[2] );
console.log(newOtherArray[3][1]);