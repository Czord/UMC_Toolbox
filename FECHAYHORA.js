//objeto date

let fechaActual = new Date();

console.log(fechaActual);

console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear());
console.log(fechaActual.getDay());

//EJERCICIO 1: Mostrar la fecha actual

let fecha = new Date();
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());

let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(mes[fecha.getMonth()]);

console.log(`${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}`);