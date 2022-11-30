const number = document.querySelector('#number');
const output = document.querySelector('#output');
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    const result= sumNumbers((number.value.split('').map(i => Number(i))))
    alert(result);});

function mostNumbers() {
    return [...arguments];
};





function sumNumbers (arrayNumbers) {
    return arrayNumbers.reduce((prev, cur) => prev + cur, 0);
}
