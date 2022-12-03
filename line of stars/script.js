const number = document.querySelector('#number');
const output = document.querySelector('#output')
const button = document.querySelector('.btn');
button.addEventListener('click', (e) => {
    e.preventDefault()
    const result = '*'.repeat(Number(number.value));
    printMessage(result)
});

function printMessage(message) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(message));
    output.appendChild(li);
}