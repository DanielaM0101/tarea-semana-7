' use strict'


function calcularEdad(year){
    let currentYear= 2023;
    let age = currentYear - year

    alert("tu edad es: " +age )
}
let yearOfBirth= Number( prompt("ingresa tu año de nacimiento")) ;
calcularEdad(yearOfBirth)
