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
