const input = document.querySelector('input');
const promt = document.querySelector('#promt');
const output = document.querySelector('#output');
const button = document.querySelector('.btn')



button.onclick = () => getWeekDayByNumber(parseInt(input.value));

function getWeekDayByNumber(day) {
    switch (day) {
        case 1:
            alert('Monday');
            break;
        case 2:
            alert('Tuesday');
            break;
        case 3:
            alert('Wednesday')
            break;
        case 4:
            alert('Thursday')
            break;
        case 5:
            alert('Friday')
            break;
        case 6:
            alert('Aturday')
            break;
        case 7:
            alert('Sunday')
            break;
        case 8:
            alert('Перебор')
            break;
        default:
            alert('Нет таких значений');

    }
};




