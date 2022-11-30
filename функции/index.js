function pow(a, b) {
    return Math.pow(a, b);
}

let a = prompt("a", '');
let b = prompt("b", '');

if (a < 1) {
    alert(`${b}`);
} else {
    alert(pow(a, b));
}


function comparison(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function isLetter(str) {
    return str.length === 1 && str.match(/[а-я]/i);
}

function isLetters(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}



function defineSymbol(number) {
    if (Number(number)) {
        console.log('Это число');
    } else if (isLetter(number) || isLetters(number)) {
        console.log('Это буква');
    } else {
        console.log('Это символ');
    }

}