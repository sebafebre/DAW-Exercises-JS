// Ejercicio a: Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function funcionSuma(a, b) {
    return a + b;
}

let resultadoSuma = funcionSuma(3, 7);
console.log('Resultado de la suma:', resultadoSuma);

// Ejercicio b: A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function sumaConValidacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Error: Uno de los parámetros no es un número');
        return NaN;
    }
    return a + b;
}

resultadoSuma = sumaConValidacion(5, '7');
console.log('Resultado de la suma con validación:', resultadoSuma);

// Ejercicio c: Crear una función validateInteger que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateInteger(num) {
    return Number.isInteger(num);
}

console.log('¿5 es un entero?', validateInteger(5));
console.log('¿5.7 es un entero?', validateInteger(5.7));

// Ejercicio d: A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function sumaConValidacionYEnteros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Error: Uno de los parámetros no es un número');
        return NaN;
    }
    if (!validateInteger(a)) {
        alert('Error: El primer número no es un entero. Será redondeado.');
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert('Error: El segundo número no es un entero. Será redondeado.');
        b = Math.round(b);
    }
    return a + b;
}

resultadoSuma = sumaConValidacionYEnteros(5.7, 7.4);
console.log('Resultado de la suma con validación y enteros:', resultadoSuma);

// Ejercicio e: Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function validarYRedondear(num) {
    if (!validateInteger(num)) {
        alert(`Error: El número ${num} no es un entero. Será redondeado.`);
        return Math.round(num);
    }
    return num;
}

function sumaFinal(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Error: Uno de los parámetros no es un número');
        return NaN;
    }
    a = validarYRedondear(a);
    b = validarYRedondear(b);
    return a + b;
}

resultadoSuma = sumaFinal(5.7, 7.4);
console.log('Resultado de la suma final con todas las validaciones:', resultadoSuma);
