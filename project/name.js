
const age = document.querySelector('#age');
const gender = document.querySelector('#gender');
const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    const result = getIsPensioner(parseInt(age.value), gender.value)

    if (result) {
        alert('Pensioner');
    } else {
        alert('babayka');
    }
});

function getIsPensioner(age, gender) {
    if (gender === 'male' && age >= 60 || gender === 'female' && age >= 55) {
        return true;
    } else {
        return false;
    }
}

