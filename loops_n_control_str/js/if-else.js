
const todayLabel = document.getElementById('today-label');
const checkButton = document.getElementById('btn-check');
const dayCheckButton = document.getElementById('dayCheckButton');
const today = new Date();
const day = today.getDay();


const checkBigger = (first, second) => {
    if (first > second) {
        alert(first + " Is bigger");
    } else {
        alert(second + " Is bigger");
    }
};

const todayIs = () => {
    
    if(day === 0){
        todayLabel.textContent = 'Sunday';
    }else if(day === 1){
        todayLabel.textContent = 'Monday';
    }else if(day === 2){
        todayLabel.textContent = 'Tuesday';
    }else{
        todayLabel.textContent = 'Its not sunday, monday or tuesday';
    }

}

dayCheckButton.addEventListener('click', () => {
    todayIs();
})

checkButton.addEventListener('click', () => {
    const firstNumber = document.getElementById('frnumber').value;
    const secondNumber = document.getElementById('scnumber').value;
    checkBigger(parseInt(firstNumber), parseInt(secondNumber));
});


console.warn(today);

