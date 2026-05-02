

//#region functions declarations
/**
 * this is just a clasig greeting function
 * it returns a string with the name of the person and a message
 * @param {string} name - the name of the person to greet
 * @returns {string} a greeting message
 */
function greet(name) {
    return "Hello " + name + "Javascript is awesome!";
}

/**
 * this is a anonymous function
 * @param {string} name - the name of the person to greet
 */
const anonymousGreet = function (name) {
    console.log("Hello " + name);
}

// declaring a variable to expose the arguments object
let argumentsObject;

/**
 * something really realy interesting about functions in this languaje ins that if we call a function and we passed more arguments than the function parameters
 * javascript will not throw any error, it will just ignore the extra arguments.
 * All the arguments received for the function are stored in a special array-like object called "arguments", and actually we can acces to all the arguments passed to the function.
 */
function presentYourself(name, age, city) {
    argumentsObject = arguments; // here we are storing the arguments object in a variable to be able to access it outside the function.
    console.log(arguments); // here we can see all the arguments passed to the function.
    console.log("My name is " + name + ", I am " + age + " years old and I live in " + city);
}

/**
 * let's see another example of how to declare a function as a lambda function, also known as arrow function, this is a more concise way to declare functions in javascript.
 * the syntax is: const functionName = (parameters) => { function body }
 * if the function body is a single expression, we can omit the curly braces and the return statement, and the expression will be returned by default.
 * @param {number} a - the first number to sum
 * @param {number} b - the second number to sum
 * @returns {number} the sum of a and b
 */
const simpleSum = (a, b) => {
    return a + b;
}

/**
 * this is a function that receives a variable number of arguments, in java we would writte somithing like sum(int numbers...) but in javascript
 * we writte the dots after the parameter name to indicate that it can receibe a n quantity of arguments.
 * @param  {...any} sum 
 * @returns 
 */
const variableArgumetnssum = (...sum) => {
    let total = 0;
    let numbersArray = Array.from(sum);

    for (let i = 0; i < numbersArray.length; i++) {

        console.log("Number: ", numbersArray[i]);

        if (typeof numbersArray[i] !== "number") {
            console.error("the given argument ", numbersArray[i], " is not a umber");
            continue;
        }

        total = total + numbersArray[i];
    }

    return total;
}
//#endregion

//#region functions Call

// here we ask the user for their name
const name = prompt("What is your name?");
// here we call the anonymous function and show the result in the console
anonymousGreet(name);
// and here we call the greet function and show the result in an alert
alert(greet(name));

/**
 * these are the data of a person that we will pass to the presentYourself function, but we will also pass some extra arguments to see how the function handles them.
 */
const Pablo = {
    name: "Pablo",
    age: 30,
    city: "Madrid"
}

// calling the function
// here we are passing an extra argument that will be ignored by the function but we can see it in the arguments object.
presentYourself(Pablo.name, Pablo.age, Pablo.city, "extra argument", true, false, 29373, 2.1437278364);

const argumentsArray = Array.from(argumentsObject); // here we are converting the arguments object to an array to be able to use array methods on it.
argumentsArray.forEach((arg, index) => {
    console.log(typeof arg, arg, index);
});

console.log({ argumentsObject });
const argumentPropertiesArray = Object.getOwnPropertyNames(argumentsObject);
argumentPropertiesArray.forEach((property, index) => {
    console.log(property, typeof argumentPropertiesArray[property], argumentsObject[property], index);
})



const result = simpleSum(5, 10);
console.log("the result of the sum is: ", result); // Output: the result of the sum is: 15

// calling the function with the variable number of arguments
const totalSum = variableArgumetnssum(24, 12, 56, 23, 78, 23, 65, 'not a number', false, 1.34243, 12.342234);
console.log("the total sum is: ", totalSum);

const getRandomNumber = () => Math.random();
console.log("Random number: ", getRandomNumber());

//#endregion