let userName = '';
let number = Math.floor(Math.random() * 100);
let attempt = 0;

const output = document.querySelector('#output');
const promt = document.querySelector('#promt');
const input = document.querySelector('#promt input');
console.log(number);
printMessage('Введите имя игрока:');
promt.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    processInput(input.value);
    input.value = '';
};

function printMessage(message) {
    let again = document.createElement('again');
    again.textContent = message;
    output.appendChild(again);

};
function clearOutput() {
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
};


function processInput(input) {
    if (!input) {
        return;
    }

    if (!userName) {
        userName = input;
        clearOutput();
        printMessage(`${input}, Загадано число от 1 до 100.После каждой попытки я скажу "мало", "много" или "верно".`);
        return;
    }

    printMessage(input);
    let guess = Number.parseInt(input);
    if (Number.isNaN(guess)) {
        return;
    }
    attempt += 1;
    if (guess > number) {
        printMessage('Много.Попробуй еще раз.');
    } else if (guess < number) {
        printMessage('Мало.Попробуй еще раз');
    } else {
        printMessage(`Верно ${guess}.`);
        printMessage(`Количество попыток: ${attempt}`);
        printMessage('GAME OVER');
        promt.remove();
    }
};
