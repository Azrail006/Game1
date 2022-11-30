const number = document.querySelector('#number');
const output = document.querySelector('#output')
const button = document.querySelector('.btn');

function isLetter(str) {
    return str.length === 1 && str.match(/[а-я]/i);
}

function isLetters(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

button.addEventListener('click', (event) => {
  event.preventDefault()
    const result = defineSymbol(parseInt(number.value))

    function defineSymbol(number) {
        if (Number(number)) {
            console.log('Это число');
        } else if (isLetter(number)) {
            console.log('Это буква');
        } else if (isLetters(number)) {
            console.log('Это буква');
        } else {
            console.log('Это символ');
        }

    }
});

    