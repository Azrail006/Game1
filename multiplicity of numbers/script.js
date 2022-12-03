const number = document.querySelector('#number');
const output = document.querySelector('#output')
const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {

    e.preventDefault()
const result = multiplicityCheck(...number.value.split(',').map(i => Number(i)))




function multiplicityCheck(X, Y) {
     if (X % Y === 0) {
        alert('Кратное');
     } else {
        alert('Не кратное');
     }

}
})
