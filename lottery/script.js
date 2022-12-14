const number = document.querySelector('#numbers');
const output = document.querySelector('#output')
const button = document.querySelector('.btn');
const response = getRandomIntInclusive();
console.log(response);


button.addEventListener('click', (event) => {
    const result = guessTheNumbers(parseInt(number.value), response)

    if (result) {
        alert('Вы выиграли');
    } else {
        printMessage('Не правильно попробуй ещё раз')

    }

});

function getRandomIntInclusive() {
    const min = 11111;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessTheNumbers(number, resp) {
    if (number === resp) {
        return true;
    }
    return false;
}
function printMessage(message) {
    // console.log(message);
    let again = document.createElement('p');
    again.textContent = message;
    output.appendChild(again);
}