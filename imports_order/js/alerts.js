
//console.log("accesing to my name from the alerts.js file: ", myName);

//this wont work in the browser, but in nodejs it will work because in nodejs we have a global object
console.log( global )

let name = prompt("Say me your name: ");
console.log("hello ", name, " nice to meet you!");

const selection = confirm("Do you want to continue?");
console.info("The user selection is: ", selection);