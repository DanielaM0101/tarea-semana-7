'use strict'


function multiplicar(multiplicador, multiplicando) {
    
    let suma = 0;
    for (let i=0; i < multiplicador; i++) {
        suma =  suma + multiplicando;
    }

    return suma;
}

let num1 = Number (prompt("Ingrese el  multiplicador"));
let num2 = Number(prompt("Ingrese el  multiplicando"));

let resultado= multiplicar (num1, num2);{
   alert(resultado);
}

