let currentDate = new Date();
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


let month = Number(currentDate.getMonth()) + 1;
if (month < 10)
month = `0${month}`

const day = currentDate.getUTCDate();


const formattedDate = `2022-${month}-${day}`


const year = currentDate.getFullYear();


const currentMonth = months[currentDate.getMonth()]

const dateToday = `${currentMonth} ${day} ${year}`


export {currentDate, formattedDate, month, day, dateToday}