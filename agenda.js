let monthNames = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto', 'Octubre', 'Septiembre', 'Noviembre', 'Diciembre'];

//objeto
let currentDate = new Date();

let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());

//mes previo
function lastMonth() {
    if (monthNumber !== 0){
        monthNumber--;
    }else {
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

//mes posterior

function nextMonth() {
    if (monthNumber !== 11){
        monthNumber++;
    }else {
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

function setNewDate(){
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
}