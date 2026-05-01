
let cyclist = {
    name: 'Isaac del Toro',
    team: 'UAE Team Emirates',
    country: 'Mexico',
    age: 22,
    wins: 15,
    isActive: true,
    bycicles: ['road bike', 'mountain bike', 'time trial bike'],
};

console.log({cyclist}); // Output: { cyclist: { name: 'Isaac del Toro', team: 'UAE Team Emirates', country: 'Mexico', age: 22, wins: 15, isActive: true, bycicles: [ 'road bike', 'mountain bike', 'time trial bike' ] } }
console.log(cyclist.name); // Output: Isaac del Toro

// we can acces to a property of an object like if it were an array
console.log(cyclist[6][0]);