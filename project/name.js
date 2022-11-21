const output = document.querySelector('#output');
const promt = document.querySelector('#promt');
const input = document.querySelector('#promt input');



function getIsPensioner(age, gender) {
    if (gender === 'male' && age > 60 || gender === 'female' && age > 55) {
        return true;
    }
    return false;
}

