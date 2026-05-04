
const carsTable = document.getElementById('cars-table');
const tableButton = document.getElementById('render-table');

/**
 * jut a cars array XD
 */
const cars = [
    {uid: 192847, brand: 'Ford'},
    {uid: 192823, brand: 'Toyota'},
    {uid: 192854, brand: 'Honda'},
    {uid: 198236, brand: 'Nissan'},
    {uid: 198361, brand: 'BYW'},
];

const renderCarsTable = () => {

    const tableBody = document.createElement('tbody');

    cars.forEach( item => {
        const row = document.createElement('tr');
        Object.values(item).forEach( val => {
            const tData = document.createElement('td');
            tData.textContent = val;
            row.appendChild(tData);
        });
        tableBody.appendChild(row);
    });

    carsTable.appendChild(tableBody);
}


const printCarsArray = () => {
    let i = 0

    while(i < cars.length){
        console.log(cars);
        i++;
    }

}

tableButton.addEventListener('click', () => {
    renderCarsTable();
    printCarsArray();
});

console.log(Object.values(cars));