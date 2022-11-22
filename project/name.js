
let playBox = document.querySelector("#playBox");
let btnLess = document.querySelector("#btnLess");
let btnGreater = document.querySelector("#btnGreater");
const button =document.querySelector('.btn');

button.click= () => getIsPensioner(parseInt(input.value));

function getIsPensioner(age, gender) {
    if (gender === 'male' && age >= 60 || gender === 'female' && age >= 55) {
        return true;
    } else {
    return false;
    }
}; 

btnStart.addEventListener("click", function () {
    btnStart.style.display = "none";
    playBox.style.display = "block";

});


