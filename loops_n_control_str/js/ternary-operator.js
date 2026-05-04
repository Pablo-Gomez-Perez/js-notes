// usign the .includes() method arrays we can check is something is
// inside and array

/**
 * Identify is the bussines is open depending on the current hour and
 * the given open hour of the day
 * @param {*} currentHour 
 * @param {*} openHour 
 * @returns 
 */
const isOpen = (currentHour, openHour) => {
    return (currentHour >= openHour) ? 'Its open' : `Its close we open at: ${openHour}`;
}

//lets assume one day of the week
let currentDay = 5;

const weekEnds = [0,6];
let openHour = (weekEnds.includes(currentDay)) ? 11 : 9;

console.log('open hour: ', openHour);

const message = isOpen(15,openHour);

console.log(message);