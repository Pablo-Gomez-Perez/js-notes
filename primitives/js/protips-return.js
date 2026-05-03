
/**
 * Builds a person object with the given properties.
 * @param {*} name 
 * @param {*} lastName 
 * @param {*} age 
 * @returns {Object} The person object with the provided properties.
 */
function buildPerson(name, lastName, age){

    /**
     * we can just return the object literal directly without needing to assign it to a variable first.
     */
    const person = {
        name,
        lastName,
        age,
    };

    return person;

}

// lets try with another type of function
/**
 * Builds a car object with the given properties.
 * @param {*} brand 
 * @param {*} model 
 * @param {*} year 
 * @returns {Object} The car object with the provided properties.
 */
function buildCar(brand, model, year){
    return {
        brand,
        model,
        year,
    }
}

// we canalso create objects with a lambda function.
/**
 * in just one line of javascript code we can create an object with the given properties.
 * @param {*} brand 
 * @param {*} model 
 * @param {*} year 
 */
const buildMotorcycle = (brand, model, year) => ({ brand, model, year });

/**
 * we can create a function with variable quantity of parameters
 */
const buildShip = (...varianProperties) => {
    return varianProperties;
}


const myPerson = buildPerson("Pablo", "García", 30);
console.log(myPerson);

// lets build a car
const myCar = buildCar("Ford", "Ranger", 2015);
console.log(myCar);

// lest buil a motorcycle
const myMotorcycle = buildMotorcycle("Yamaha", "MT-07", 2020);
console.log(myMotorcycle);

// we can map the properties into an array
const [brand, model, year] = buildShip("Uss enterprise", "NCC-2015", 2019);
console.log({brand, model, year});