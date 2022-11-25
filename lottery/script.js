const number = document.querySelector('#number');
const output = document.querySelector('#output')
const button = document.querySelector('.btn');
const response = getRandomIntInclusive();
console.log(response);

const maxTryCount = 5
let attempts = 0;

button.addEventListener('click', (event) => {
    if (attempts < maxTryCount) {
        const result = guessTheNumbers(parseInt(number.value), response)
        if (result) {
            attempts++;
            output.textContent = attempts
            
            alert('Вы выиграли');
        } else {
            event.preventDefault();
            printMessage('Неправильно, попробуйте ещё раз')
            
            attempts++;
            output.textContent = attempts
        }
    } else {
        alert('Попытки закончились, вы проиграли')
    }
});

function getRandomIntInclusive() {
    const min = 11111;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessTheNumbers(number, resp) {
    return number === resp;
}
function printMessage(message) {
    let again = document.createElement('p');
    again.textContent = message;
    output.appendChild(again);
}